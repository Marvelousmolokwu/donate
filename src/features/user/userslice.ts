import { createSlice } from "@reduxjs/toolkit";
interface user{
    name: string
    picture: string
}

const initialState : user={
    name: '',
    picture:''
}

const userslice = createSlice({
    name: 'user',
    initialState,
    reducers:{
setUser:(state, action)=>{
    state.name = action.payload.name
    state.picture = action.payload.picture
}
    }
})

export const {setUser} = userslice.actions
export const selectUser = (state: { user: any; }) => state.user;
export default userslice.reducer