import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import { useState } from "react";
import { DonorSearch } from "../components/search/donorSearch";


export const DashboardLayout = () => {
  const [opennav, setOpennav] = useState(false);
  
  return (
    <><Navbar opennav={opennav} setOpennav={setOpennav} homelink={"/donorlink/dashboard"} search={<DonorSearch/>} explorelink={"/donorlink/explore"} helplink={"/donorlink/help"} accountlink={"/donorlink/useraccounts/profile"}/>
    <div className="h-20"></div>
  
    <main onClick={()=>(setOpennav(false))}><Outlet/></main>
    </>

  )
}
