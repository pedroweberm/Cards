import React from 'react'
import { Linking } from 'react-native'

import styled from 'styled-components'

import Button from '../components/Button'

const styles = {
  MainContainer: styled.ScrollView.attrs({
    contentContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  })`
    flex: 1;
    background: #333;
    flex-direction: column;
    padding: 40px 40px 80px 40px;
  `,
  TextContainer: styled.View`
    flex: 2;
    margin: 10px 0px 20px 0px;
  `,
  ButtonContainer: styled.View`
    flex: 1;
    margin: 10px 0px 10px 0px;
  `,
  InstructionText: styled.Text`
    font-size: 20px;
    color: #b5b5b5;
    text-align: justify;
  `,
}

const {
  MainContainer,
  ButtonContainer,
  TextContainer,
  InstructionText,
} = styles

const CompleteTestScreen = ({ navigation }) => {
  const testType = navigation.getParam('testType')
  const text = `Ao clicar nesse botão você será redirecionado para o formulário.\n\n        O SEU TESTE É DO TIPO ${testType}.`

  return (
    <MainContainer>
      <TextContainer>
        <InstructionText>{text}</InstructionText>
      </TextContainer>
      <ButtonContainer>
        <Button
          buttonText={'Responder'}
          onPress={() =>
            Linking.openURL(
              'https://docs.google.com/forms/d/e/1FAIpQLSct12B6C_p-OqPJhySPXJq-L2h-8kJUrWg_ZF_nssx3zwrjgQ/viewform?usp=sf_link',
            )
          }
          theme={{
            backgroundColor: '#454545',
            fontColor: '#b5b5b5',
          }}
        />
      </ButtonContainer>
    </MainContainer>
  )
}

export default CompleteTestScreen
