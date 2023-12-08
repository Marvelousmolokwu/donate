import React, { useState } from 'react'
import { Updated } from '../components/updated/updated';

export const useNotification = () => {
 const [show, SetShow] =  useState(false);
 const Notification =(content:React.ReactNode)=>(<Updated content={content} openNotification={show} />)
 const showNotification=()=>{SetShow(true)
setTimeout(()=>{
    SetShow(false)
}, 3000)
}
 const hideNotification= ()=>SetShow(false)

 return{
    Notification,
    showNotification,
    hideNotification
 }
}
