import { Logo } from "../logo/Logo";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { NavLink } from "react-router-dom";
import { useModal } from "../../hooks/useModal";


type Props = {
  opennav: boolean;
  setOpennav: React.Dispatch<React.SetStateAction<boolean>>;
  homelink: string;
 search:React.ReactNode;
 explorelink:string;
 helplink:string;
 accountlink:string;
};
const navStyle = ({ isActive }: any) => {
 
  return {
    borderBottom: isActive ? "4px solid #22457f " : "",
    borderRadius: isActive ? "5%" : "",
  };
};

export const Navbar = ({ opennav, setOpennav, homelink, search, explorelink, helplink, accountlink }: Props) => {
  const { ModalComp, ShowModal } = useModal();
  return (
    <>
         {ModalComp(search)}
      <header
        className=" fixed  h-20   lg:h-auto  drop-shadow-md  lg:bg-backgroundcolor  right-0 left-0 z-40  lg:drop-shadow-none 
"
      >
        <nav className="py-6 lg:flex  h-10 lg:h-auto  lg:items-center lg:max-w-[85%]  lg:mx-auto ">
          <div className="flex    bg-primary lg:bg-backgroundcolor z-30 fixed top-0 right-0 left-0 py-3 px-6 lg:relative      lg:py-3">
            <Logo logoClasses={"text-backgroundcolor lg:text-textcolor "} />
            <div className="ml-auto lg:hidden">
              {" "}
              <button className="text-backgroundcolor px-3 pb-1 bg-kit rounded-lg  mr-5  " onClick={()=>{ ShowModal( )        }}>
                <SearchRoundedIcon fontSize="medium" />
             
           
              </button>
              <button
                className="ml-auto cursor-pointer  text-backgroundcolor bg-kit px-2 pb-1 rounded-lg "
                onClick={() => {
                  setOpennav(!opennav);
                }}
              >
                {opennav ? (
                  <CloseIcon fontSize="medium" />
                ) : (
                  <MenuIcon fontSize="medium" />
                )}
              </button>
            </div>
          </div>

          <button className="text-primary px-3 pb-1 bg-kit  rounded-lg  ml-auto hidden mr-5 lg:block  " onClick={()=>{ ShowModal( )        }}>
            <SearchRoundedIcon fontSize="medium" /> search...{" "}
          </button>
          <ul
            className={`${
              opennav ? "-translate-y-0" : "-translate-y-full"
            }  transition-all ease-out delay-150 -z-20 bg-backgroundcolor opacity-[0.9]  text-primary flex flex-col items-center py-3 gap-3 lg:flex-row lg:gap-5 pt-10 lg:pt-0 lg:z-30 lg:-translate-y-0 lg:opacity-100`}
          >
            <NavLink className={"animated-links"} style={navStyle} to={`${homelink}`}>
              Home
            </NavLink>
            <NavLink className={"animated-links"} style={navStyle} to={`${explorelink}`}>
              Explore
            </NavLink>
            <NavLink className={"animated-links"} style={navStyle} to={`${accountlink}`}>
              Accounts
            </NavLink>
            <NavLink className={"animated-links"} style={navStyle} to={`${helplink}`}>
              Help
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};
