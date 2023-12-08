

import { NavLink, Outlet} from "react-router-dom";
import { Payout } from "../../components/dashboard-components/payout";
import { AccountHeader } from "./accountHeader";
import { navStyle } from "../../utilities/types";






export const Useraccounts = () => {
  

 
    
  return (
  <>

  <section className="container">

  <AccountHeader transactionType={<Payout/>} buttonName={"Payout"} amount={0}/>
    
    <section>
<ul className="grid grid-cols-4 text-center bg-kit  pt- text[13px] sm:text-sm md:text-lg lg:text-xl   font-semibold">
   <NavLink style={navStyle} to={"profile"}>profile</NavLink>
    <NavLink style={navStyle} to={"security"}>security</NavLink>
    <NavLink style={navStyle} to={"notification"}>notification</NavLink>
    <NavLink style={navStyle} to={"statement"}>statement</NavLink>
</ul>
<section>

<Outlet/>
</section>
</section> 
  </section>
 
  </>
  )
}
