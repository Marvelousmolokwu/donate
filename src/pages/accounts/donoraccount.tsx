

import { NavLink, Outlet} from "react-router-dom";
import { AccountHeader } from "./accountHeader";
import { Addfunds } from "../../components/dashboard-components/addFunds";
import { amountInputed } from "../../utilities/context";
import { navStyle } from "../../utilities/types";
import { useState } from "react";






export type amounttype={
    amount: number;
    amountChange: (number:number)=>void;
}

export const Donoraccounts = () => {
  const [amount, setAmount] = useState<number>(0);

  const amountChange = (number:number)=>{

    
    setAmount(prev => prev + (number/ 1200) )
  }

 
    
  return (
  <>

  <section className="container">
<amountInputed.Provider value={{amount, amountChange}}>

<AccountHeader transactionType={<Addfunds/>} buttonName={"Add funds"} amount={amount}/></amountInputed.Provider>
  
    
    <section>
<ul className="grid grid-cols-4 text-center bg-kit  pt-3 text-[13px] sm:text-sm md:text-lg lg:text-xl   font-semibold">
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
