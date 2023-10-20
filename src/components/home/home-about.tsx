
import { Card } from '../ui/card/Card'

export const HomeAboutSection = () => {
  return (
<section className='container text-center '>
    <h2 className=' py-5'>Why Choose Us</h2>
    <div className='flex flex-col gap-5 lg:flex-row lg:justify-between lg:gap-2'>
    <Card 
   image={"https://res.cloudinary.com/ddgyd8szc/image/upload/v1693575098/charity_1_eqlzf1.png"}
   title="Seamless Giving"
   cardContent="With our user-friendly app, sending donations has never been easier. A few taps on your device are all it takes to contribute to causes that matter."/>
    <Card image={"https://res.cloudinary.com/ddgyd8szc/image/upload/v1693576100/Currency-rafiki_k4y81t.svg"} title="Global Reach" cardContent="Our network spans across borders, connecting donors with reputable organizations and initiatives from various corners of the world."/>
   <Card image={"https://res.cloudinary.com/ddgyd8szc/image/upload/v1693576100/opacity_1_n4kl7j.png"} title="Transparency" cardContent="We're committed to transparency. Rest assured that your donations are directed to verified, impactful projects, and you'll receive updates on how your contribution is making a difference."/>
    </div>
    <section className="grid grid-cols-12 grid-rows-3 gap-3 text-backgroundcolor text-center text-xl lg:text-2xl py-10">

    <div className="bg-primary col-span-8 row-span-2 p-16 d-flex   rounded-2xl "><h2>Join us in creating a world where compassion knows no bounds</h2></div>
    <div className="bg-secondary row-span-2 col-span-4 d-flex   text-textcolor rounded-2xl "><h2>to create lasting change</h2></div>
    <div className="bg-textcolor col-span-7 p-16 d-flex   rounded-2xl"><h2>no matter the size</h2></div>
    <div className="bg-accent col-span-5 row-span-1 d-flex  rounded-2xl"><h2>Together, we can transform lives</h2></div>
   </section>

</section>
  )
}
