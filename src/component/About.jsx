import React, { useState } from "react";
import aboutImg from "../assets/about.svg";
import PersonalInfo from "./PersonalInfo";
import Experiance from "./Experiance";
import PageTitle from "./PageTitle";

const About = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className=" bg-white h-screen" id="About">
      <PageTitle text="About Me" />

      <div className="mx-auto max-w-7xl  px-4 mt-10 flex flex-col sm:flex-row gap-x-2  ">
        <div className="flex flex-col gap-y-20 basis-1/2 ">
          <img src={aboutImg} alt="about" className="inline-block h-2/4" />

          <div className="flex flex-col sm:flex-row justify-center gap-x-10  items-center ">
            <button
              className={
                !showInfo
                  ? "bg-sky-300 px-2 py-2 text-slate-900 text-3xl inline-block  rounded-2xl  text-black text-bold"
                  : "bg-sky-300 px-2 py-2 text-slate-900 text-3xl  rounded-2xl inline-block"
              }
              onClick={() => setShowInfo(false)}
            >
              Personal Info
            </button>
            <button
              className={
                showInfo
                  ? "bg-sky-300 px-2 py-2 text-slate-900 text-3xl rounded-2xl  inline-block text-black text-bold"
                  : "bg-sky-300 px-2 py-2 text-slate-900 text-3xl rounded-2xl  inline-block"
              }
              onClick={() => setShowInfo(true)}
            >
              Experiance
            </button>
          </div>
        </div>

        <div className="flex pt-20 basis-1/2">
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
