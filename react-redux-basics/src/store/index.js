// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counterSlice';
import { authSlice } from './authSlice';

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
/* For one SLICE

const store = configureStore({
  reducer: counterSlice.reducer
});

*/

// For Two or more slices, it maps over the reducer and has keys for whichever slice you want to access

const store = configureStore({
  reducer: { 
    counter: counterSlice.reducer, 
    auth: authSlice.reducer 
  }
})

export default store;
