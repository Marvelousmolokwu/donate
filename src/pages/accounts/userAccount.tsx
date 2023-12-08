

import { NavLink, Outlet} from "react-router-dom";
import { Payout } from "../../components/dashboard-components/payout";
import { AccountHeader } from "./accountHeader";






export const Useraccounts = () => {
  

  const navStyle = ({ isActive }: any) => {
 
    return {
      borderBottom: isActive ? "3px solid #22457f " : "",
      transition: isActive ? "border  linear  ": "",
  
    };
  };
    
  return (
  <>

  <section className="container">

  <AccountHeader transactionType={<Payout/>} buttonName={"Payout"} amount={0}/>
    
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
