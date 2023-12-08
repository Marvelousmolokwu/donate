import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Logo } from "../logo/Logo";
import { useNavigate } from "react-router-dom";
import { useUserLoggedIn } from "../../utilities/context";


type Props = {
  content: string;
  path: string;
  login_signup: string;
};
export const Sidetext = ({ content, path, login_signup }: Props) => {
  const navigate = useNavigate();
  const { handleLogin, loggedIn } = useUserLoggedIn();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
 
    {
      loggedIn ? handleLogin(false) : handleLogin(true);
    }

    e.preventDefault();
    navigate(`${path}`);
  };

  return (
    <>
      <section className=" ">
        <div className="w-72 lg:w-[25rem] fixed -top-24 -left-28 -z-10">
          <img
            src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1693833934/Directing_the_arrow_up-bro_1_msj2xj.svg"
            alt=""
          />
        </div>
        <div className="fc-flex gap-10">
          <Logo logoClasses={""} />

          <h3 className="mt-10">
            Let's make the world a better place one donation at a time.
          </h3>
          <p className="font-normal">
            {" "}
            {content}{" "}
            <button className="text-accent animated-links" onClick={handleClick}>
              {login_signup}
            </button>
          </p>
          <div className="flex gap-6">
            <InstagramIcon className="cursor-pointer" />
            <FacebookIcon className="cursor-pointer" />
            <TwitterIcon className="cursor-pointer" />
          </div>
        </div>
      </section>
    </>
  );
};
