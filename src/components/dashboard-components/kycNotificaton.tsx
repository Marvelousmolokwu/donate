import {  useState } from "react"
import { Button } from "../button/Button"
import { useLocation, useNavigate } from "react-router-dom"



export const KycNotificaton = () => {

    const [kycNotification, setKycnotification] = useState(true)
const variable = useLocation()
const navigate = useNavigate()
  
  return (
    <>
    {kycNotification && <div onClick={()=>{setKycnotification(false)}} className="h-full bg-overlay z-40 absolute top-0 w-full flex justify-center items-center">

  
    <div className="bg-backgroundcolor rounded-md shadow-sm p-10  z-50 fc-flex gap-5
     ">
        <h1>hey User</h1>
        <p>Complete your KYC by clicking the button</p>
        <div className="fc-flex gap-5 lg:fr-flex">
            <Button content="Complete your KYC" btnClasses="text-white bg-primary " handleClick={()=>{
              variable.pathname.includes("user") ? navigate("/user/useraccounts/profile"): navigate("/donor/donoraccounts/profile")
            }}/>
            <Button content="Skip and Continue" btnClasses="text-primary border border-primary " handleClick={()=>{
              setKycnotification(false)
            }}/>
        </div>
    </div>
    </div>}
    </>
  )
}
