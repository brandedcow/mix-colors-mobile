import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import Palette from '../components/Palette';
import Tray from '../components/Tray';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function MixTabScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>

      <View style={styles.trayInfo}>
        <TouchableOpacity style={styles.scrollButton}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>

        <Tray />
      
        <TouchableOpacity style={styles.scrollButton}>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
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
  trayInfo: {
    flex: 1,
    width: '100%',
    flexDirection: 'row'
  },
  palette: {
    flex: 1,
    width: '100%'
  },
  scrollButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
