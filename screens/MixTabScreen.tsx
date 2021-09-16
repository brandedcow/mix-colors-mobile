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
    backgroundColor: 'green',
    width: '100%'
  },
  palette: {
    backgroundColor: 'red',
    width: '100%'
  }
});
