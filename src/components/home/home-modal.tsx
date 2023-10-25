import { Link } from "react-router-dom"

type modalProps ={
    handleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=> void
    modal: boolean
}

export const HomeModal = ({handleClick, modal}: modalProps) => {
  return (
    <>
    {modal && <section>
    <div onClick={handleClick} className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay z-30 "> </div>
    <div className=" shadow-md drop-shadow bg-backgroundcolor flex justify-center items-center flex-col  w-1/2 gap-4 p-8 rounded-md fixed z-50  top-10 lg:top-[15%] left-[25%] 
    animate-[modal_0.3s_linear]" >
  <div onClick={handleClick} className="ml-auto cursor-pointer"><img src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1681806537/icon-close_h5hess.svg" alt="" /></div>
        <h1 className="">Choose your account type</h1>
      
  <div className="flex flex-col lg:flex-row text-center gap-4" >
<div>

  <Link to="/donor/form1" className="hover:before:w-0"  >
    {(!modal)}

        <div className="flex items-center justify-center px-6 py-4 bg-secondary">
          <img src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1693576100/Currency-rafiki_k4y81t.svg" alt="" width={"150px"} />
        </div>
        <div className="bg-kit p-2">
          <h3 className="text-primary">Donor</h3>
          </div>
         
        </Link></div>
  
  
      <Link to="/user/form1" className="hover:before:w-0">
      <div className="flex items-center justify-center   px-6 py-4 bg-secondary">
        <img src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1693576100/Authentication-bro_yobvrn.svg" alt="" width={"150px"} />
      </div>
      <div className="bg-kit">
        <h3 className="text-primary p-2">User</h3>
      </div>
      </Link>
      
  </div>
 </div>
  </section>
}
  </>
  )
}
