import React from 'react'

import styled from 'styled-components'

import Button from '../components/Button'

const styles = {
  MainContainer: styled.View`
    flex: 1;
    background: #333;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  `,
  ButtonContainer: styled.View`
    margin: 10px 0px 10px 0px;
  `,
}

const { MainContainer, ButtonContainer } = styles

const Main = ({ navigation }) => {
  return (
    <MainContainer>
      <ButtonContainer>
        <Button
          buttonText={'Test complete screen'}
          onPress={() => navigation.navigate('Home')}
          theme={{
            backgroundColor: '#454545',
            fontColor: '#b5b5b5',
          }}
        />
      </ButtonContainer>
      <ButtonContainer>
        <Button
          buttonText={'Test complete swipe'}
          onPress={() => navigation.navigate('HomeSwipe')}
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
