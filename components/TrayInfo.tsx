import React from 'react'
import { StyleSheet } from 'react-native'
import useTrayState from '../state/useTrayState'
import { View, Text } from './Themed'

type TrayInfoProps = {
  name: String
  hex: String
  weight: Number
}

export default function TrayInfo(props: TrayInfoProps) {

  return (
    <View style={styles.container}>
      <View style={{
        ...styles.colorSquare,
        backgroundColor: `#${props.hex}`
      }}>

      </View>
      <Text style={styles.name}>
        {props.name}
      </Text>
      <Text>
        {props.weight}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal: '10%',
    paddingVertical: 5
  },
  colorSquare: {
    height: 12,
    width: '10%',
  },
  name: {
    flex: 1,
    paddingHorizontal: '10%'
  }
})