

import { Sidetext } from '../ui/sidetext'

export const Login = () => {
  return (
<> 
  <section className='container flex flex-col gap-5 lg:flex lg:flex-row lg:justify-between lg:pt-20'>
  <Sidetext content="don't have an Account?" path="/" login_signup="Create Account"/>
  <form action="" className="md:w-[70%] lg:w-[48%]  ">
  <h1>login</h1>
 
<label htmlFor="">
  Email:
  <input type="text" />
  </label>
  <label htmlFor="">
    Password:
    <input type="password" />
  </label>
  <input type="submit"value={"Submit"} className='text-backgroundcolor bg-primary my-5'/> 
  <a href="" className='text-accent'>Sign in with social media account</a>
  </form>
  </section>
     
 
 </>
  
  )
}
