import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Logo } from '../../../components/logo/Logo';
import { Link } from 'react-router-dom';

type Props={
  content: string
  path: string
  login_signup:string
}
export const Sidetext = ({content, path, login_signup}: Props) => {
  return (
<>
<section className=' ' >
<div className='w-72 lg:w-[25rem] fixed -top-24 -left-28 -z-10'>
      <img src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1693833934/Directing_the_arrow_up-bro_1_msj2xj.svg" alt="" />

      </div>
  <div className='flex flex-col gap-10'>

  <Logo/>
      
     
      
      
      <h3 className='mt-10'>Let's make the world a better place one donation at a time.</h3>
      <p className="font-normal"> {content}  <Link className="text-accent " to={path === "/" ? "/": "/login"}>{login_signup}</Link></p>
      <div className='flex gap-6'><InstagramIcon className='cursor-pointer'/>
      <FacebookIcon className='cursor-pointer'/>
      <TwitterIcon className='cursor-pointer'/>
      </div>
      </div>

</section>
</>
  )
}