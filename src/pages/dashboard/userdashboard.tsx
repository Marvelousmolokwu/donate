

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import {  useEffect, useState } from "react";
import { Viewmodal } from "./view-modal";
import { useModal } from "../../hooks/useModal";
import { UserProfile } from "../../components/dashboard-components/user-profile";
import { Charts } from "../../components/dashboard-components/charts";
import { Accordion } from "../../components/accordion/Accordion";

import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userslice';
import donor from "../../data/donors.json"
import AdSlider from "../../components/dashboard-components/adSlider";
import { Link } from "react-router-dom";
import { KycNotificaton } from "../../components/dashboard-components/kycNotificaton";




export const Dashboard = () => {
  const [visible, setVisible] = useState(true);
const[showKycNotification, setshowKycNotification] = useState(false)
  const { ModalComp, ShowModal } = useModal();
  const user = useSelector(selectUser);
  const [seemore, setSeemore] = useState(4)
  const handleSeemore=()=>{
    setSeemore(prev=> prev + 3)
  }
const amount = user.useramount.toFixed(2)

useEffect(() => {
  const delay = setTimeout(() => {
   setshowKycNotification(true)
  
  }, 10000);


  return () => clearTimeout(delay);
}, []);

  return (
    <>
{showKycNotification ? <KycNotificaton/> : ""}

      <main className="container lg:max-w-[80%]">
        <h1 className="font-semibold text-accent">Hello  { !user.name ? "User": user.name} </h1>

        <section className="lg:grid lg:grid-cols-4 lg:gap-4 lg:grid-rows-[20rem, 1fr] lg:place-items-start place-content-between ">
          {/* the balance card */}
          <div className="lg:col-start-1  row-start-1 w-full">
            {" "}
            <div className="flex flex-col gap-3 shadow-md p-6 rounded-md text-left my-5 bg-kit  ">
              <div className="flex justify-between items-center  ">
                <h1 className="text-lg font-semibold">Balance</h1>
                <Link to={"/user/useraccounts/profile"} className="text-backgroundcolor bg-primary  rounded-md py-2 px-4 ">Payout</Link>
                 
               
             
              </div>
              <div className=" flex justify-between">
                <div
                  className={`flex flex-col gap-2  ${
                    visible ? "blur-none" : "blur-md"
                  }`}
                >
                  <h2>${amount}</h2>

                  <p className="text-sm font-semibold text-green">
                    <span className="bg-green p-1 rounded-md h-3 text-backgroundcolor mr-2 ">
                      Up
                    </span>
                    <span>$0.00</span> Today
                  </p>
                </div>

                <button
                  className="self-end"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? (
                    <VisibilityOffIcon fontSize="small" />
                  ) : (
                    <VisibilityIcon fontSize="small" />
                  )}{" "}
                </button>
              </div>
            </div>
            {/* link to see how many donors viewed your profile */}
            <div className="my-5  ">
              <button
                className="underline text-accent text-left"
                onClick={ShowModal}
              >
                See how many donors looked at your Profile
              </button>
              {ModalComp(<Viewmodal />)}
            </div>
          </div>
          {/* charts */}

          <div className="card-styles  d-flex flex-col gap-5  lg:col-start-2 lg:col-span-2 lg:row-start-1 w-full">
            <Charts />
          </div>
          {/* tab to see your donations */}
          <div className="p-1  w-full  lg:col-start-4 lg:col-span-1">
            <Accordion
              heading="Donations"
              content="You haven't made any donations yet!"
              accordionStyles={"h-16"}
            />
          </div>
          {/* ad slider */}
          <div className="lg:row-start-2 w-full ">
            <AdSlider/>
          </div>
{/* user profile */}
          <div className=" card-styles flex flex-col items-center gap-7 w-full relative lg:col-start-4 lg:col-span-1 lg:row-start-1 ">
            <UserProfile picture={user.picture} username={user.username} twitterlink={user.socialmedialink}/>
          </div>
          {/* list of top donors */}
          <div className="lg:col-start-2 lg:col-span-2 lg:row-start-2 w-full mr-5">
            <h2 className="mb-5">Top Donors</h2>
          
            {
              <ul>
                {donor.slice(0,seemore).map((donor)=> <li key={donor.id} className="border-b-2 border-accent  p-2   hover:bg-kit text-accent"><Link to ={`/user/donorprofile/${donor.id}`}> <div className="flex items-center justify-between"><h4>{donor.id}. {donor.name}</h4> 
                       
                       <img src={`https://flagsapi.com/${donor.country}/flat/32.png`} alt=""  /></div>
                       </Link> </li>)}
                </ul>
            }
            <button className="text-accent flex ml-auto underline py-2" onClick={handleSeemore}><span>See more</span></button>
          </div>
        </section>
      </main>
    </>
  );
};
