/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import SecurePinInput from './components/SecurePinInput'


const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxHeight: 150,
    flex: 1,
  },
  message: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomMessage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const App = () => (
  <View style={styles.container}>
    <View style={styles.message}>
      <Text> We sent 6 digit code to </Text>
      <Text> +380445678900 </Text>
      <Text> Please enter this code below. </Text>
    </View>
    <SecurePinInput />
    <View style={styles.bottomMessage}>
      <Text> Haven&apos;t received code yet? </Text>
      <Text> Resend Code </Text>
    </View>
  </View>
)
export default App
