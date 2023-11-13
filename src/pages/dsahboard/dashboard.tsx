import { Button } from "../../components/button/Button";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useState } from "react";
import { Viewmodal } from "./view-modal";
import { useModal } from "../../hooks/useModal";
import { UserProfile } from "../../components/dashboard-components/user-profile";
import { Charts } from "../../components/dashboard-components/charts";
import { Accordion } from "../../components/accordion/Accordion";

import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userslice';

export const Dashboard = () => {
  const [visible, setVisible] = useState(true);

  const { ModalComp, ShowModal } = useModal();
  const user = useSelector(selectUser);

  return (
    <>
      <main className="container lg:max-w-[85%]">
        <h1 className="font-semibold text-accent">Hello {user.name}</h1>

        <section className="lg:grid lg:grid-cols-4 lg:gap-4 lg:grid-rows-2 lg:place-items-start place-content-between">
          {/* the balance card */}
          <div className="lg:col-start-1  row-start-1 w-full">
            {" "}
            <div className="flex flex-col gap-3 shadow-md p-6 rounded-md text-left my-5 bg-kit  ">
              <div className="flex justify-between items-center  ">
                <h1 className="text-lg font-semibold">Balance</h1>
                <Button
                  content="Payout"
                  handleClick={() => {}}
                  btnClasses="text-backgroundcolor bg-primary"
                />
              </div>
              <div className=" flex justify-between">
                <div
                  className={`flex flex-col gap-2  ${
                    visible ? "blur-none" : "blur-md"
                  }`}
                >
                  <h2>$0.00</h2>

                  <p className="text-sm font-semibold text-green">
                    <span className="bg-green p-1 rounded-md h-3 text-backgroundcolor mr-2 ">
                      Up
                    </span>
                    <span>$0.00</span> Today
                  </p>
                </div>

                <button
                  className="self-end"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? (
                    <VisibilityOffIcon fontSize="small" />
                  ) : (
                    <VisibilityIcon fontSize="small" />
                  )}{" "}
                </button>
              </div>
            </div>
            {/* link to see how many donors viewed your profile */}
            <div className="my-5  ">
              <button
                className="underline text-accent text-left"
                onClick={ShowModal}
              >
                See how many donors looked at your Profile
              </button>
              {ModalComp(<Viewmodal />)}
            </div>
          </div>
          {/* charts */}

          <div className="card-styles  d-flex flex-col gap-5  lg:col-start-2 lg:col-span-2 lg:row-start-1 w-full">
            <Charts />
          </div>
          {/* tab to see your donations */}
          <div className="card-styles p-1  w-full  lg:col-start-4 lg:col-span-1">
            <Accordion
              heading="Donations"
              content="You haven't made any donations yet!"
            />
          </div>
{/* user profile */}
          <div className=" card-styles flex flex-col items-center gap-6 w-full relative lg:col-start-4 lg:col-span-1 lg:row-start-1 ">
            <UserProfile picture={user.picture}/>
          </div>
          {/* list of top donors */}
          <div className="lg:col-start-2 lg:col-span-2 lg:row-start-2 w-full">
            <h2>Top Donors</h2>
          </div>
        </section>
      </main>
    </>
  );
};
