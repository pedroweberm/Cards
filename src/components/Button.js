import React from 'react'
import { View } from 'react-native'

import styled, { ThemeProvider } from 'styled-components'

const styles = {
  Touchable: styled.TouchableOpacity`
    width: 100%;
    aspect-ratio: ${5 / 1};
    background: ${({ theme }) => theme.backgroundColor || `white`};
    border-width: 2px;
    border-color: black;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    elevation: 10;
  `,
  ButtonText: styled.Text`
    font-family: sans-serif-condensed;
    font-size: 25px;
    color: ${({ theme }) => theme.fontColor || `black`};
    font-weight: bold;
  `,
}

const { Touchable, ButtonText } = styles

const Button = ({ buttonText, onPress, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <Touchable onPress={onPress}>
        <ButtonText>{buttonText}</ButtonText>
      </Touchable>
    </ThemeProvider>
  )
}

export default Button
