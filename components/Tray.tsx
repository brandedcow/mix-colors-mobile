import React from 'react'
import { StyleSheet, Button } from 'react-native'
import { View, Text } from './Themed'
import TrayInfo from './TrayInfo'
import useTrayState from '../state/useTrayState'
import Color from '../types/Color'

export default function Tray() {
  const trayState = useTrayState()
  const color = trayState.getColor() || { hex: 'ffffff'}

  // hack to treat hookstate as an array, not a proxy
  const sortedByWeight = JSON.parse(JSON.stringify(trayState.get()))
    .sort((a:Color, b: Color) => a.weight >= b.weight ? -1 : 1)

  return (
    <View style={styles.container}>
      <View style={{
          ...styles.section,
          backgroundColor: `#${color.hex}`
        }}>
        
      </View>
      <View style={styles.section}>
        {sortedByWeight.map((color: Color, idx: Number) => (
          <TrayInfo
            key={`tray-color-#${idx}`}
            name={color.name}
            hex={color.hex}
            weight={color.weight}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  section: {
    flex: 1
  },
})