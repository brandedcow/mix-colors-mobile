import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { View } from '../components/Themed';
import useTrayState from '../state/useTrayState';
import mixColors from '../lib/mixColors'
import Color from '../types/Color';
import { FlatList, ListRenderItem, Pressable } from 'react-native';
import { RootTabScreenProps } from '../types';

export default function ColorsTabScreen({ navigation }: RootTabScreenProps<'ColorsTab'>) {
  const trayState = useTrayState()
  const trays = trayState.getAll()

  function handleCardPress(index: Number) {
    trayState.setCurrent(index)
    navigation.navigate('MixTab')
  }

  function handleDeleteColor(index: Number) {
    trayState.removeTray(index)
  }

  const renderItem: ListRenderItem<Array<Color>> = ({ item, index }) => {
    const backgroundColor = mixColors(...item)
    return (
      <Pressable style={styles.card} onPress={() => handleCardPress(index)}>
        <View style={{
          height: 40,
          width: '40%',
          backgroundColor: backgroundColor === null ? 'white' : `#${backgroundColor.hex}`
        }} />

        <View style={styles.trayColorSwatch}>
          {item.map((color, cIndex) => (
            <View  
              key={`tray-${index}-color-${cIndex}`}
              style={{
                height: '100%',
                flex: color.weight,
                backgroundColor: `#${color.hex}`
              }}
            />
          ))}
        </View>

        <TouchableOpacity onPress={() => handleDeleteColor(index)}>
          <Ionicons name="md-trash-outline" size={24} color="black" />
        </TouchableOpacity>
      </Pressable>
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
  },
  trayColorSwatch: {
    height: '100%',
    width: '30%',
    flexDirection: 'row',
  }
});
