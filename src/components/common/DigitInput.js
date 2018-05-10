import React from 'react'
import { TextInput } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  digit: {
    fontSize: 22,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    minWidth: 15,
    textAlign: 'center',
  },
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
    // console.info(`DigitInput is here. id:${props.index} focus:${props.focus}`)
    return (
      <TextInput
        autoCorrect={false}
        disableFullscreenUI
        underlineColorAndroid="transparent"
        keyboardType="numeric"
        maxLength={1}
        style={styles.digit}
        value={this.props.value}
        onChangeText={(input) => { this.props.digitChanged(this.props.index, input) }}
        ref={(component) => { this.compnent = component }}
      />)
  }
}

DigitInput.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  digitChanged: PropTypes.func.isRequired,
  focus: PropTypes.bool.isRequired,
}

export default DigitInput
