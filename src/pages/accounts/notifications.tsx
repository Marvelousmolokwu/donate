import { Datacolumn } from "./datacolumn"
import { Template } from "./template"


export const Notifications = () => {
  return (
    <>
     <section className="text-sm lg:text-lg">
    <Template mainInfo="Manage Your Notification here." btnText=""handleClick={()=>{}}/> 
       
       <Datacolumn contentName="Email Notifications" content={<label>
        <input type="checkbox" className="w-6 h-6 accent-primary"/>
       </label>}/>
       
        
        
    </section>
    </>
  )
}
