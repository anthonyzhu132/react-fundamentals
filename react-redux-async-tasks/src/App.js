import { useEffect, Fragment } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/notifications/Notification';

import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/uiSlice';

let isInitial = true;

function App() {
  const cartToggle = useSelector(state => state.ui.cartIsVisible);
  const dispatch = useDispatch()

  const notification = useSelector(state => state.ui.notification)

  //setting up a subscription to cart state 
  const cart = useSelector(state => state.cart);

  //when state changes, fires http request and sends cart data to link
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.setNotification({
        status: 'pending',
        title: 'sending',
        message: 'sending data',
      }))

      const response = await fetch('https://reactcourse-d4707-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })

      if(!response.ok) {
        throw new Error('Sending error')
      }

      dispatch(uiActions.setNotification({
        status: 'success',
        title: 'success',
        message: 'sending successful',
      }))
    }

    if (isInitial) {
      isInitial = false;
      return
    }

    sendCartData().catch(error => {
      dispatch(uiActions.setNotification({
        status: 'error',
        title: 'error',
        message: 'sending error',
      }))
    })

  }, [cart, dispatch])

  return (<Fragment>
  {notification && (
    <Notification
      status={notification.status}
      title={notification.title}
      message={notification.message}
    />
  )}
  <Layout>
    {cartToggle && <Cart />}
    <Products />
  </Layout>
</Fragment>
)
}

export default App;
