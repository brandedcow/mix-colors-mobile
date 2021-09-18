import { none, useState } from '@hookstate/core'

import mixColors from '../lib/mixColors'
import globalState  from './global'

const wrapState = (gs) => ({
  getAll: () => gs.trays.value,
  get: () => {
    const currentTray = gs.trays[gs.currentTrayIdx.value]
    return currentTray.get()
  },
  getCurrentIdx: () => gs.currentTrayIdx.value,
  setCurrent: idx => {
    gs.currentTrayIdx.set(idx)
  },
  removeTray: idx => {
    // if last tray, clear instead
    if (gs.trays.value.length === 1) {
      gs.trays[idx].set([])
    }
    // if not last tray, set non and decrement
    else {
      gs.currentTrayIdx.set(v => v - 1)
      gs.trays[idx].set(none)
    }

  },
  isLastTray: () => {
    return gs.currentTrayIdx.value === gs.trays.value.length - 1
  },
  getColor: () => {
    const mix = mixColors(...gs.trays.value[gs.currentTrayIdx.value])
    return mix === null ? { hex: 'ffffff' } : mix
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
  },
  nextTray: () => {
    if (gs.trays[gs.currentTrayIdx.value + 1].get() === undefined) {
      gs.trays.merge([[]])
    }
    gs.currentTrayIdx.set(v => v + 1)
  },
  prevTray: () => {
    if (gs.currentTrayIdx.value - 1 < 0) {
      gs.currentTrayIdx.set(gs.trays.value.length - 1)
    } else {
      gs.currentTrayIdx.set(v => v - 1)
    }
  },
  addTray: () => {
    gs.trays.merge([[]])
  }
})

const useTrayState = () => wrapState(useState(globalState))

export default useTrayState