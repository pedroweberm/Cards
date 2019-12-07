export const GestureTypes = {
  UNDETERMINED: 0,
  TAP: 1,
  SWIPE_LEFT: 2,
  SWIPE_RIGHT: 3,
  SWIPE_UP: 4,
  SWIPE_DOWN: 5,
}

export function checkGestureType(translationX, translationY) {
  //console.warn(`TranslationX: ${translationX}, TranslationY: ${translationY}`)
  if (translationY >= 75) {
    //console.warn('Gesture type: SWIPE_DOWN')
    return GestureTypes.SWIPE_DOWN
  } else if (translationY <= -75) {
    //console.warn('Gesture type: SWIPE_UP')
    return GestureTypes.SWIPE_UP
  } else if (translationX >= 25) {
    //console.warn('Gesture type: SWIPE_LEFT')
    return GestureTypes.SWIPE_LEFT
  } else if (translationX <= -25) {
    //console.warn('Gesture type: SWIPE_RIGHT')
    return GestureTypes.SWIPE_RIGHT
  } else if (Math.abs(translationX) < 10 && Math.abs(translationY) < 10) {
    //console.warn('Gesture type: TAP')
    return GestureTypes.TAP
  } else {
    //console.warn('Gesture type: UNDETERMINED')
    return GestureTypes.UNDETERMINED
  }
}
