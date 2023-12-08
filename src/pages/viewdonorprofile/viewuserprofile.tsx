import { useParams, Link } from "react-router-dom";
import { ParagraphText } from "../../components/text/Text";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import user from "../../data/user.json";
import { SwiperButton } from "../../components/dashboard-components/swiperButton";
import { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { UserSearch } from "../../components/search/usersearch";
import { Button } from "../../components/button/Button";
import { useModal } from "../../hooks/useModal";
import { DonorBill } from "../../components/dashboard-components/donorBill";
import { ProfileSkeleton } from "../../components/loader/profileSkeleton";

interface User {
  id: string;
  name: string;
  img: string;
  about: string;
  history: string;
  outreach: string;
}

export const Viewuserprofile = () => {
  const { id } = useParams() as { id: string };
  
  const [opennav, setOpennav] = useState(false);
  const {ShowModal, ModalComp} = useModal()
  const [loading, setLoading] = useState(true);
  const [matchedUser, setMatchedUser] = useState<User | undefined>(undefined);
  const [selectedUserId, setSelectedUserId] = useState("you didn't select a user");
  useEffect(() => {
    // Simulate a delay of 2 seconds before loading data
    const delay = setTimeout(() => {
      const user = findUserById(id);
      setMatchedUser(user);
      setLoading(false);
    }, 2000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, [id]);

  if (loading) {
    return <div className="container"><ProfileSkeleton/></div>;
  }

  const handleDonateButtonClick = (userId: string) => {
    setSelectedUserId(userId);
  };


  if (!matchedUser) {
    return <p>User not found</p>;
  }

  return (
    <>
     {ModalComp(<DonorBill name={selectedUserId}/>)}
    <Navbar opennav={opennav} setOpennav={setOpennav} homelink={"/donor/donordashboard"} search={<UserSearch />} explorelink={"/donor/explore"} helplink={"/donor/help"} accountlink={"/donor/donoraccounts/profile"}/>
    <main  onClick={()=>setOpennav(false)}>
    <div className="h-20"></div>
      <section className="container lg:mt-16">
        <section>
          <div className="flex flex-col justify-center  lg:flex-row lg:justify-start lg:items-center lg:gap-5">
            <div className="bg-center  bg-no-repeat h-32 w-32 lg:w-40 lg:h-40 rounded-full bg-kit border-4 border-accent bg-profile ">
              <img src={matchedUser.img} alt="" className="h-full w-full rounded-full" />
            </div>
            <div className="flex flex-col gap-1 ">
              <h2>{matchedUser.name}</h2>
              <Button content="Donate" btnClasses="bg-primary text-backgroundcolor my-3 w-[40%] lg:w-[60%] " handleClick={()=>{
                    ShowModal()
                    handleDonateButtonClick(matchedUser.name);
                   }}/>
            </div>
          </div>
          <ParagraphText content={matchedUser.about} />
        </section>
        <section className="text-accent mt-10">
          <h2>Donate to more Users</h2>
          <ul className="mt-5">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                640: { slidesPerView: 3 },
                800: { slidesPerView: 5 },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {user.map((section) => {
                 if (section.orphanage) {
                    return section.orphanage.map((orphanage) => (
                      <li key={orphanage.id}>
                        <SwiperSlide>
                          <Link to={`/donordashboardprofile/${orphanage.id}`} >
                          <div className="shadow-md rounded-md my-2 p-5 flex flex-col items-center h-[12rem] text-center gap-3">
                              <div className="bg-center bg-no-repeat h-20 w-20 rounded-full bg-kit border-4 border-accent bg-profile">
                                <img src={orphanage.img} alt="" className="h-full w-full rounded-full" />
                              </div>
                              <h3 className="text-sm">{orphanage.name}</h3>
                            </div>
                          </Link>
                        </SwiperSlide>
                      </li>
                    ));
                  }
                else if (section.NGO) {
                    
                  return section.NGO.map((ngo) => (
                    <li key={ngo.id}>
                      <SwiperSlide>
                        <Link to={`/donordashboardprofile/${ngo.id}`}>
                          <div className="shadow-md rounded-md my-2 p-5 flex flex-col items-center h-[12rem] text-center gap-3">
                            <div className="bg-center bg-no-repeat h-20 w-20 rounded-full bg-kit border-4 border-accent bg-profile">
                              <img src={ngo.img} alt="" className="h-full w-full rounded-full" />
                            </div>
                            <h3 className="text-sm">{ngo.name}</h3>
                          </div>
                        </Link>
                      </SwiperSlide>
                    </li>
                  ));
                }  else if (section.others) {
                  return section.others.map((other) => (
                    <li key={other.id}>
                      <SwiperSlide>
                        <Link to={`/donordashboardprofile/${other.id}`}>
                        <div className="shadow-md rounded-md my-2 p-5 flex flex-col items-center h-[12rem] text-center gap-3">
                            <div className="bg-center bg-no-repeat h-20 w-20 rounded-full bg-kit border-4 border-accent bg-profile">
                              <img src={other.img} alt="" className="h-full w-full rounded-full" />
                            </div>
                            <h3 className="text-sm">{other.name}</h3>
                          </div>
                        </Link>
                      </SwiperSlide>
                    </li>
                  ));
                }
                return null; // Handle other cases if needed
              })}
              <SwiperButton />
            </Swiper>
          </ul>
        </section>
      </section>
      </main>
    </>
  );
};

// Helper function to find a user by ID
const findUserById = (userId: string): User | undefined => {
  for (const section of user) {
    if (section.NGO) {
      const foundUser = section.NGO.find((ngo) => ngo.id === userId);
      if (foundUser) return foundUser;
    }
    else if (section.orphanage) {
        const foundUser = section.orphanage.find((orphanage) => orphanage.id === userId);
        if (foundUser) return foundUser;
      }
      else if (section.others) {
        const foundUser = section.others.find((other) => other.id === userId);
        if (foundUser) return foundUser;
      }
    
  }
  return undefined;
};
