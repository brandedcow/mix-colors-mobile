import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { View } from '../components/Themed';
import useTrayState from '../state/useTrayState';
import mixColors from '../lib/mixColors'
import Color from '../types/Color';
import { FlatList, ListRenderItem } from 'react-native';

export default function ColorsTabScreen() {
  const trayState = useTrayState()
  const trays = trayState.getAll()

  const renderItem: ListRenderItem<Array<Color>> = ({ item }) => {
    const backgroundColor = mixColors(...item)
    return (
      <View style={styles.card}>
        <View style={{
          height: 40,
          width: 120,
          backgroundColor: backgroundColor === null ? 'white' : `#${backgroundColor.hex}`
        }} />
        <Ionicons name="md-trash-outline" size={24} color="black" />
      </View>
    )
  }

  return (
    <FlatList
      data={trays}
      renderItem={renderItem}
      keyExtractor={(_,idx) => `tray${idx}`}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: '10%',
  }
});
