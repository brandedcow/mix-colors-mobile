import * as ScreenOrientation from 'expo-screen-orientation'
import React from 'react'

export default function useLandscapeOrientation() {
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
  }

  React.useEffect(() => {
    changeScreenOrientation();
  }, [])
}