import classes from './CartButton.module.css';

import { uiActions } from '../../store/uiSlice';

import { useDispatch, useSelector } from 'react-redux';



const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartTotal = useSelector(state => state.cart.totalQuantity)


  const toggleCart = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotal}</span>
    </button>
  );
};

export default CartButton;
