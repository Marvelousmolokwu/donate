import {useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type accordionProps ={
    content:string;
    heading:string;
}

export const Accordion = ({heading, content}:accordionProps) => {
    const [accordion, setAccordion] = useState(false)
  return (
    <div className={ `   overflow-hidden transition-all ease-in delay-100   text-primary w-full text-center ${accordion ? "h-auto" : "h-6"} `}>
    <button className="flex justify-between items-center w-full " onClick={()=>{
      setAccordion(!accordion)
    }}><span>{heading}</span><ExpandMoreIcon/> </button>
  <div>
    <p className="p-6">{content}</p>
  </div>
  </div>
  )
}
