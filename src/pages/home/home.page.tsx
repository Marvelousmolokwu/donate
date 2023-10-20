import { HomeAboutSection } from "../../components/home/home-about"
import { HomeFooter } from "../../components/home/home-footer"
import { HomeHero } from "../../components/home/home-hero"
import { useState } from "react"
import { HomeModal } from "../../components/home/home-modal"



 const Homepage = () => {
  const [modal, Setmodal] = useState<boolean>(false)
  const handleClick=()=>{
    Setmodal(!modal)

  }
  if(modal){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }
  return (
<>
<HomeModal modal={modal} handleClick={handleClick}/>
<HomeHero handleClick={handleClick}/>
<HomeAboutSection/>
<HomeFooter handleClick={handleClick}/>
</>
  )
}
export default Homepage