
import { SetStateAction, useState } from "react";
import { Button } from "../../components/button/Button";
import user from "../../data/user.json"

import { useModal } from "../../hooks/useModal";
import { DonorBill } from "../../components/dashboard-components/donorBill";
import { selectUser } from "../../features/user/userslice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Donordashboard = () => {
  const [ngodata, setngoData]= useState(4)
  const [orphanagedata, setOrphangeData]= useState(4)
  const [otherdata, setOtherdata] = useState(4)
  const {ShowModal, ModalComp} = useModal()
  const [selectedUserId, setSelectedUserId] = useState("you didn't select a user");
  const donor = useSelector(selectUser);

const handleDonateButtonClick = (userId: SetStateAction<string>) => {
  setSelectedUserId(userId);
};
  return (
    <>
 {ModalComp(<DonorBill name={selectedUserId}/>)}
              <section className="container text-primary">
        <h1 className="mb-5">Hello {donor.name}</h1>
        <section className="flex flex-col">
          <h1>NGO's</h1>
         <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        
         {user.map((usertype)=>usertype.NGO?.slice(0, ngodata).map((item)=>(
           <div key={item.id} className="card-styles relative">
                   <Button content="Donate" btnClasses="bg-primary text-backgroundcolor my-3 absolute right-1" handleClick={()=>{
                    ShowModal()
                    handleDonateButtonClick(item.name);
                   }}/>
                     <Link to={`/donordashboardprofile/${item.id}`}>
             <div className="h-52 md:h-40 w-full rounded-md object-cover">
               <img
                 src={`${item.img}`}
                 alt="profile-pic"
                 className="w-full h-full"
               />
             </div>

             <h4>{item.name}</h4>
             <p className="text-sm lg:text-xl">{item.history}</p>
             <p className="text-sm font-bold">visit us @<a href="/">{item.name}</a></p>
            </Link>
           </div>
           
                    
          )))} 
           
          </section>
         <button className="my-5 " onClick={()=> 
          ngodata > 4? setngoData(4) : setngoData(ngodata + 4)
          }>{ngodata > 4?"Show less":"See more" }</button>
        </section>
        <section className="flex flex-col">
          <h2>Orphanages</h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {user.map((usertype)=>usertype.orphanage?.slice(0, orphanagedata).map((item)=>(
       
          <div key={item.id} className="card-styles relative">
             <Button content="Donate" btnClasses="bg-primary text-backgroundcolor my-3 absolute right-1" handleClick={()=>{
                    ShowModal()
                    handleDonateButtonClick(item.name);
                   }}/>
               <Link to={`/donordashboardprofile/${item.id}`}>
                 
             <div className="h-52 md:h-40 w-full rounded-md object-cover">
               <img
                 src={`${item.img}`}
                 alt="profile-pic"
                 className="w-full h-full"
               />
             </div>

             <h4>{item.name}</h4>
             <p className="text-sm lg:text-xl">{item.about}</p>
             <p className="text-sm font-bold">visit us @<a href="/">{item.name}</a></p>
             </Link>
           </div>)))
           
           
           }
        
           </section>
           <button className="my-5 " onClick={()=> 
          ngodata > 4? setOrphangeData(4) : setOrphangeData(orphanagedata + 4)
          }>{orphanagedata > 4?"Show less":"See more" }</button>
        </section>
       
        <section className="flex flex-col">
          <h2>
            Others <span>(health funds, educational funds etc)</span>     </h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {user.map((usertype)=>usertype.others?.slice(0, otherdata).map((item)=>(
               <div key={item.id} className="card-styles relative">
              <Button content="Donate" btnClasses="bg-primary text-backgroundcolor my-3 absolute right-1" handleClick={()=>{
                    ShowModal()
                    handleDonateButtonClick(item.name);
                   }}/>
                     <Link to={`/donordashboardprofile/${item.id}`}>
         <div className="h-52 md:h-40 w-full rounded-md object-cover">
           <img
             src={`${item.img}`}
             alt="profile-pic"
             className="w-full h-full"
           />
         </div>

         <h4>{item.name}</h4>
         <p className="text-sm lg:text-xl">{item.about}</p>
         <p className="text-sm font-bold">visit us @<a href="/">{item.name}</a></p>
         </Link>
       </div>)))}
     </section>
     <button className="my-5 " onClick={()=> 
          otherdata > 4? setOtherdata(4) : setOtherdata(otherdata + 4)
          }>{otherdata > 4?"Show less":"See more..." }</button>
        </section>
      </section>
    </>
  );
};
