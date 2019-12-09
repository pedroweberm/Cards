import React, { useState, useEffect } from 'react'
import { View, StyleSheet, StatusBar, ToastAndroid } from 'react-native'

import CardList from '../components/CardList'
import BottomArea from '../components/BottomArea'

import rawCards from '../assets/exampleCards.json'

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#333',
    flex: 1,
  },
})

const HomeSwipe = ({ navigation }) => {
  const [cards, setCards] = useState([])
  const [markedCards, setMarkedCards] = useState(1)
  const nextScreen = navigation.getParam('nextScreen')
  const testType = navigation.getParam('testType')

  const testInstructions =
    'Agora, os objetivos serão os mesmos:\n - Encontrar a carta chamada "Converse com um estranho" e marcar como concluída;\n - Encontrar a carta chamada "Beba 2 litros de água" e marcar como desistida.\nMas agora a interação para completar a carta será diferente.'

  useEffect(() => {
    setCards(rawCards.cards)
  }, [])

  const removeCard = id => {
    const newCards = cards.filter(card => card.id !== id)

    setCards(newCards)
  }

  const finishCard = id => {
    removeCard(id)
    ToastAndroid.showWithGravity(
      'Você concluiu essa carta',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    )
    setMarkedCards(markedCards + 1)
    if (markedCards >= 2) {
      navigation.goBack()
      if (testType === 0 || testType === 1) {
        navigation.push(nextScreen, {
          nextScreen: 'CompleteTestScreen',
          testType,
        })
      } else {
        navigation.push('TestInstructionScreen', {
          instructions: testInstructions,
          firstScreen: nextScreen,
          secondScreen: 'CompleteTestScreen',
          testType,
        })
      }
    }
  }

  const giveUpCard = id => {
    removeCard(id)
    ToastAndroid.showWithGravity(
      'Você desistiu dessa carta',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    )
    setMarkedCards(markedCards + 1)
    if (markedCards >= 2) {
      navigation.goBack()
      if (testType === 0 || testType === 1) {
        navigation.push(nextScreen, {
          nextScreen: 'CompleteTestScreen',
          testType,
        })
      } else {
        navigation.push('TestInstructionScreen', {
          instructions: testInstructions,
          firstScreen: nextScreen,
          secondScreen: 'CompleteTestScreen',
          testType,
        })
      }
    }
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#333'} />
      <CardList
        cardsData={cards}
        onTapCard={() => {}}
        onSwipeUp={finishCard}
        onSwipeDown={giveUpCard}
      />
      <BottomArea />
    </View>
  )
}

export default HomeSwipe
