import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Sidetext } from "../../../components/registration-components/sidetext";
import { Visibilityinput } from "../../../components/registration-components/visibilityinput";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setUser } from "../../../features/user/userslice";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Form1 = () => {
  const { user = "" } = useParams() as { user: string };
  if (!["donor", "user"].includes(user)) {
    return <Navigate to={"/"} />;
  }
  const navigate = useNavigate();
  const [name, setName] = useState("") ;
  const [username, setUsername] = useState("");
  const [socialmedialink, setSocialmedialink] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setUser({
        name: name,
        username: username,
        socialmedialink: socialmedialink,
        email: email,
      })
    );
    navigate(`/${user}/form2`);
  };

  return (
    <>
      <main className="container fc-flex gap-5 lg:fr-flex lg:pt-20 overflow-y-visible   ">
        <Sidetext
          content="Already have an Account?"
          path={`/${user}/login`}
          login_signup="Login"
        />
        <form className="md:w-[70%] lg:w-[48%]  " onSubmit={handleSignup}>
          <h2 className="text-accent">{user === "donor" ? "Donor" : "User"}</h2>
          <label htmlFor="name">
            Firstname:
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="lastname">
            Lastname:
            <input type="text" name="lastname" id="lastname" required />
          </label>
          <label htmlFor="username">
            Custom username:
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label htmlFor="dob">
            Date of Birth:
            <input type="date" name="dob" id="dob" required />
          </label>
         
          <label htmlFor="">
            password
            <Visibilityinput name="password" id="password" />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />{" "}
          </label>

          <label htmlFor="social_link">
            Insert your twitterlink link
            <input
              type="text"
              name="social_link"
              id="social_link"
              onChange={(e) => setSocialmedialink(e.target.value)}
            />
          </label>

          <button
            className=" text-primary text-right flex ml-auto py-5   cursor-pointer text-2xl hover:brightness-200 "
            type="submit"
          >
            <span>
              Next <ArrowForwardIcon />
            </span>
          </button>
        </form>
      </main>
    </>
  );
};
export default Form1;
