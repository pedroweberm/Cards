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
  }

  const giveUpCard = id => {
    removeCard(id)
    ToastAndroid.showWithGravity(
      'Você desistiu dessa carta',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    )
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
