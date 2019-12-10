import React, { useRef } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { PanGestureHandler, State } from 'react-native-gesture-handler'

import { checkGestureType } from '../utils/gestures'
import { normalize } from '../utils/normalize'
import upArrowIcon from '../assets/up-arrow.png'

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: '#f0f0f0',
    marginHorizontal: normalize(20),
    marginVertical: normalize(10),
    width: normalize(281.25),
    aspectRatio: 0.75,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: normalize(20),
  },
  swipeUpIndicatorContainer: {
    position: 'absolute',
    left: '40%',
    top: -5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  swipeUpIndicatorText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#00a62d',
    opacity: 0.5,
  },
  upArrow: {
    height: normalize(25),
    aspectRatio: 1,
    tintColor: '#00a62d',
    opacity: 0.5,
  },
  swipeDownIndicatorContainer: {
    position: 'absolute',
    left: '40%',
    top: '89%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  swipeDownIndicatorText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    opacity: 0.5,
  },
  downArrow: {
    height: normalize(25),
    aspectRatio: 1,
    tintColor: 'red',
    opacity: 0.5,
    transform: [{ scaleY: -1 }],
  },
  text: {
    fontSize: normalize(40),
    color: '#333',
    fontWeight: 'bold',
  },
})

const Card = ({ cardText, setGesture, index, showSwipeIndicator }) => {
  const gestureType = useRef(0)

  const handleStateChange = function({ nativeEvent }) {
    if (nativeEvent.state === State.END) {
      gestureType.current = checkGestureType(
        nativeEvent.translationX,
        nativeEvent.translationY,
      )
      setGesture?.({ code: gestureType.current, index: index })
    }
  }

  return (
    <PanGestureHandler
      maxPointers={1}
      minDist={10}
      onHandlerStateChange={handleStateChange}>
      <View style={styles.container}>
        {showSwipeIndicator && (
          <View style={styles.swipeUpIndicatorContainer}>
            <Image source={upArrowIcon} style={styles.upArrow} />
            <Text style={styles.swipeUpIndicatorText}>Concluir</Text>
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.text}>{cardText}</Text>
        </View>
        {showSwipeIndicator && (
          <View style={styles.swipeDownIndicatorContainer}>
            <Text style={styles.swipeDownIndicatorText}>Desistir</Text>
            <Image source={upArrowIcon} style={styles.downArrow} />
          </View>
        )}
      </View>
    </PanGestureHandler>
  )
}

export default Card
