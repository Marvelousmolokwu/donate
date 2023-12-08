import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import { useState } from "react";
import { UserSearch } from "../components/search/usersearch";


export const DonorDashboardLayout = () => {
  const [opennav, setOpennav] = useState(false);
  
  return (
    <><Navbar opennav={opennav} setOpennav={setOpennav} homelink={"/donor/donordashboard"} search={<UserSearch />} explorelink={"/donor/explore"} helplink={"/donor/help"} accountlink={"/donor/donoraccounts/profile"}/>
    <div className="h-24"></div>
    <main onClick={()=>(setOpennav(false))}><Outlet/></main>
    </>

  )
}
