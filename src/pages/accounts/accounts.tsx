

import { NavLink, Outlet, useParams } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { useModal } from "../../hooks/useModal";
import { Payout } from "../../components/dashboard-components/payout";




export const Accounts = () => {
  
  const {ModalComp, ShowModal} = useModal()
  const navStyle = ({ isActive }: any) => {
 
    return {
      borderBottom: isActive ? "3px solid #22457f " : "",
      transition: isActive ? "border  linear  ": "",
  
    };
  };
    
  return (
  <>
  {ModalComp(<Payout/>)}
  <section className="container">

    <section className="flex flex-col lg:flex-row lg:gap-5">
    <div className="card-styles flex justify-start gap-5 items-center w-full">
    <div className="bg-center  bg-no-repeat h-28 w-28 rounded-full bg-kit border-4 border-accent bg-profile ">
<img src={""} alt="" className="h-full w-full rounded-full"/>
</div>
        <div> <h3>User</h3>
        <p className="text-sm">USER ID : AADD5668</p></div>
        
       
    </div>
    <div className="card-styles w-full">
    <div className="flex flex-col gap-6">
                 <div > <h2>$0.00</h2>
                  <p className="text-sm">NGN WALLET</p></div>
         
                  
                  <Button
                  content="Payout"
                  handleClick={()=>ShowModal()}
                  btnClasses="text-backgroundcolor bg-primary w-[50%]"
                />                
               
                </div>       
               
    </div>
    </section>
    
    <section>
<ul className="grid grid-cols-4 text-center bg-kit  pt-3 text-sm md:text-lg lg:text-xl   font-semibold">
   <NavLink style={navStyle} to={"profile"}>Profile</NavLink>
    <NavLink style={navStyle} to={"security"}>Security</NavLink>
    <NavLink style={navStyle} to={"notification"}>Notifications</NavLink>
    <NavLink style={navStyle} to={"statement"}>Statements</NavLink>
</ul>
<section>

<Outlet/>
</section>
</section> 
  </section>
 
  </>
  )
}
