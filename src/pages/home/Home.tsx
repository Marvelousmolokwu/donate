

import { HomeAboutSection } from "../../components/home/home-about";
import { HomeFooter } from "../../components/home/home-footer";
import { HomeHero } from "../../components/home/home-hero";

import { HomeModal } from "../../components/home/home-modal";
import { useModal } from "../../hooks/useModal";






const Homepage = () => {

  const {ModalComp, ShowModal} = useModal()

  

  
  const handleClick = () => {
   {ShowModal()}
      
  

  };
  
  return (
    
    <>
      {ModalComp(<HomeModal/>)}
      <HomeHero handleClick={handleClick} btnClasses={""} content={""} />
      <HomeAboutSection />
      <HomeFooter handleClick={handleClick} btnClasses={""} content={""} />
    </>
  );
};
export default Homepage;
