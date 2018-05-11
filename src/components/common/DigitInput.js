import React from 'react'
import { TextInput, ViewPropTypes, Platform } from 'react-native'
import PropTypes from 'prop-types'

const style = {
  fontSize: 0,
  width: 0,
  height: 0,
  paddingBottom: 0,
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  textAlign: 'center',
}

class DigitInput extends React.Component {
  componentDidMount() {
    this.setFocus(this.props.focus)
  }

  componentWillReceiveProps(props) {
    this.setFocus(props.focus)
  }

  setFocus(focus) {
    if (this.compnent && focus) this.compnent.focus()
  }

  render() {
    return (
      <TextInput
        autoCorrect={false}
        disableFullscreenUI
        underlineColorAndroid="transparent"
        keyboardType="numeric"
        maxLength={1}
        blurOnSubmit={false} // ignore enter on android keyboard
        style={{ ...style, ...this.props.style }}
        value={this.props.value}
        onKeyPress={(input) => {
          // console.info(input.nativeEvent.key)
          this.props.digitChanged(this.props.index, input.nativeEvent.key)
        }}
        onChangeText={(text) => {
          // onKeyPress does not work with numeric keyboard on android so duplication needs
          if (Platform.OS === 'android') {
            this.props.digitChanged(this.props.index, text)
          }
        }}

        /*
        onSubmitEditing={(input) => {
          // android keyboard 'enter' interception
          if (Platform.OS === 'android') {
            console.info('onSubmit', input.nativeEvent)
            this.setState(() => ({ focused: false }))
          }
        }}
        */

        ref={(component) => { this.compnent = component }}
      />)
  }
}

DigitInput.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  digitChanged: PropTypes.func.isRequired,
  focus: PropTypes.bool.isRequired,
  style: ViewPropTypes.style,
}

DigitInput.defaultProps = {
  style: {},
}

export { DigitInput }
