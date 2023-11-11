import {useDispatch, useSelector} from 'react-redux';
import {logOut as _logOut, logIn as _logIn} from '../..//entities/user';

export function useChangeAuthState() {
  const dispatch = useDispatch();
  const isLogInPending = useSelector(state => state.user.isLogInPending);

  const logIn = (login, password) => {
    return dispatch(_logIn({login, password}));
  };

  const logOut = () => {
    return dispatch(_logOut());
  };

  return {logIn, logOut, isLogInPending};
}
