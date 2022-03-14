// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

//intial state
const initialState = {
  counter: 0,
  showCounter: true,
}


//Creating a slice of global state
//Name , initialState, and reducers that will be called in function form
//All reducers already have up-to-date state
//All reducers do not need actions, and will automatically know

//In redux tool-kit, we are allowed to mutate the original state -- converts it under the hood
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
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



/* NORMAL REDUX 

//reducer which takes in all of the action types
//NEVER MUTATE STATE, ALWAYS RETURN A NEW STATE
const counterReducer = (state = initialState, action) => {
  if(action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }

  if(action.type === 'increase') {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }

  return state;
}

*/

//creatingt the store from the reducer

//takes in a configuration object, with the reducer object
const store = configureStore({
  reducer: counterSlice.reducer
});

export default store;
