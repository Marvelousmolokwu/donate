import {  useState } from "react"
import { Button } from "../button/Button"
import { useLocation, useNavigate } from "react-router-dom"



export const KycNotificaton = () => {

    const [kycNotification, setKycnotification] = useState(true)
const variable = useLocation()
const navigate = useNavigate()
  
  return (
    <> <div onClick={()=>{setKycnotification(false)}} className={`${kycNotification ? "translate-y-0":"-translate-y-[200%]"} delay-100 ease-in  transition-all bg-overlay z-40  w-full flex justify-center items-center  top-0 left-0 right-0 bottom-0 fixed`}>

  
    <div className={`  bg-backgroundcolor w-[70%] md:w-[50%] lg:w-[40%]  rounded-md shadow-sm p-10  z-50 fc-flex gap-5
    `}>
        <h1>hey User</h1>
        <p>Complete your KYC by clicking the button</p>
        <div className="fc-flex gap-5 lg:fr-flex">
            <Button content="Complete your KYC" btnClasses="text-white bg-primary w-full " handleClick={()=>{
              variable.pathname.includes("user") ? navigate("/user/useraccounts/profile"): navigate("/donor/donoraccounts/profile")
            }}/>
            <Button content="Skip and Continue" btnClasses="w-full text-primary border border-primary " handleClick={()=>{
              setKycnotification(false)
            }}/>
        </div>
    </div>
    </div>
    </>
  )
}
