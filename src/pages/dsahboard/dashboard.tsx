import { LineChart } from "@mui/x-charts"
import { Button } from "../../components/button/Button"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import { useState } from "react";
import { Viewmodal } from "./view-modal";

export const Dashboard = () => {
  const [visible, setVisible] = useState(true)
  const [timeframe, setTimeframe] = useState("weekly");
  const [activeButton, setActiveButton] = useState("weekly");
  const [accordion, setAccordion] = useState(false)
  const [modal, setModal] = useState(false)
  const [copied, setCopied] = useState(false)
  const referencelink = "uhuuhdh3444"
  const handleTimeframeChange = (newTimeframe: string, buttonType:string) => {
    setTimeframe(newTimeframe);
    setActiveButton(buttonType);


  };
  const showCopiedPrompt =(()=>{
    setCopied(true)
    setTimeout(()=>{
 setCopied(false)
    }, 2000
    )
  })

  return (
    <>
    <main className="container lg:max-w-[85%]">
      <h1 className="font-semibold text-accent">Hello Allen,</h1>
    
      <section className="lg:grid lg:grid-cols-4 lg:gap-4 lg:grid-rows-2 lg:place-items-start place-content-between">
<div className="lg:col-start-1  row-start-1 w-full"> <div className="flex flex-col gap-3 shadow-md p-6 rounded-md text-left my-5 bg-kit  ">
  <div className="flex justify-between items-center  "><h1 className="text-lg font-semibold">Balance</h1>
<Button content="Payout" handleClick={()=>{}} btnClasses="text-backgroundcolor bg-primary"/>
</div>
<div className=" flex justify-between">
  <div className={`flex flex-col gap-2  ${visible ?  "blur-none" : "blur-md"}`}><h2 >$1,214.08</h2>
    
    <p className="text-sm font-semibold text-green"><span className="bg-green p-1 rounded-md h-3 text-backgroundcolor mr-2 ">Up</span><span>$0.00</span> Today</p></div>

  <button className="self-end" onClick={()=>(
    setVisible(!visible)
  )}>{visible ?       <VisibilityOffIcon fontSize="small"/>:<VisibilityIcon fontSize="small"/>} </button> 
</div>
    
  </div>
  <div className="my-5  ">
    <button className="underline text-accent text-left" onClick={()=>(setModal(true))}>
      See how many donors looked at your Profile
    </button>
  {modal ? <Viewmodal setmodal={setModal}/> : ""}
        </div>
  </div>
       
  
        

  
  <div className="my-5 bg-kit shadow-md p-6 rounded-md text-center flex flex-col gap-5 justify-center items-center lg:col-start-2 lg:col-span-2 lg:row-start-1 w-full">
  <LineChart
 
  xAxis={[{ scaleType:'band', data: timeframe === "weekly" ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : timeframe === "monthly" ? ["Week 1", "Week 2", "Week 3", "Week 4"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] }]}
  series={[
  
    {
      data: timeframe === "weekly" ? [50, 30, 70, 20, 60, 40, 80] : timeframe === "monthly" ? [200, 150, 300, 250] : [206, 90, 400, 0, 50, 10],
     
      color: "#0a2f6c"
    }
  ]}
  width={400}
  height={300}
/>

<div className="flex gap-5">
  <Button content="yearly" handleClick={()=>{handleTimeframeChange("yearly", "yearly")}} btnClasses={`border-2 border-primary  ${activeButton === "yearly" ? "bg-primary text-backgroundcolor" : "text-primary"}`} />
  <Button content="monthly" handleClick={()=>{handleTimeframeChange("monthly", "monthly")}} btnClasses={`border-2 border-primary  ${activeButton === "monthly" ? "bg-primary text-backgroundcolor" : "text-primary"}`}/>
  <Button content="weekly" handleClick={()=>{handleTimeframeChange("weekly", "weekly")}} btnClasses={`border-2 border-primary ${activeButton === "weekly" ? "bg-primary text-backgroundcolor" : "text-primary"}`}/>

</div>

  </div>
  <div className={ `  shadow-md p-6  lg:w-[21rem] rounded-md bg-kit overflow-hidden transition-all ease-in delay-100   text-primary w-full text-center ${accordion ? "h-auto" : "h-14"} lg:col-start-4 lg:col-span-1`}>
  <button className="flex justify-between items-center w-full " onClick={()=>{
    setAccordion(!accordion)
  }}><span>Donations</span><ExpandMoreIcon/> </button>
<div>
  <p className="p-6">You haven't made any donations yet!</p>
</div>
</div>
  <div className="my-5 shadow-md p-6 lg:p-14 rounded-md bg-kit text-center flex flex-col items-center gap-3 relative lg:col-start-4 lg:col-span-1 lg:row-start-1 ">
    <div className="bg-center bg-no-repeat h-24 w-24 rounded-full border-2 border-accent bg-profile">

    </div>
    <h2>User 1234</h2>
    <div className="flex gap-6">
            <InstagramIcon className="cursor-pointer" />
            <FacebookIcon className="cursor-pointer" />
            <TwitterIcon className="cursor-pointer" />
          </div>
    <div className=" flex gap-3" >
    <Button content="Accounts" handleClick={()=>{}} btnClasses="border-2 border-primary text-primary"/>
  <Button content="Payouts" handleClick={()=>{}} btnClasses="border-2 border-primary text-primary"/>
    
    </div>
    <p className="text-lightBlue cursor-pointer ">referral Link : <span onClick={()=>{
      navigator.clipboard.writeText(referencelink)
      {showCopiedPrompt()}
    }} className="text-textcolor text-small">{referencelink}</span></p>
    {copied &&<p className="shadow-md p-2 rounded-sm bg-backgroundcolor absolute bottom-20">copied!</p>}
  </div>
  <div className="lg:col-start-2 lg:col-span-2 lg:row-start-2 w-full">
    <h2>Top Donors</h2>
  </div></section>
  
    </main>
    


    </>
  )
}
