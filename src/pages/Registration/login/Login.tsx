import { Link, useNavigate } from "react-router-dom";
import { Sidetext } from "../ui/sidetext";
import { Visibilityinput } from "../ui/visibilityinput";

const Login = () => {
  const navigate = useNavigate()
  return (
    <>
      <main className="container flex flex-col gap-5 lg:flex lg:flex-row lg:justify-between lg:pt-20">
        <Sidetext
          content="don't have an Account?"
          path="/"
          login_signup="Create Account"
        />
        <form action="" className="md:w-[70%] lg:w-[48%]  " onSubmit={(e)=>{
          e.preventDefault()
  navigate("/dashboard")
        }}>
          <h2>Login</h2>
          <label htmlFor="" className="">
            <a href="" className="text-lightBlue text-center underline  ">
              <h3># Sign in with social media account</h3>
            </a>
          </label>

          <p className="text-center">Or</p>
          <label htmlFor="">
            Email:
            <input type="text" required />
          </label>
          <label htmlFor="login_password">
            Password:
            <Visibilityinput name="login_password" id="login_password" />
          </label>
          <input
            type="submit"
            value={"Submit"}
            className="text-backgroundcolor bg-primary my-5"
            
          />
          <Link to={"/forgotpassword"}>Forgot password ?</Link>
        </form>
      </main>
    </>
  );
};
export default Login;
