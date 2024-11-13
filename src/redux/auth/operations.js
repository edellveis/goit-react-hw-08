import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});


const setAuthToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const clearAuthToken = () => {
  delete authInstance.defaults.headers.common.Authorization;
};


export const register = createAsyncThunk(
  'auth/register',
   async (userInfo, thunkAPI) => {
  try {
    console.log(userInfo);
    const {data} = await authInstance.post('/users/signup', userInfo);
    setAuthToken(data.token);
    return data;
  } catch (error) {
    console.error('Error details:', error.response ? error.response.data : error.message);

    return thunkAPI.rejectWithValue(error.message);
    
    
  }
});


export const login = createAsyncThunk('auth/login', async (userInfo, thunkAPI) => {
  try {
    const {data}  = await authInstance.post('/users/login', userInfo);
    setAuthToken(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await authInstance.post('/users/logout');
    clearAuthToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const apiGetCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkApi.rejectWithValue("No token provided to refresh user data");
    }

    try {
      setAuthToken(token);
      const { data } = await authInstance.get("/users/current");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);