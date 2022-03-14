import classes from './Counter.module.css';

//useSelector allows us to target a part of the state that we want
import { useSelector, connect, useDispatch } from 'react-redux';

const Counter = () => {
  //extracting the counter state 
  //automatically subscribes and will reload if the state changes
  const counter = useSelector(state => state.counter);

  //Will dispatch an action to the store that we are subscribed to
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
