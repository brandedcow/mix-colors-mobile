import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import useTrayState from '../state/useTrayState';
import mixColors from '../lib/mixColors'
import Color from '../types/Color';

export default function ColorsTabScreen() {
  const trayState = useTrayState()
  const trays = trayState.getAll()

  return (
    <View style={styles.container}>
      {trays.map((tray: Array<Color>, idx: Number) => (
        <View
          key={`tray-${idx}`}
          style={styles.card}
        >
          <View style={{
            height: 40,
            width: 120,
            backgroundColor: `#${mixColors(...tray).hex}`
          }} />
          <Ionicons name="md-trash-outline" size={24} color="black" />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  }
});
