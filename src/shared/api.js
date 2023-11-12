import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL_TEST = 'https://dummyjson.com/';
const BASE_URL = 'https://dummyjson.com/auth/';

async function setAuthData({id, token}) {
  try {
    if (token) {
      await AsyncStorage.setItem('@id', id.toString());
      await AsyncStorage.setItem('@token', token);
    } else {
      await AsyncStorage.removeItem('@token');
    }
  } catch (e) {
    console.log(e);
  }
}

async function getPersistentAuthData() {
  try {
    const id = await AsyncStorage.getItem('@id');
    const token = await AsyncStorage.getItem('@token');
    return {id: id, token: token};
  } catch (e) {
    console.log(e);
  }
}

async function logIn(login, password) {
  const url = `${BASE_URL}login`;
  const body = {username: login, password: password};
  const tag = 'Login ';

  return axios
    .post(url, body, {headers: {'Content-Type': 'application/json'}})
    .then(response => response.data)
    .then(response => {
      console.log(response);
      if (response.id) {
        setAuthData({id: response.id, token: response.token});
      }
      return response;
    })
    .catch(error => {
      
      if (error.response) {
        console.log(tag, error.response.data);
        console.log(tag, error.response.status);
        console.log(tag, error.response.headers);
      } else if (error.request) {
        console.log(tag, error.request);
      } else {
        console.log(tag, error.message);
      }
    });
}

async function logOut() {
  try {
    await setAuthData({id: 0, token: null});
    return true;
  } catch (error) {
    console.log('Failed log out ', error);
    return false;
  }
}

async function getUserData(id, token) {
  console.log('get user data ',id,  token,);
  const url = `${BASE_URL}users/${id}`;
  return axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.data)
    .then(response => {
      console.log(response);
      if (response.id) {
        //setToken(response.data.token);
        //setAuthData({id: response.id});
      }
      return response;
    })
    .catch(e => {
      if (e.name === 'AbortError') {
        return responseTimeout;
      }
      console.log('Failed get user data:', e);
    });
}

async function getProducts(token) {
  console.log('token ',token);
  const url = `${BASE_URL}products?limit=0`;
  return axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.data)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(e => {
      if (e.name === 'AbortError') {
        return responseTimeout;
      }
      console.log('Failed get products:', e);
    });
}

export const api = {logIn, logOut, getUserData, getPersistentAuthData, getProducts};
