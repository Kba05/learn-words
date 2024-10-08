import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface AppState {
  user: {}
  cards: []
  value: number
}

const initialState: AppState = {
  user: {},
  cards: [],
  value: 0
}

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = appStateSlice.actions

export const selectCount = (state: RootState) => state.appState.value

export default appStateSlice.reducer