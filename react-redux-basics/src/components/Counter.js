import classes from './Counter.module.css';

import { counterActions } from '../store/counterSlice';

//useSelector allows us to target a part of the state that we want
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  //extracting the counter state 
  //automatically subscribes and will reload if the state changes
  const counter = useSelector(state => state.counter.counter);

  const toggle = useSelector(state => state.counter.showCounter);

  //Will dispatch an action to the store that we are subscribed to
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({ type: 'increment' })
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' })
    dispatch(counterActions.decrement())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)) //Passing in as ({ type: 'increase' payload: 5})
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increment by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
