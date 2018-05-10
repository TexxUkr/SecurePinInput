import React from 'react'
import { ViewPropTypes } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

const style = {
  marginLeft: 5,
  marginRight: 5,
}

const PinIcon = props => (
  <Icon
    name={props.checked ? props.iconNameChecked : props.iconNameUnchecked}
    color={props.color}
    size={props.size}
    type="ionicon"
    iconStyle={{ ...style, ...props.style }}
  />
)

PinIcon.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  iconNameChecked: PropTypes.string,
  iconNameUnchecked: PropTypes.string,
  style: ViewPropTypes.style,
}

PinIcon.defaultProps = {
  checked: false,
  color: 'black',
  size: 30,
  iconNameChecked: 'ios-radio-button-on',
  iconNameUnchecked: 'ios-radio-button-off',
  style: {},
}

export { PinIcon }

