import { createState } from '@hookstate/core'

const globalState = createState({
  currentTrayIdx: 0,
  trays: [[]],
})

export default globalState