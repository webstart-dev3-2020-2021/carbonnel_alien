import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import Row from './Components/Row'
import Pixels from './Components/Pixels'

export default function App() {
  return (
          <View style={styles.container}>
            <Row>
              <Pixels number={1}/>
              <Pixels number={4} blank/>
              <Pixels number={1}/>
            </Row>
            <Row>
              <Pixels number={1}/>
              <Pixels number={2} blank/>
              <Pixels number={1}/>
            </Row>
            <Row>
              <Pixels number={6}/>
            </Row>
            <Row>
              <Pixels number={2}/>
              <Pixels number={1} blank/>
              <Pixels number={3}/>
              <Pixels number={1} blank/>
              <Pixels number={2}/>
            </Row>
            <Row>
              <Pixels number={11}/>
            </Row>
            <Row>
              <Pixels number={1}/>
              <Pixels number={1} blank/>
              <Pixels number={7}/>
              <Pixels number={1} blank/>
              <Pixels number={1}/>
            </Row>
            <Row>
              <Pixels number={1}/>
              <Pixels number={1} blank/>
              <Pixels number={1}/>
              <Pixels number={5} blank/>
              <Pixels number={1}/>
              <Pixels number={1} blank/>
              <Pixels number={1}/>
            </Row>
            <Row>
              <Pixels number={3} blank/>
              <Pixels number={2} />
              <Pixels number={1} blank/>
              <Pixels number={2} />
              <Pixels number={3} blank/>
            </Row>
          </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
