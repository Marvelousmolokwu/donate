

import { NavLink, Outlet} from "react-router-dom";
import { AccountHeader } from "./accountHeader";
import { Addfunds } from "../../components/dashboard-components/addFunds";
import { amountInputed } from "../../utilities/context";
import { useState } from "react";






export type amounttype={
    amount: number;
    amountChange: (number:number)=>void;
}

export const Donoraccounts = () => {
  const [amount, setAmount] = useState<number>(0);

  const amountChange = (number:number)=>{
    setAmount(prev => prev + number)
  }

  const navStyle = ({ isActive }: any) => {
 
    return {
      borderBottom: isActive ? "3px solid #22457f " : "",
      transition: isActive ? "border  linear  ": "",
  
    };
  };
    
  return (
  <>

  <section className="container">
<amountInputed.Provider value={{amount, amountChange}}>

<AccountHeader transactionType={<Addfunds/>} buttonName={"Add funds"} amount={amount}/></amountInputed.Provider>
  
    
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
