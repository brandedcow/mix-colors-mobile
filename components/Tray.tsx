import React from 'react'
import { StyleSheet, FlatList, ListRenderItem } from 'react-native'
import { View, Text } from './Themed'
import TrayInfo from './TrayInfo'
import useTrayState from '../state/useTrayState'
import Color from '../types/Color'

export default function Tray() {
  const trayState = useTrayState()
  const color = trayState.getColor()

  // hack to treat hookstate as an array, not a proxy
  const sortedByWeight = JSON.parse(JSON.stringify(trayState.get()))
    .sort((a:Color, b: Color) => a.weight >= b.weight ? -1 : 1)

  const renderItem: ListRenderItem<Color> = ({ item }) => {
    return (
    <TrayInfo
      name={item.name}
      hex={item.hex}
      weight={item.weight}
    />
    )
  }

  return (
    <View style={styles.container}>
      <View style={{
          ...styles.trayColor,
          backgroundColor: `#${color.hex}`
        }}>
        
      </View>
      <View style={styles.trayInfo}>
        <FlatList
          data={sortedByWeight}
          renderItem={renderItem}
          keyExtractor={(_,idx) => `tray-color-${idx}`}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  trayColor: {
    flex: 2
  },
  trayInfo: {
    flex: 3
  }
})