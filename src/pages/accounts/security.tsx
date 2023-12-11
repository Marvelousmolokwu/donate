import { useModal } from "../../hooks/useModal"
import { useNotification } from "../../hooks/useNotification"
import { Datacolumn } from "./datacolumn"
import { Template } from "./template"
import {useState} from "react"


export const Security = () => {
   const {Notification, showNotification} = useNotification()
  const {ModalComp, ShowModal, hideModal} = useModal()

  const [silder, setSlider] = useState(false)
  const handleClick =()=>{
ShowModal()
  }
  const handleSubmit = (e:React.FocusEvent<HTMLFormElement>)=>{
e.preventDefault()
hideModal()
showNotification()


  }
  return (
    <>
    {Notification("Password Updated!")}
    <section className="text-sm lg:text-lg">
    <Template mainInfo="Manage Your security settings  here." btnText="Change password" handleClick={handleClick}/>
       
       <Datacolumn contentName="Password" content={<p>*******</p>}/>
       <Datacolumn contentName="Enable 2FA Authentication" content={<button onClick={()=>{setSlider(prev =>!prev)}}  className={`bg-overlay w-12 h-6 rounded-full flex transition-all ease-out delay-100 ${silder ? "justify-end bg-primary":  ""} `}>
        <div className="w-6 h-6 bg-backgroundcolor rounded-full "></div>
       </button>}/>
      
        
        
    </section>
    
    {ModalComp(
   <form className="font-semibold w-[80%] lg:w-[60%] text-sm lg:text-lg" onSubmit={handleSubmit}>
<label htmlFor="">
   old Password:
   <input type="password"  />
</label>
<label htmlFor="">
   New password:
   <input type="password" name="email"  />
</label>
<label htmlFor="">
   Confirm password:
   <input type="password" name="phoneNumber" />
</label>
<input type="submit" value={"Submit"} className="bg-primary text-backgroundcolor"  />
   </form> 
   
)}
    </>
  )
}
