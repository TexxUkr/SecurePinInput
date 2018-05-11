<a href="https://user-images.githubusercontent.com/19600091/39945935-edc2d962-5574-11e8-8155-36ee2d665f69.gif"><img src="https://user-images.githubusercontent.com/19600091/39945935-edc2d962-5574-11e8-8155-36ee2d665f69.gif" title="made at imgflip.com"/></a>


# SecurePinInput
Description:
  react native component with fully secured pin code validation
  renders a view with secure pin input that opens a keyboard to input pin values
  on finish component calls a callback that could be used by parent component

Reference:
  Props:
  
    length
    Type: Number
    Default: 6
    Number of pins to input

    onInputFinish
    Type: Function
    Default: result => console.info(`input has been finished. Pin is ${result}`),
    Callback on all the pin input which arg is an array of pin values entered

    clearOnFinish
    Type: Boolean
    Default: true
    if true pin value entered is cleared on last pin value input
}


# BUGS that need to be fixed in RN to use component
https://github.com/humandx/react-native/commit/442f97bee0e6da546d848e45a2bedfa436b146c8


