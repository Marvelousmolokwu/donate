import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import { useState } from "react";


export const DashboardLayout = () => {
  const [opennav, setOpennav] = useState(false);
  return (
    <><Navbar opennav={opennav} setOpennav={setOpennav}/>
    <div className="h-20"></div>
    <main onClick={()=>(setOpennav(false))}><Outlet/></main>
    </>

  )
}
