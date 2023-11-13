import { configureStore } from '@reduxjs/toolkit';

import useReducer  from "../features/user/userslice"

const store = configureStore( {
    reducer:{
        user: useReducer
    }
})

// export type Appdispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>
export default store;