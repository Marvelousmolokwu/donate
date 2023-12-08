import {useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type accordionProps ={
    content:string;
    heading:string;
    accordionStyles:string;
}

export const Accordion = ({heading, content, accordionStyles}:accordionProps) => {
    const [accordion, setAccordion] = useState(false)
  return (
    <div className={ ` bg-kit my-3 rounded-md shadow-md p-3 overflow-hidden  transition-all ease-in delay-100   text-primary w-full text-center ${accordionStyles} ${!accordion ? "" : "h-auto"} `}>
    <button className="flex justify-between items-center w-full " onClick={()=>{
      setAccordion(!accordion)
    }}><span className=" text-left text-[16px] lg:text-lg">{heading}</span><span className={`${!accordion ? "": "rotate-180" }`} ><ExpandMoreIcon/></span> </button>

    <p className="p-6 ">{content}</p>

  </div>
  )
}
