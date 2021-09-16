import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from './Themed'

type TrayProps = {

}

export default function Tray(props: TrayProps) {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text>Tray Color</Text>
      </View>
      <View style={styles.section}>
        <Text>Tray Info</Text>
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
  }
})