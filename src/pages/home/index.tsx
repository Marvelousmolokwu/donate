import { useNavigate } from "react-router-dom";
import { HomeAboutSection } from "../../components/home/home-about";
import { HomeFooter } from "../../components/home/home-footer";
import { HomeHero } from "../../components/home/home-hero";

import { HomeModal } from "../../components/home/home-modal";
import { useModal } from "../../hooks/useModal";
import { useLoggedIn } from "../../hooks/useLoggedIn";


const Homepage = () => {
  const { modal, Setmodal } = useModal();
  const {loggedIn} = useLoggedIn()
const navigate = useNavigate()
  
  const handleClick = () => {
    if(loggedIn){
      navigate("/login")
    }
    else{
      Setmodal(!modal);
    }

  };
  
  return (
    <>
      <HomeModal modal={modal} handleClick={handleClick} />
      <HomeHero handleClick={handleClick} />
      <HomeAboutSection />
      <HomeFooter handleClick={handleClick} />
    </>
  );
};
export default Homepage;
