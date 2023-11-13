import { ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";


type modalProps={
    open: boolean;
    content: ReactNode;
    onclose?: ()=>void;
}

export const Modal = ({open, content, onclose}:modalProps) => {
  
  return (
    <>
    {
        open && <section>
              <div
         onClick={onclose}  className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay z-30 "
          >
            {" "}
          </div>
          <div
            className=" shadow-md bg-backgroundcolor flex justify-center items-center   w-[70%] lg:w-1/2  p-8 rounded-md fixed z-50  top-10 lg:top-[15%] left-[15%] lg:left-[25%]
    animate-[modal_0.3s_linear]"
          >
            <button onClick={onclose} className=" cursor-pointer absolute top-3 right-5">
             <CloseIcon />
            </button>
            {content}
        
            </div>
        </section>
    }
    </>
  )
}
