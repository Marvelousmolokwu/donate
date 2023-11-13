import { Link } from "react-router-dom";

export const HomeModal = () => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center ">
        <h3 className="lg:text-3xl" >Choose your account type</h3>

        <div className="flex flex-col lg:flex-row text-center gap-4">
          <div>
            <Link to="/user/form1" className="hover:before:w-0">
              <div className="flex items-center justify-center px-6 py-4 bg-secondary ">
                <img
                  src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1693576100/Currency-rafiki_k4y81t.svg"
                  alt=""
                  className="w-[100px] lg:w-[150px]"
                 
                />
              </div>
              <div className="bg-kit p-2">
                <h3 className="text-primary">Donor</h3>
              </div>
            </Link>
          </div>

          <Link to="/user/form1" className="hover:before:w-0">
            <div className="flex items-center justify-center   px-6 py-4 bg-secondary">
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1693576100/Authentication-bro_yobvrn.svg"
                alt=""
                width={"150px"}
                className="w-[100px] lg:w-[150px]"
           
              />
            </div>
            <div className="bg-kit">
              <h3 className="text-primary p-2">User</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
