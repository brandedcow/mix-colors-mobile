import React from 'react'
import { StyleSheet } from 'react-native'

import Pan from './Pan';
import { View } from "./Themed";
import useTrayState from '../state/useTrayState';
import Color from '../types/Color'

const palette = {
  name: "Winsor & Newton Sketcher's Pocket Set",
  colors: [
    {
      name: "Viridian Hue",
      productNum: "696",
      hex: "06896A",
      order: 0,
      weight: 1,
    },
    {
      name: "Lemon Yellow Hue",
      productNum: "346",
      hex: "FFF023",
      order: 1,
      weight: 1,
    },
    {
      name: "Sap Green",
      productNum: "599",
      hex: "7FA649",
      order: 2,
      weight: 1,
    },
    {
      name: "Cadmium Yellow Hue",
      productNum: "109",
      hex: "FFD22F",
      order: 3,
      weight: 1,
    },
    {
      name: "Yellow Ochre",
      productNum: "744",
      hex: "E3904A",
      order: 4,
      weight: 1,
    },
    {
      name: "Cadmium Red Pale Hue",
      productNum: "103",
      hex: "EC6722",
      order: 5,
      weight: 1,
    },
    {
      name: "Burnt Sienna",
      productNum: "74",
      hex: "C14A4C",
      order: 6,
      weight: 1,
    },
    {
      name: "Alizarin Crimson Hue",
      productNum: "3",
      hex: "E53158",
      order: 7,
      weight: 1,
    },
    {
      name: "Burnt Umber",
      productNum: "76",
      hex: "594648",
      order: 8,
      weight: 1,
    },
    {
      name: "Ultramarine",
      productNum: "660",
      hex: "0483C6",
      order: 9,
      weight: 1,
    },
    {
      name: "Chinese White",
      productNum: "150",
      hex: "EEEBEB",
      order: 10,
      weight: 1,
    },
    {
      name: "Cerulean Blue Hue",
      productNum: "139",
      hex: "009FDF",
      order: 11,
      weight: 1,
    },
  ],
}

export default function Palette() {
  const trayState = useTrayState()

  function handlePanPress(color: Color) {
    trayState.addColor(color)
  }

  return (
    <View style={styles.paletteContainer}>
      <View style={styles.palettePanRow}>
        {palette.colors.slice(0,6).map((color, idx) => (
          <Pan 
            key={`pan-${idx}`}
            name={color.name}
            hex={color.hex}
            onPress={handlePanPress}
          />
        ))}
      </View>
      <View style={styles.palettePanRow}>
        {palette.colors.slice(6).map((color, idx) => (
          <Pan 
            key={`pan-${idx}`}
            name={color.name}
            hex={color.hex}
            onPress={handlePanPress}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  paletteContainer: {
    height: '100%',
    width: '100%',
    flexDirection:'column',
  },
  palettePanRow: {
    flex: 1,
    flexDirection: 'row',
  }
})