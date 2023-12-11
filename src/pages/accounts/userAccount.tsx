

import { NavLink, Outlet} from "react-router-dom";
import { Payout } from "../../components/dashboard-components/payout";
import { AccountHeader } from "./accountHeader";
import { navStyle } from "../../utilities/types";
import { amountInputed } from "../../utilities/context";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userslice';
import { setUser } from "../../features/user/userslice";






export const Useraccounts = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  const [amount, setAmount] = useState<number>(0);

  const amountChange = (total:number)=>{

    
    setAmount(total)

    dispatch(setUser({...user, useramount: amount - (total / 1200)}))
 
  }

  


 
    
  return (
  <>

  <section className="container">
  <amountInputed.Provider value={{amount, amountChange}}>
  <AccountHeader transactionType={<Payout/>} buttonName={"Payout"} amount={user.useramount}/>
  </amountInputed.Provider>
    <section>
<ul className="grid grid-cols-4 text-center bg-kit  pt- text[13px] sm:text-sm  lg:text-xl   font-semibold">
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
