import { useState } from "react";
import { Modal } from "../components/modal/Modal";

export const useModal = () => {
  const [modalOpen, SetModalOpen] = useState(false);
  const ModalComp =((content:React.ReactNode)=><Modal open={modalOpen} content={content} onclose={hideModal}/>)

  const ShowModal = ()=>SetModalOpen(true)
   
  
const hideModal =()=>SetModalOpen(false)
  

  
  return {
   ShowModal,
   ModalComp,
 
  
  };
};
