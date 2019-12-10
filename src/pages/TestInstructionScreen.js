import React from 'react'

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

const TestInstructionScreen = ({ navigation }) => {
  const testInstructions = navigation.getParam('instructions')
  const firstScreen = navigation.getParam('firstScreen')
  const secondScreen = navigation.getParam('secondScreen')
  const testType = navigation.getParam('testType')

  return (
    <MainContainer>
      <TextContainer>
        <InstructionText>{testInstructions}</InstructionText>
      </TextContainer>
      <ButtonContainer>
        <Button
          buttonText={'Entendi'}
          onPress={() =>
            navigation.navigate(firstScreen, {
              nextScreen: secondScreen,
              testType,
            })
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

export default TestInstructionScreen
