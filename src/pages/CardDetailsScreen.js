import React from 'react'
import { View, Text } from 'react-native'

import styled from 'styled-components'

import Card from '../components/Card'
import Button from '../components/Button'

const styles = {
  MainContainer: styled.View`
    flex: 1;
    background: #8f8f8f;
    flex-direction: column;
    padding: 20px 20px 5px 20px;
    justify-content: center;
    align-items: center;
  `,
  CardContainer: styled.View`
    flex: 6;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  OptionsContainer: styled.View`
    flex: 2;
    flex-direction: column;
    padding: 0px 20px;
  `,
  ButtonContainer: styled.View`
    margin-bottom: 15px;
  `,
  CloseButtonContainer: styled.View`
    flex: 1;
    margin-top: 40px;
  `,
}

const {
  MainContainer,
  CardContainer,
  OptionsContainer,
  ButtonContainer,
  CloseButtonContainer,
} = styles

const CardDetailsScreen = ({ navigation }) => {
  const card = navigation.getParam('card')
  const finish = navigation.getParam('finish')
  const giveUp = navigation.getParam('giveUp')

  return (
    <MainContainer>
      <CardContainer>
        <Card cardText={card.text} />
      </CardContainer>
      <OptionsContainer>
        <ButtonContainer>
          <Button
            buttonText={'Concluir'}
            onPress={() => {
              finish(card.id)
              navigation.goBack()
            }}
            theme={{ backgroundColor: 'green' }}
          />
        </ButtonContainer>
        <ButtonContainer>
          <Button
            buttonText={'Desistir'}
            onPress={() => {
              giveUp(card.id)
              navigation.goBack()
            }}
            theme={{ backgroundColor: 'red' }}
          />
        </ButtonContainer>
      </OptionsContainer>
      <CloseButtonContainer>
        <Button
          buttonText={'Fechar'}
          onPress={() => navigation.goBack()}
          theme={{
            backgroundColor: '#333',
            fontColor: '#b5b5b5',
          }}
        />
      </CloseButtonContainer>
    </MainContainer>
  )
}

export default CardDetailsScreen
