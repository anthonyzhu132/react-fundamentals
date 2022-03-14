import { createSlice } from '@reduxjs/toolkit';

//intial state
const initialCounterState = {
  counter: 0,
  showCounter: true,
}


//Creating a slice of global state
//Name , initialState, and reducers that will be called in function form
//All reducers already have up-to-date state
//All reducers do not need actions, and will automatically know

//In redux tool-kit, we are allowed to mutate the original state -- converts it under the hood
export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    toggleCounter (state) {
      state.showCounter = !state.showCounter
    }
  }
})

export const counterActions = counterSlice.actions;