
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import { axiosGetWithHeaders, axiosPostWithHeaders } from '../helpers/axiosWithHeaders'

export const login = createAsyncThunk("login",async (args,{dispatch})=>{
    const response = await axios.post("http://localhost:5000/api/v1/auth/login",args)
    localStorage.setItem('token',response.data)
    dispatch(getMe())

})
export const getMe = createAsyncThunk("getMe",async ()=>{

    const response = await axiosGetWithHeaders('auth/me')
    return response.data

})
export const updateProfile = createAsyncThunk("updateMe",async (body,{dispatch})=>{

    const response = await axiosPostWithHeaders('auth/update-me',body)
    localStorage.setItem('token',response.data)
    dispatch(getMe())

})









export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        me:null,
    },
    reducers: {},
    extraReducers (builder){
        builder.addCase(getMe.fulfilled, (state,action)=>{
            state.me = action.payload
        })
    }
  })
  export default authSlice.reducer;