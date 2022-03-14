// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

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
const counterSlice = createSlice({
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

const intialAuthState = {
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState: intialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
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


export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;
