import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import { useState } from "react";
import { DonorSearch } from "../components/search/donorSearch";
import { KycNotificaton } from "../components/dashboard-components/kycNotificaton";


export const DashboardLayout = () => {
  const [opennav, setOpennav] = useState(false);
  
  return (
    <>
    <KycNotificaton/>
    <Navbar opennav={opennav} setOpennav={setOpennav} homelink={"/user/dashboard"} search={<DonorSearch/>} explorelink={"/user/explore"} helplink={"/user/help"} accountlink={"/user/useraccounts/profile"}/>
    <div className="h-20"></div>
  
    <main onClick={()=>(setOpennav(false))}><Outlet/></main>
    </>

  )
}
