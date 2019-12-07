import React, { useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { PanGestureHandler, State } from 'react-native-gesture-handler'

import { checkGestureType } from '../utils/gestures'

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 20,
    marginVertical: 10,
    height: 375,
    width: 281.25,
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
    marginHorizontal: 20,
  },
  text: {
    fontSize: 40,
    color: '#333',
    fontWeight: 'bold',
  },
})

const Card = ({ cardText, setGesture, index }) => {
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
        <View style={styles.textContainer}>
          <Text style={styles.text}>{cardText}</Text>
        </View>
      </View>
    </PanGestureHandler>
  )
}

export default Card
