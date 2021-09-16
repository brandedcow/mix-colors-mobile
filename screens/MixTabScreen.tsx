import * as React from 'react';
import { StyleSheet } from 'react-native';

import Palette from '../components/Palette';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function MixTabScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <View style={styles.tray}>
        <Text>Tray</Text>
      </View>
      <View style={styles.palette}>
        <Palette />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tray: {
    flex: 1,
    backgroundColor: 'green',
    width: '100%'
  },
  palette: {
    flex: 1,
    width: '100%'
  }
});
