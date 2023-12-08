import SendIcon from '@mui/icons-material/Send';
import { Logo } from '../../components/logo/Logo'
import React, { useState } from 'react';
export interface Chat{
  id: number;
  chat: string;
 
}
export const Chat = () => {
   const [chat, setChat] = useState("")
   const [chats, setchats] = useState<Chat[]>([])
    const today = new Date().toLocaleDateString()
const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>)=>{
  e.preventDefault()
  if(chat){
    setchats([...chats, {id: Date.now(), chat}])
  }
  setChat("")
  console.log(chat)
}
  return (
    <section>
        
         <div className='flex flex-col justify-center items-center gap-3'>
            <Logo logoClasses='text-sm'/>
            <h2>Always happy to serve</h2>
         <h3 className='text-sm'>We typically reply in under 30 minutes</h3>
         <p className='text-sm'>customer support hours: 11am -8pm WAT on weekdays
         </p>
         <p className='text-sm rounded-md p-1 bg-kit'>{today}</p>
<div className='h-[12rem] w-full p-2 flex flex-col gap-2 overflow-auto '>
  {chats.map((i)=><div key={i.id} className='px-2 rounded-lg bg-kit text-lg self-end'>{i.chat}</div>)}



</div>
         <form className='flex bg-kit rounded-md p-2 justify-between' >
            <input value={chat}  onChange={(e)=>{setChat(e.target.value)}} type="text" placeholder='type something...' className='outline-none h-10 border-1 border-kit rounded-full w-[85%] '/>
            <button onClick={ handleSubmit} className='bg-primary text-backgroundcolor rounded-full h-10 w-10 flex items-center justify-center'><SendIcon fontSize='medium'/></button>
         </form>
         </div>
        
    </section>

  )
}
