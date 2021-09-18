import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import useTrayState from '../state/useTrayState'
import { View, Text } from './Themed'

type TrayInfoProps = {
  name: String
  hex: String
  weight: Number
  style: Object
}

export default function TrayInfo(props: TrayInfoProps) {
  const trayState = useTrayState()

  return (
    <View style={{
      ...styles.container,
      ...props.style
    }}>
      <View style={{
        ...styles.colorSquare,
        backgroundColor: `#${props.hex}`
      }}>

      </View>
      <Text style={styles.name}>
        {props.name}
      </Text>

      <TouchableOpacity onPress={() => trayState.decWeight(props)}>
        <AntDesign name="minuscircleo" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.weight}>
        {props.weight}
      </Text>
      <TouchableOpacity onPress={() => trayState.incWeight(props)}>
        <AntDesign name="pluscircleo" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal: '10%',
    paddingBottom: 20
  },
  colorSquare: {
    height: 24,
    width: '12%',
  },
  name: {
    flex: 1,
    paddingHorizontal: '10%'
  },
  weight: {
    paddingHorizontal: '5%'
  }
})