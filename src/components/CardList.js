import React, { useState, useRef, useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import { GestureTypes } from '../utils/gestures'

import Card from './Card'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 3,
    marginTop: 50,
  },
})

const renderItem = (card, setGesture, index) => {
  return <Card cardText={card.text} setGesture={setGesture} index={index} />
}

const CardList = ({ cardsData, onTapCard, onSwipeUp, onSwipeDown }) => {
  const [gesture, setGesture] = useState({ code: 0, index: 0 })
  const [activeIndex, setActiveIndex] = useState(0)
  const flatlistRef = useRef(null)

  useEffect(() => {
    switch (gesture.code) {
      case GestureTypes.SWIPE_LEFT:
        if (activeIndex > 0) {
          flatlistRef.current.scrollToIndex({
            animated: true,
            index: activeIndex - 1,
            viewOffset: 0,
          })
          setActiveIndex(activeIndex - 1)
        }
        setGesture(0)
        break
      case GestureTypes.SWIPE_RIGHT:
        if (activeIndex < cardsData.length - 1) {
          flatlistRef.current.scrollToIndex({
            animated: true,
            index: activeIndex + 1,
            viewOffset: 0,
          })
          setActiveIndex(activeIndex + 1)
        }
        setGesture(0)
        break
      case GestureTypes.TAP:
        if (activeIndex === gesture.index) {
          onTapCard(activeIndex)
        } else {
          flatlistRef.current.scrollToIndex({
            animated: true,
            index: gesture.index,
            viewOffset: 0,
          })
          setActiveIndex(gesture.index)
        }
        setGesture(0)
        break
      case GestureTypes.SWIPE_UP:
        onSwipeUp(cardsData[activeIndex].id)
        setGesture(0)
        break
      case GestureTypes.SWIPE_DOWN:
        onSwipeDown(cardsData[activeIndex].id)
        setGesture(0)
        break
    }
  }, [gesture])

  return (
    <View style={styles.mainContainer}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        data={cardsData}
        renderItem={({ item, index }) => renderItem(item, setGesture, index)}
        keyExtractor={(item, index) => String(index)}
        ref={ref => {
          flatlistRef.current = ref
        }}
      />
    </View>
  )
}

export default CardList
