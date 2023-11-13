import {  useNavigate, useParams } from "react-router-dom";
// import { useLoader } from "../../../hooks/useLoader";
// import { Loader } from "../../../components/loader/loader";
import { Sidetext } from "../ui/sidetext";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Visibilityinput } from "../ui/visibilityinput";

import { useDispatch } from "react-redux";
import {useState} from "react"
import { setUser } from "../../../features/user/userslice";



const Form1 = () => {
  const { user = "" } = useParams() as { user: string };
  const navigate = useNavigate()
  interface FormData {
    name: string;
  
  }
 
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<FormData>({
      name: '',
     
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
 
  

  const handleSignup = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setUser(formData));
    navigate(`/${user}/form2`)
  };
  if (!["donor", "user"].includes(user)) {
    return navigate("/");
  }
  
    

  return (




    <>
      <main className="container flex flex-col gap-5 lg:flex lg:flex-row lg:justify-between lg:pt-20 overflow-y-visible   ">
        <Sidetext
          content="Already have an Account?"
          path="/login"
          login_signup="Login"
        />

        <form className="md:w-[70%] lg:w-[48%]  "  onSubmit={handleSignup}>
          <h2 className="text-accent">{user === "donor" ? "Donor" : "User"}</h2>
          <label htmlFor="firstname">
            Firstname:
            <input type="text" name="name" id="firstname"     value={formData.name}
            onChange={handleInputChange} required  />
          </label>
          <label htmlFor="lastname">
            Lastname:
            <input type="text" name="lastname" id="lastname" required />
          </label>
          <label htmlFor="username">
            Custom username:
            <input type="text" name="username" id="username" required />
          </label>
          <label htmlFor="dob">
            Date of Birth:
            <input type="date" name="dob" id="dob" required />
          </label>
          <label htmlFor=""></label>
          <label htmlFor="">
            password
            <Visibilityinput name="password" id="password" />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" required />
          </label>
          <label htmlFor="social_media">
            Social media Account:
            <select id="social_media">
              <option value="x">X</option>
              <option value="linkedin">LinkedIn</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
            </select>
          </label>
          <label htmlFor="social_link">
            Insert your social Media link
            <input type="text" name="social_link" id="social_link" />
          </label>

          {/* <Link to={`/${user}/form2`} >
            <label className=" text-primary text-right  cursor-pointer text-2xl hover:brightness-200 ">
              Next <ArrowForwardIcon />
            </label> */}
          {/* </Link> */}
          <button type="submit">submit</button>
        </form>
      </main>

    
    </>
  );
};
export default Form1;
