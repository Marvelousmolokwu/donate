import { Datacolumn } from "../../pages/accounts/datacolumn"
import React, {useState} from "react"
import { Button } from "../button/Button"
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userslice';
import { Link } from "react-router-dom"
import { useAmount } from "../../utilities/context";



export const Payout = () => {
    const[amountInputed, setAmountInputed] = useState(false)
    const [withdrawSuccesful, setWithdrawSuccesful] = useState(false)
const [amountError, setAmountError] = useState("")
    const [amountToWidthdraw,  setAmountToWithdraw] = useState<number>(0)
    const user = useSelector(selectUser)

    const {amountChange} = useAmount()
    const handleClick =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(amountToWidthdraw <= 1000){
setAmountError("Can't withdraw Amount less than N2000!")
        }
        else{
            setAmountInputed(true)
        }
       
    }
    const WithdrawBtn = ()=>{
    setWithdrawSuccesful(true)
    amountChange(total)
    }
    const amount: number = amountToWidthdraw;
    const charges: number = 10;
    const total = amount + charges;

  return (
   <>
   <section className="flex flex-col items-center justify-center w-[80%] mt-5 overflow-hidden" onSubmit={handleClick}>
   {!amountInputed && <form className="font-semibold w-full lg:w-[60%] text-left flex flex-col gap-5 mt-[10%]">
<label htmlFor="">
   Amount:

</label>
<input type="number" name="name" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setAmountToWithdraw(parseInt(e.currentTarget.value))} />
<p className="text-primary">{amountError}</p>
<input type="submit" value={"Submit"} className="bg-primary text-backgroundcolor"  />
   </form> }
  
   <section className={` ${amountInputed ?"-translate-x-0": "-translate-y-[200%]" } w-[100%]  -z-10 flex flex-col gap-5  `}>
    
  
    <h3>Payout Review</h3>
    <Datacolumn contentName="Name" content={
        <p>{user.name ? user.name : "User"}</p>
    }/>
    <Datacolumn contentName="Amount" content={
        <p>N{amount}</p>
    }/>
     <Datacolumn contentName="service Charge" content={
        <p>N{charges}</p>
    }/>
     <Datacolumn contentName="Total" content={
        <p>N{total}</p>
    }/>
 
 
  

    
  </section>
  {amountInputed && withdrawSuccesful && <div className="text-center ">
<h3>{`Your Widthdrawal of N${amount} was Successful! 🎉`}</h3>
<Link to={"/user/dashboard"} className=" text-primary font-semibold ">Back to home page</Link>
    </div>}
  {amountInputed && !withdrawSuccesful  && 
     <Button  content={"Withdraw"} btnClasses="bg-primary text-backgroundcolor "  handleClick={()=>WithdrawBtn()}/>
   
   }

   </section>
    
   </>
  )
}
