import { Button } from "../../components/button/Button";

import { useModal } from "../../hooks/useModal";
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userslice';


type Props={
    transactionType: React.ReactNode,
    buttonName:string
    amount:number
}
export const AccountHeader = ({transactionType, buttonName, amount}:Props) => {
const formmatedAmount = amount.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
    const {ShowModal, ModalComp} = useModal()
    const user =  useSelector(selectUser)
  return (
    <>
      {ModalComp(transactionType)}
 <section className="flex flex-col lg:flex-row lg:gap-5">
    <div className="card-styles flex justify-start gap-5 items-center w-full">
    <div className="bg-center  bg-no-repeat h-28 w-28 rounded-full bg-kit border-4 border-accent bg-profile ">
<img src={user.picture} alt="" className="h-full w-full rounded-full"/>
</div>
        <div> <h3>{user.name  ? user.name: "User"}</h3>
        <p className="text-sm">USER ID : AADD5668</p></div>
        
       
    </div>
    <div className="card-styles w-full">
    <div className="flex flex-col gap-6">
                 <div > <h2>{formmatedAmount}</h2>
                  <p className="text-sm">USD WALLET</p></div>
         
                  
                  <Button
                  content={buttonName
                }
                  handleClick={()=>ShowModal()}
                  btnClasses="text-backgroundcolor bg-primary w-[50%]"
                />                
               
                </div>       
               
    </div>
    </section>

    </>
  )
}
