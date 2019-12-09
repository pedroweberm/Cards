import React from 'react'

import styled from 'styled-components'

import Button from '../components/Button'

import testCases from '../assets/testParams.json'

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

    padding: 40px;
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

const Main = ({ navigation }) => {
  const introText =
    ' O objetivo desse app é ser uma fonte de motivação para que os usuários completem objetivos diários e tenham crescimento pessoal nas áreas que desejarem. Para isso, o aplicativo dá aos usuários, diariamente, cartas com pequenos objetivos que podem ser marcados como completos ou, se necessário, desistidos.\n Nesse teste iremos avaliar dois métodos para finalizar um objetivo (concluir ou desistir). Ao fim, você será redirecionado para um formulário do Google onde responderá algumas perguntas sobre a sua experiência.'

  const selectTest = () => {
    const testType = Math.floor(Math.random() * 4)

    switch (testType) {
      case 0:
        navigation.navigate('TestInstructionScreen', {
          instructions: testCases.test0.introText,
          firstScreen: testCases.test0.firstScreen,
          secondScreen: testCases.test0.secondScreen,
          testType,
        })
        break
      case 1:
        navigation.navigate('TestInstructionScreen', {
          instructions: testCases.test1.introText,
          firstScreen: testCases.test1.firstScreen,
          secondScreen: testCases.test1.secondScreen,
          testType,
        })
        break
      case 2:
        navigation.navigate('TestInstructionScreen', {
          instructions: testCases.test2.introText,
          firstScreen: testCases.test2.firstScreen,
          secondScreen: testCases.test2.secondScreen,
          testType,
        })
        break
      case 3:
        navigation.navigate('TestInstructionScreen', {
          instructions: testCases.test3.introText,
          firstScreen: testCases.test3.firstScreen,
          secondScreen: testCases.test3.secondScreen,
          testType,
        })
        break
    }
  }

  return (
    <MainContainer>
      <TextContainer>
        <InstructionText>{introText}</InstructionText>
      </TextContainer>
      <ButtonContainer>
        <Button
          buttonText={'Iniciar teste'}
          onPress={() => selectTest()}
          theme={{
            backgroundColor: '#454545',
            fontColor: '#b5b5b5',
          }}
        />
      </ButtonContainer>
    </MainContainer>
  )
}

export default Main
