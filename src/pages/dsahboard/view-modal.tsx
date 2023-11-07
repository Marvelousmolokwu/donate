type Props={
    setmodal : React.Dispatch<React.SetStateAction<boolean>>
}

export const Viewmodal = ({setmodal}:Props) => {
  return (
  <>
   <div
       onClick={()=>(setmodal(false))}     className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay z-30 "
          >
      
          </div>
  <div className="bg-backgroundcolor text-center text-primary rounded-md shadow-md absolute p-4 w-[90%] lg:w-[50%] z-40 top-[30%]">
    <p>No donors viewed your profile</p>

  </div>
  </>
  )
}
