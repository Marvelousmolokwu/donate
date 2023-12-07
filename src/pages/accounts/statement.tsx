
import { Template } from "./template"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useModal } from "../../hooks/useModal";


export const Statement = () => {
    const [Statement, setStatement] = useState<null | string>(null)
 
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const {ShowModal, ModalComp, hideModal} = useModal()
    const handleClick = ()=>{


        ShowModal()
        
           }


  return (
    <>
    <section>
<Template mainInfo="Check the statements of all your transactions here" btnText={  <CalendarMonthIcon/>} handleClick={handleClick}/>
<section className="text-center my-3">
{Statement ? <h1>Account Statement</h1>: <h1>You haven't made any transactions yet!</h1>}

</section>
    </section>
    {ModalComp(
        <div className="flex flex-col justify-center gap-5">
         <div className="flex gap-5  justify-center">

     <div>
           <label htmlFor="" className="block">Start Date:</label>
         <DatePicker
         selectsStart
         selected={startDate}
         onChange={(date)=>  date && setStartDate(date)}
         startDate={startDate}
         placeholderText="start date"
         /></div>

     <div>
        <label htmlFor="">End Date:</label>
         <DatePicker
         selectsEnd
         selected={endDate}
         onChange={(date)=>date &&  setEndDate(date)}
         endDate={endDate}
         startDate={startDate}
         minDate ={startDate}
         placeholderText="end date"
         />
         </div>
 
 </div>
 <button className="bg-primary text-backgroundcolor rounded-lg p-3" onClick={()=>{
    hideModal()
 }}>
    get statement
 </button>
 </div>
    )}
   
    </>
  )
}
