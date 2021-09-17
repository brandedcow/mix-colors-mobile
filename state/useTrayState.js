import { useState } from '@hookstate/core'

import mixColors from '../lib/mixColors'
import globalState  from './global'

const wrapState = (gs) => ({
  get: () => {
    const currentTray = gs.trays[gs.currentTrayIdx.value]
    if (currentTray.get().length > 0) {
      return currentTray.get().map(color => color)
    }
    return []
  },
  getColor: () => {
    return mixColors(...gs.trays.value[gs.currentTrayIdx.value])
  },
  addColor: (newColor) => {
    const currentTray = gs.trays[gs.currentTrayIdx.value]

    const foundIndex = currentTray.get()
      .findIndex(color => color.name === newColor.name)

    if (foundIndex !== -1) {
      currentTray[foundIndex].set(c => ({
        ...c,
        weight: c.weight + 1
      }))
    } else {
      currentTray.merge([newColor])
    }
  }
})

const useTrayState = () => wrapState(useState(globalState))

export default useTrayState