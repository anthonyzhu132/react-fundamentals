import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

import { Fragment } from 'react';
import { useSelector, useDispatch} from 'react-redux';



function App() {

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth ? <Auth /> : <UserProfile/>}
      <Counter />
      <Auth />
    </Fragment>
  );
}

export default App;
