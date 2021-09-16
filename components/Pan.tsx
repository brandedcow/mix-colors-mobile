import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from './Themed'

type PanProps = {
  name: string
  hex: string
}

export default function Pan(props: PanProps) {
  return (
    <View style={{
        ...styles.container,
        backgroundColor: `#${props.hex}`
      }}>
      <Text>
        {props.name}
      </Text>
    </View>
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