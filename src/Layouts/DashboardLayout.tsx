import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"


export const DashboardLayout = () => {
  return (
    <><Navbar/>
    <div className="h-20"></div>
    <Outlet/></>

  )
}
