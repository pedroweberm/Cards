import React from 'react'

import styled from 'styled-components'

const styles = {
  MainContainer: styled.ScrollView.attrs({
    contentContainerStyle: {
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  })`
    flex: 1;
    background: #333;
    flex-direction: column;
    padding: 20px 40px 80px 40px;
  `,
  TextContainer: styled.View`
    flex: 2;
    align-items: flex-start;
    margin: 10px 0px 20px 0px;
  `,
  ButtonContainer: styled.View`
    flex: 1;
    margin: 10px 0px 10px 0px;
  `,
  TitleText: styled.Text`
    font-size: 40px;
    color: white;
    font-weight: bold;
    text-align: left;
  `,
}

const { MainContainer, ButtonContainer, TextContainer, TitleText } = styles

const DeckScreen = ({ navigation }) => {
  return (
    <MainContainer>
      <TextContainer>
        <TitleText>Seus Decks</TitleText>
      </TextContainer>
      <ButtonContainer></ButtonContainer>
    </MainContainer>
  )
}

export default DeckScreen
