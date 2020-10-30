import React from 'react'
import {View, StyleSheet} from 'react-native'
import Row from './Row'

const Pixels = ({number, blank}) => {
  let pixels = []
  for (let index = 0; index < number; index++) {
    pixels = [
            pixels,
      <View key={index} style={[styles.pixel, blank && styles.BlankPixel]} />
    ]
  }
  return <Row> {pixels} </Row>
}

const pixeLength = 20

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row'
  },
  pixel: {
    width: pixeLength,
    height: pixeLength,
    backgroundColor: '#0f0'
  },
  BlankPixel: {
    backgroundColor: 'transparent'
  }
})

export default Pixels
