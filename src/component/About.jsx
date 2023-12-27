import React, { useState } from "react";
import aboutImg from "../assets/SmallImage.png";
import PersonalInfo from "./PersonalInfo";
import Experiance from "./Experiance";
import PageTitle from "./PageTitle";

const About = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className=" bg-white h-screen mb-20" id="About">
      <PageTitle text="About Me" />

      <div className="mx-auto max-w-7xl  px-4 sm:mt-20  flex justify-center gap-x-20 py-10 max-sm:flex-col  sm:flex-row  mb-10 ">
        <div className=" flex justify-center items-center gap-y-16 flex-col   max-sm:gap-y-8  ">
          <div>
            <img
              src={aboutImg}
              alt="about"
              className="inline-block  h-96  max-sm:h-44 rounded-2xl bg-sky-300 object-cover object-center"
            />
          </div>
          <div className="flex  sm:flex-row justify-center gap-x-10  items-center ">
            <button
              className={
                !showInfo
                  ? "border-2 border-sky-500 bg-sky-300 px-2 py-2 text-slate-900 text-3xl inline-block  rounded-2xl  text-black text-bold  hover:bg-sky-300 duration:200  max-sm:text-xl  "
                  : " px-2 py-2 text-slate-900 text-3xl  rounded-2xl inline-block  hover:bg-sky-300 duration:200 max-sm:text-xl"
              }
              onClick={() => setShowInfo(false)}
            >
              Personal Info
            </button>
            <button
              className={
                showInfo
                  ? "border-2 border-sky-500  bg-sky-300 px-2 py-2 text-slate-900 text-3xl rounded-2xl  inline-block text-black text-bold hover:bg-sky-300 duration:200 max-sm:text-xl"
                  : " px-2 py-2 text-slate-900 text-3xl rounded-2xl  inline-block hover:bg-sky-300 duration:200 max-sm:text-xl"
              }
              onClick={() => setShowInfo(true)}
            >
              Experiance
            </button>
          </div>
        </div>

        <div className="flex  sm:pt-15 sm:basis-1/2  max-sm:h-screen max-sm:pt-10 max-sm:flex-col max-sm:h-fit max-sm:mb-10 ">
          {!showInfo ? (
            <PersonalInfo showInfo={showInfo} />
          ) : (
            <Experiance showExp={showInfo} />
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
