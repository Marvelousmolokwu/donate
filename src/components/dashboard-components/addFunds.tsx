import { useState } from "react"
import { Datacolumn } from "../../pages/accounts/datacolumn"
import { useSelector } from "react-redux"
import { selectUser } from "../../features/user/userslice"
import { Button } from "../button/Button"
import { Link } from "react-router-dom"
import { useAmount } from "../../utilities/context"
import { useNotification } from "../../hooks/useNotification"



export const Addfunds = () => {
    const[amountInputed, setAmountInputed] = useState(false)
    const [fundingSuccesful, setFundingSuccesful] = useState(false)
    const {Notification, showNotification} = useNotification()
    const {amountChange} = useAmount()
    const [amountToFund,  setAmountToFund] = useState<number>(0)
    const user = useSelector(selectUser)
    const handleClick =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setAmountInputed(true)
    }
    const AddFundsBtn = ()=>{
    setFundingSuccesful(true)
   {amountChange(amountAdded)}
   showNotification()
    }
    const amountAdded: number = amountToFund;


  return (
    <>
    {Notification(`Your account has been funded with ${amountAdded}`)}
    <section className="flex flex-col items-center justify-center w-[80%] mt-5 overflow-hidden" onSubmit={handleClick}>
   {!amountInputed && <form className="font-semibold w-full lg:w-[60%] text-left flex flex-col gap-5 mt-[10%]">
<label htmlFor="">
   Amount:

</label>
<input type="number" name="name" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setAmountToFund(parseInt(e.currentTarget.value))} />
<p>$1 = N1200</p>
<input type="submit" value={"Submit"} className="bg-primary text-backgroundcolor"  />
   </form> }
  
   <section className={` ${amountInputed ?"translate-y-0": "-translate-y-[250%]" } w-[100%]  -z-10 flex flex-col gap-5  `}>
    
  
    <h3>Confirm Payment</h3>
    <Datacolumn contentName="Name" content={
        <p>{user.name ? user.name : "User"}</p>
    }/>
    <Datacolumn contentName="Amount" content={
        <p>N{amountAdded.toLocaleString('NGN')}</p>
    }/>
    
   
 
 
  

    
  </section>
  {amountInputed && fundingSuccesful && <div className="text-center ">
<h3>{`Your wallet was funded with N${amountAdded.toLocaleString('NGN')}! 🎉`}</h3>
<Link to={"/donor/dashboard"} className=" text-primary font-semibold ">Back to home page</Link>
    </div>}
  {amountInputed && !fundingSuccesful  && 
     <Button  content={"Add fund!"} btnClasses="bg-primary text-backgroundcolor "  handleClick={()=>AddFundsBtn()}/>
   
   }

   </section>
    
    </>
  )
}
