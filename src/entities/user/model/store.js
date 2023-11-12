import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../shared';

export const getUserData = createAsyncThunk('getUserData', async ({id, token}) => {
  const response = await api.getUserData(id, token);
  return response;
});

export const logOut = createAsyncThunk('logout', async () => {
  const response = await api.logOut();
  return response;
});

export const logIn = createAsyncThunk('login', async (authData) => {
  const response = await api.logIn(authData.login, authData.password);
  return response;
});

const initialState = {
  data: {},
  token: undefined,
  isLoad: false,
  isLogged: false,
  isLogInPending: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setInitialState(state) {
      state = initialState;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logOut.pending, state => {
        state.isLogInPending = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.isLogInPending = false;
        state.isLogged = false;
        state.error = null;
      })
      .addCase(logOut.rejected, state => {
        state.isLogInPending = false;
      })
      .addCase(logIn.pending, state => {
        state.isLogInPending = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        if (action.payload?.id) {
          state.isLogged = true;
        }
        state.isLogInPending = false;
      })
      .addCase(logIn.rejected, state => {
        state.isLogInPending = false;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        if (action.payload?.id) {
          state.data = action.payload;
          state.isLogged = true;
          state.error = null;
        } else {
          state.error = action.payload;
        }
        state.isLoad = true;
      })
      .addCase(getUserData.rejected, state => {
        state.error = 'ERROR';
        state.isLoad = false;
      });
  },
});

export const {setInitialState, setToken} = userSlice.actions;

export const userReducer = userSlice.reducer;
