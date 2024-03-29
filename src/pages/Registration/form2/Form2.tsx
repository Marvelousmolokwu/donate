import { Sidetext } from "../../../components/registration-components/sidetext";
import React, { useState } from "react";
import { ImageInput } from "../../../components/registration-components/imageInput";
import { useNavigate, useParams } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Visibilityinput } from "../../../components/registration-components/visibilityinput";
import { useUserLoggedIn } from "../../../utilities/context";
import { useDispatch } from "react-redux";
import { setUser } from "../../../features/user/userslice";
import { useSelector } from 'react-redux';
import { selectUser } from "../../../features/user/userslice";


const Form2 = () => {
  const [upload, setUpload] = useState<Boolean>(false);
  const [image, setImage] = useState<string>();
  const { loggedIn, handleLogin } = useUserLoggedIn();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user = "" } = useParams() as { user: string };
  const userDetails = useSelector(selectUser);
   

// previous button
  const prev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(-1);
  };
  // the submit button
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  
   {handleLogin(true)}
   e.preventDefault();
   console.log(user)
   if (loggedIn) {
      navigate((`/${user}/login`), {replace: true});
    }
  };

  return (
    <>
      <div className="container fc-flex gap-5 lg:flex lg:fr-flex lg:pt-20   ">
        <Sidetext
          content="Already have an Account?"
          path="/login"
          login_signup="Login"
        />

        <form className="md:w-[70%] lg:w-[48%]" onSubmit={handleSubmit}>
          {upload && (
            <label className="bg-primary text-backgroundcolor p-3 shadow-md fixed top-10 rounded-md z-20">
              file uploaded!
            </label>
          )}
          <label htmlFor="bvn_input">
            Insert your BVN
            <Visibilityinput name="bvn_input" id="bvn_input" />
          </label>
          Select a payment threshold:
          <select id="payment_threshold">
            <option value="0-20k">0k - 20k</option>
            <option value="20-50k">20k - 50k</option>
            <option value="50-70k">50k - 70k</option>
            <option value="70-100k">70k - 100k</option>
          </select>
          <label htmlFor="nin_front">Insert your NIN</label>
          <label htmlFor="nin_front">
            Front view
            <ImageInput setUpload={setUpload} name="nin_front" id="nin_front" />
          </label>
          <label htmlFor="nin_back">
            Back view
            <ImageInput setUpload={setUpload} name="nin_back" id="nin_back" />
          </label>
          <label htmlFor="profile_image">
            Insert your profile picture
            <input
              type="file"
              accept="image/*"
              name="profile_image"
              id="profile_image"
              hidden
              onChange={({ target: { files } }) => {
                if (files) {
                  const image = URL.createObjectURL(files[0]);
                  setImage( image)
                  dispatch(setUser({...userDetails, picture: image, useramount:0}))
                  setUpload(true);
                  console.log(userDetails)

                  setTimeout(() => {
                    setUpload(false);
                  }, 2000);
                }
             
              }}
              
            />
            <div className="mt-2 h-32 w-32 border-2 border-accent rounded-full relative flex items-center justify-center ">
              <img
                className="object-cover h-full w-full rounded-full "
                src={image}
                alt=""
              />
              <span
                className="
 rounded-full bg-accent text-backgroundcolor w-6 flex items-center justify-center h-6 font-bold absolute bottom-2 right-0"
              >
                +
              </span>
            </div>
          </label>
          <div className="flex justify-between">
            <button onClick={prev}>
              <label className=" text-primary text-right  cursor-pointer text-2xl hover:brightness-200 ">
                <ArrowBackIcon />
                Prev
              </label>
            </button>

            <button className=" text-primary text-right flex ml-auto py-5   cursor-pointer text-2xl hover:brightness-200 " type="submit"><span>Next <ArrowForwardIcon /></span></button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form2;
