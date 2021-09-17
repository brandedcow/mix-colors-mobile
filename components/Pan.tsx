import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Text } from './Themed'
import Color from '../types/Color'
import isDarkColor from '../lib/isDarkColor'

type PanProps = {
  name: string
  hex: string
  onPress: (color: Color) => void
}

export default function Pan(props: PanProps) {
  function handlePress() {
    props.onPress({
      name: props.name,
      hex: props.hex,
      weight: 1
    })
  }

  return (
    <Pressable 
      onPress={handlePress}
      style={{
        ...styles.container,
        backgroundColor: `#${props.hex}`
      }}
    >
      <Text style={{
        color: isDarkColor(props.hex) ? 'white' : 'black'
      }}>
        {props.name}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '2%'
  }
})