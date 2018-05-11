/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Keyboard,
} from 'react-native'
import PropTypes from 'prop-types'
import { PinIcon, DigitInput } from './common/index'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  digits: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})


export default class SecurePinInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      digits: (new Array(props.length)).fill(''),
    }
  }
  componentDidUpdate() {
    // console.info('state', this.state)
    this.checkIfFinish() && this.onFinish()
  }

  onDigitInput = (index, digit) => {
    if (digit === 'Backspace') {
      this.setState((prevState) => {
        const newDigits = [...prevState.digits]
        if (newDigits[index] === '') {
          newDigits[index - 1] = ''
        } else {
          newDigits[index] = ''
        }
        return {
          digits: [...newDigits],
        }
      })
    }

    if (digit !== 'Backspace' && digit !== 'Enter') {
      if (this.state.digits.some(elem => elem === '')) {
        this.setState((prevState) => {
          const newDigits = [...prevState.digits]
          newDigits[index] = digit
          return {
            digits: [...newDigits],
          }
        })
      }
    }
  }

  getFocus = () => this.state.digits.findIndex(value => value === '')
  checkIfFinish = () => this.state.digits.every(elem => elem !== '')
  onFinish = () => {
    Keyboard.dismiss()
    this.props.onInputFinish(this.state.digits)
    if (this.props.clearOnFinish) setTimeout(() => this.clearInput(), 1000)
  }
  clearInput = () => this.setState({
    digits: new Array(this.props.length).fill(''),
  })

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.digits}>
          {this.state.digits.map((value, index) => (
            <DigitInput
              key={`digit#${index}`}
              index={index}
              value={this.state.digits[index]}
              focus={this.getFocus() === index}
              digitChanged={this.onDigitInput}
              style={{ maxWidth: 0, minWidth: 0, maxHeight: 0 }}
            />))}
        </View>
        <View style={styles.digits}>
          {this.state.digits.map((value, index) => (
            <PinIcon
              key={`pin#${index}`}
              index={index}
              checked={this.state.digits[index] !== ''}
              style={{ marginRight: 5 }}
            />))}
        </View>
      </View>
    )
  }
}

SecurePinInput.propTypes = {
  length: PropTypes.number,
  onInputFinish: PropTypes.func,
  clearOnFinish: PropTypes.bool,
}

SecurePinInput.defaultProps = {
  length: 6,
  onInputFinish: result => console.info(`input has been finished. Pin is ${result}`),
  clearOnFinish: true,
}
