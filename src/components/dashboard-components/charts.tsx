
import { Button } from '../button/Button'
import {useState} from "react"
import { LineChart } from "@mui/x-charts"

export const Charts = () => {
    const [timeframe, setTimeframe] = useState("weekly");
    const [activeButton, setActiveButton] = useState("weekly");
    const handleTimeframeChange = (newTimeframe: string, buttonType:string) => {
        setTimeframe(newTimeframe);
        setActiveButton(buttonType);
    
    
      };
  return (
    <>
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

<div className="flex gap-6">
 <Button content="yearly" handleClick={()=>{handleTimeframeChange("yearly", "yearly")}} btnClasses={`border-2 border-primary  ${activeButton === "yearly" ? "bg-primary text-backgroundcolor" : "text-primary"}`} />
 <Button content="monthly" handleClick={()=>{handleTimeframeChange("monthly", "monthly")}} btnClasses={`border-2 border-primary  ${activeButton === "monthly" ? "bg-primary text-backgroundcolor" : "text-primary"}`}/>
 <Button content="weekly" handleClick={()=>{handleTimeframeChange("weekly", "weekly")}} btnClasses={`border-2 border-primary ${activeButton === "weekly" ? "bg-primary text-backgroundcolor" : "text-primary"}`}/>
    </div>
    </>
  )
}
