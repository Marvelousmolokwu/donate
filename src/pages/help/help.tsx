import SendIcon from '@mui/icons-material/Send';
import { Accordion } from '../../components/accordion/Accordion';
import { useModal } from '../../hooks/useModal';
import { Chat } from './chat';

export const Help = () => {
    const {ShowModal, ModalComp} = useModal()
  return (
  <>
<section className="container">
{ModalComp(<Chat/>)}
    <h2 className='font-semibold'>How can we help ?</h2>
    <button className="card-styles flex justify-between w-full " onClick={()=>{
        ShowModal()
    }}>
   <h3>Chat with us</h3>
   <SendIcon className='text-primary'/>
       </button>
      

       <h3>FAQs</h3>
       <section>
        <Accordion heading='how do i perform a transaction' content='lorem ipsum .....' accordionStyles={"h-16"}/>
        <Accordion heading='Do i need to input my Bvn' content='lorem ipsum .....' accordionStyles={"h-16"}/>
        <Accordion heading='How much charges are Attracted per Transaction' content='lorem ipsum .....'accordionStyles={"h-16"}/>
        <Accordion heading='what currency is used in donorlink' content='lorem ipsum .....' accordionStyles={"h-16"}/>
        <Accordion heading='Who are the founders of donorlink' content='lorem ipsum .....' accordionStyles={"h-16"}/>
        <Accordion heading='What is the Highest/Lowest amount i can perform a transaction with' content='lorem ipsum .....' accordionStyles={"h-16"}/>
        <Accordion heading='How do i withdraw money to my account' content='lorem ipsum .....' accordionStyles={"h-16"}/>
       </section>
</section>
  </>
  )
}
