import React from 'react'
import { Logo } from '../logo/Logo'
import { Button } from '../button/Button' 
import { TypingEffect } from './ui/typewriter/Typewriter' 
import { ParagraphText } from '../text/Text' 
import { useLoggedIn } from '../../hooks/useLoggedIn'

type Props={
  handleClick: ( e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>void

}

export const HomeHero = ({handleClick}:Props) => {

  const {loggedIn} = useLoggedIn()
  return (
   <section className='container '>

    {/* the navbar(topbar) */}
    <nav className='     bg-backgroundcolor  drop-shadow-sm fixed top-0 left-0 right-0 z-20 '>
        <div className='flex justify-between container'>   <Logo/>
        <Button btnClasses=' text-backgroundcolor bg-primary' content={loggedIn ? "Login": "Signup" } handleClick={handleClick}/></div>
     
    </nav>
    {/* the main hero section */}
    <div className='h-20'></div>
    <div className='flex flex-col  lg:flex-row-reverse justify-center lg:items-center lg:justify-between'>
    <img src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1693567782/International_cooperation-amico_eplubc.svg"  className='h-[50vh] lg:w-[48%] lg:h-auto'  alt="" />
    <article className='lg:w-[48%]'>
        <h2 className='text-2xl lg:text-5xl'>Empowering <span className='inline-block'><TypingEffect/></span><span className='block'>One donation at a time.</span></h2>
    <ParagraphText content="At DonorLink, we believe in the incredible power of collective generosity. Our platform is designed to make a difference in the lives of individuals and communities around the world. Whether youre passionate about supporting education, healthcare, disaster relief, or any other cause close to your heart, DonorLink is your gateway to positive impact."/>
    <Button btnClasses=' text-backgroundcolor bg-primary' content='Signup' handleClick={handleClick}/>
    </article>
    </div>
   </section>
  )
}
