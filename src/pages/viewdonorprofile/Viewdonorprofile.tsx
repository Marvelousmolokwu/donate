import { useParams, Link } from "react-router-dom";
import { ParagraphText } from "../../components/text/Text";
import { Swiper, SwiperSlide } from "swiper/react";
import donor from "../../data/donors.json";
import "swiper/css/navigation";

import { SwiperButton } from "../../components/dashboard-components/swiperButton";
import { ProfileSkeleton } from "../../components/loader/profileSkeleton";
import { useEffect, useState } from "react";


interface Donor {
  id: string;
  name: string;

  donations: number;
  email: string;
  img: string;
  description: string;
}
export const Viewdonorprofile = () => {
  const { id } = useParams() as { id: string };
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Donor | null>(null);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) with a setTimeout
    const fetchData = async () => {
      // Fetch the data (replace this with your actual data fetching logic)
      const selectedDonor: Donor | undefined = donor.find(
        (donor) => donor.id === id
      );

      // Simulate a delay of 5 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Update the state with the fetched data
      setData(selectedDonor ?? null);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="container ">
     <ProfileSkeleton/>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="grid h-40 place-content-center text-accent ">
        <h1>Donor not found!</h1>
      </div>
    );
  }
  const otherDonors = donor.filter((donor) => donor.id !== id);
  return (
    <>
   
      <section className="container">
  
        <section className="lg:mt-16">
          <div className="flex flex-col justify-center  lg:flex-row lg:justify-start lg:items-center lg:gap-5">
            <div className="bg-center  bg-no-repeat h-32 w-32 lg:w-40 lg:h-40 rounded-full bg-kit border-4 border-accent bg-profile ">
              <img
                src={data.img}
                alt=""
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <h2>{data.name}</h2>
              <p>{data.email}</p>
              <p>Given over ${data.donations} worth of donation</p>
             
            </div>
          </div>

          <ParagraphText content={data.description} />
        </section>
        <section className="text-accent mt-10">
          <h2>More Donors</h2>
          <ul className="mt-5">
            <Swiper
              spaceBetween={20}
              loop={true}
              slidesPerView={3}
              breakpoints={{
                640: { slidesPerView: 3 },

                800: { slidesPerView: 5 },
              }}
              
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {otherDonors.map((donor) => (
                
                <li key={donor.id}>
              
                  <SwiperSlide>
                  <Link to={`/user/donorprofile/${donor.id}` } onClick={()=> window.location.reload()}>
                    <div className="shadow-md rounded-md my-2 p-5 flex flex-col items-center h-[12rem] text-center gap-3">
                      <div className="bg-center  bg-no-repeat h-20 w-20 rounded-full bg-kit border-4 border-accent bg-profile ">
                        <img
                          src={donor.img}
                          alt=""
                          className="h-full w-full rounded-full"
                        />
                      </div>
                      <h3>{donor.name}</h3>
                      
                    </div>
                    </Link>
                  </SwiperSlide>
                
                </li>
              ))}
               <SwiperButton />
            </Swiper>
          </ul>
        </section>
      </section>
    </>
  );
};
