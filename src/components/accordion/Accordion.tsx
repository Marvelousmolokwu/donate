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
    <div className={ ` card-styles overflow-hidden transition-all ease-in delay-100   text-primary w-full text-center ${accordionStyles} ${!accordion ? "" : "h-auto"} `}>
    <button className="flex justify-between items-center w-full " onClick={()=>{
      setAccordion(!accordion)
    }}><span className=" text-left text-sm lg:text-lg">{heading}</span><span className={`${!accordion ? "": "rotate-180" }`} ><ExpandMoreIcon/></span> </button>

    <p className="p-6 ">{content}</p>

  </div>
  )
}
