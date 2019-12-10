import { Dimensions, PixelRatio } from 'react-native'

const coefficient = Dimensions.get('screen').width / 411.428

export function normalize(size) {
  const normalizedSize = PixelRatio.roundToNearestPixel(size * coefficient)

  console.log('normalized size', size, 'to', normalizedSize)
  return normalizedSize
}
