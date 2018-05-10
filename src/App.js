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
    minWidth: 15,
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
    console.info('onDigitInout here, digit is:', digit)
    if (digit !== '') {
      this.setState((prevState) => {
        const newDigits = [...prevState.digits]
        newDigits[prevState.focus] = digit
        return {
          digits: [...newDigits],
          focus: prevState.focus === (prevState.digits.length - 1) ? prevState.focus : prevState.focus + 1,
        }
      })
    } else {
      this.setState((prevState) => {
        const newDigits = [...prevState.digits]
        newDigits[prevState.focus] = ''
        return {
          digits: [...newDigits],
          focus: prevState.focus === 0 ? 0 : prevState.focus - 1,
        }
      })
    }
  }

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
              focus={this.state.focus === index}
              digitChanged={this.onDigitInput}
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

