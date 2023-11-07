import { Logo } from "../logo/Logo";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import { Link } from "react-router-dom";

type Props ={
  opennav:boolean,
  setOpennav:React.Dispatch<React.SetStateAction<boolean>>
}
export const Navbar = ({opennav, setOpennav}:Props) => {
 
  return (
    <> 
      <header
        className=" fixed  drop-shadow-md  lg:bg-backgroundcolor  right-0 left-0 z-40  lg:drop-shadow-none 
"
      >
        <nav className="py-6 lg:flex  lg:items-center lg:max-w-[85%]  lg:mx-auto">
          <div className="flex    bg-primary lg:bg-backgroundcolor z-30 fixed top-0 right-0 left-0 py-3 px-6 lg:relative      lg:p-0">
            <Logo logoClasses={"text-backgroundcolor lg:text-textcolor "} />
            <div className="ml-auto lg:hidden"> <button className="text-backgroundcolor px-3 pb-1 bg-kit rounded-lg  mr-5 "><SearchRoundedIcon fontSize="medium"/>search...</button>
            <button
              className="ml-auto cursor-pointer  text-backgroundcolor  "
              onClick={() => {
                setOpennav(!opennav);
              }}
            >
              {opennav ? (
                <CloseIcon fontSize="large" />
              ) : (
                <MenuIcon fontSize="large" />
              )}
            </button></div>
        
            </div>
           
       
            <button className="text-primary px-3 pb-1 bg-kit  rounded-lg  ml-auto hidden mr-5 lg:block  "><SearchRoundedIcon fontSize="medium"/> search... </button>
          <ul
            className={`${
              opennav ? "-translate-y-0" : "-translate-y-full"
            }  transition-all ease-out delay-150 -z-20 bg-backgroundcolor opacity-[0.9]  text-primary flex flex-col items-center lg:flex-row lg:gap-5 pt-10 lg:pt-0 lg:z-30 lg:-translate-y-0 lg:opacity-100`}
          >
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Explore</Link>
            <Link to={"/"}>Accounts</Link>
            <Link to={"/"}>Help</Link>
          </ul>

        </nav>
      </header>
    </>
  );
};
