import { Button } from "../../components/button/Button";

import { useModal } from "../../hooks/useModal";


type Props={
    transactionType: React.ReactNode,
    buttonName:string
    amount:number
}
export const AccountHeader = ({transactionType, buttonName, amount}:Props) => {

    const {ShowModal, ModalComp} = useModal()
  return (
    <>
      {ModalComp(transactionType)}
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
                 <div > <h2>${amount}</h2>
                  <p className="text-sm">NGN WALLET</p></div>
         
                  
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
