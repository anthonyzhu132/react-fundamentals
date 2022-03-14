import classes from './CartButton.module.css';

import { uiActions } from '../../store/uiSlice';

import { useDispatch } from 'react-redux';


const CartButton = (props) => {
  const dispatch = useDispatch();


  const toggleCart = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
