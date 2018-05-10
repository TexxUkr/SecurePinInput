import React from 'react'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

const PinIcon = props => (
  <Icon
    name={props.checked ? props.iconNameChecked : props.iconNameUnchecked}
    color={props.color}
    size={props.size}
    type="ionicon"
  />
)

PinIcon.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  iconNameChecked: PropTypes.string,
  iconNameUnchecked: PropTypes.string,
}

PinIcon.defaultProps = {
  checked: false,
  color: 'black',
  size: 17,
  iconNameChecked: 'ios-radio-button-on',
  iconNameUnchecked: 'ios-radio-button-off',
}

export default PinIcon
