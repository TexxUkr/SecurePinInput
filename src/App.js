/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import PinIcon from './components/common/PinIcon'
import DigitInput from './components/common/DigitInput'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  digit: {
    fontSize: 20,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    maxWidth: 0,
    textAlign: 'center',
  },
  digits: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      digits: ['', '', '', '', '', ''],
      focus: 0,
    }
  }

  onDigitInput = (index, digit) => {
    console.info('onDigitInput here, digit is:', index, ' ', digit)

    if (digit === 'Backspace') {
      this.setState((prevState) => {
        console.info('backspace', prevState)
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
      this.setState((prevState) => {
        const newDigits = [...prevState.digits]
        newDigits[index] = digit
        return {
          digits: [...newDigits],
        }
      })
    }
  }

  getFocus = () => this.state.digits.findIndex(value => value === '')

  render() {
    console.info('this state is', this.state)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <View style={styles.digits}>
          {this.state.digits.map((value, index) => (
            <DigitInput
              key={`digit#${index}`}
              index={index}
              value={this.state.digits[index]}
              focus={this.getFocus() === index}
              digitChanged={this.onDigitInput}
            // style={{ maxWidth: 0, minWidth: 0, maxHeight: 0 }}
            />))}
        </View>
        <View style={styles.digits}>
          {this.state.digits.map((value, index) => (
            <PinIcon
              key={`pin#${index}`}
              index={index}
              checked={this.state.digits[index] !== ''}
            />))}
        </View>
      </View>
    )
  }
}

