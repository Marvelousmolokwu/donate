import { createSlice } from "@reduxjs/toolkit";
interface user{
    name: string
    picture: string
    username: string
    instagram: string
    email:string
    useramount:number
}

const initialState : user={
    name: '',
    picture:'',
    username: '',
    instagram:'',
    email:'',
    useramount:0
}

const userslice = createSlice({
    name: 'user',
    initialState,
    reducers:{
setUser:(state, action)=>{
    state.name = action.payload.name
    state.picture = action.payload.picture
    state.username = action.payload.username
    state.instagram = action.payload.instagram
    state.email = action.payload.email
    state.useramount = action.payload.useramount
}
    }
})

export const {setUser} = userslice.actions
export const selectUser = (state: { user: any; }) => state.user;
export default userslice.reducer