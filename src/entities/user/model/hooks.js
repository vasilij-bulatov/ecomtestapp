import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserData,
  logOut as _logOut,
  logIn as _logIn,
  setToken,
} from './store';
import { api } from "../../../shared";

export function useUserState() {
  const state = useSelector(state => state.user);
  return state;
}

export function useGetUserEffect(isLoad) {
  const dispatch = useDispatch();
  return useEffect(() => {
    if (!isLoad) {
      //dispatch(getUserData(1));
      api.getPersistentAuthData().then(authData => {
        console.log('get pers authdata ', authData);
        if (authData.id && authData.token) {
          dispatch(getUserData({id: authData.id, token: authData.token}));
          dispatch(setToken(authData.token));
        } else {
          dispatch(getUserData({id: 0, token: ''}));
        }
      });
    }
  }, [isLoad]);
}

