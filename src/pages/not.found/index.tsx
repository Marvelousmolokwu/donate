import { Link } from "react-router-dom"


export const Notfound = () => {
  return (
    <> <div className='w-72 lg:w-[25rem] fixed -top-24 -left-28 -z-10'>
    <img src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1693833934/Directing_the_arrow_up-bro_1_msj2xj.svg" alt="" />

    </div>
<div className="grid place-items-center h-[100vh] ">
<div><h2>Page Not Found</h2>
  <p className="text-primary">Go to the <Link to={"/"}>homepage</Link> .</p></div>
  
</div></>
   
  )
}
