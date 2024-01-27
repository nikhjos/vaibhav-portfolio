import React, { useState } from "react";
import aboutImg from "../assets/SmallImage.png";

import PageTitle from "./PageTitle";

const About = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [showExp, setShowExp] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  return (
    <section className=" h-screen max-sm:h-max  mb-10" id="About">
      <PageTitle text="About Me" />

      <div className=" about mx-auto max-w-7xl px-4 py-4 h-[80%] flex justify-between max-sm:flex-col max-sm:h-full max-sm:gap-y-10 ">
        <div className="left-about bg-neutral rounded-2xl  h-full  w-[40%]  flex flex-col justify-evenly items-center max-sm:w-full max-sm:gap-y-10 max-sm:py-5">
          <div>
            <img src={aboutImg} alt="image" className="rounded-2xl" />
          </div>

          <div className="btn-container flex justify-between w-[70%]">
            <button
              type="button"
              className={
                showInfo
                  ? "btn btn-accent text-2xl bg-primary rounded-2xl"
                  : "btn btn-accent text-2xl rounded-2xl"
              }
              onClick={() => {
                setShowInfo(true);
                setShowSkills(false);
                setShowExp(false);
              }}
            >
              Info
            </button>
            <button
              type="button"
              className={
                showExp
                  ? "btn btn-accent text-2xl bg-primary rounded-2xl"
                  : "btn btn-accent text-2xl rounded-2xl"
              }
              onClick={() => {
                setShowInfo(false);
                setShowSkills(false);
                setShowExp(true);
              }}
            >
              Exp
            </button>
            <button
              type="button"
              className={
                showSkills
                  ? "btn btn-accent text-2xl bg-primary rounded-2xl"
                  : "btn btn-accent text-2xl rounded-2xl"
              }
              onClick={() => {
                setShowInfo(false);
                setShowSkills(true);
                setShowExp(false);
              }}
            >
              Skills
            </button>
          </div>
        </div>
        <div className="right-about   bg-neutral rounded-2xl text-accent   mx-auto w-[55%] h-full px-5 grid grid-cols-1 place-items-center max-sm:w-full max-sm:py-10 ">
          <div className={showInfo ? "info  w-full" : "hidden"}>
            <p className="text-3xl tracking-wider text-center leading-2 ">
              Hello,
            </p>
            <p className="tracking-wider leading-2 mt-2 text-2xl text-left indent-10">
              I am <b> Vaibhav Rajendra Joshi,</b> born on{" "}
              <b> 17 march 1996.</b> I earn my degree in Mechanical Engineering
              from CSMS Collage. With 5 years of experiance as a Qa Engineers.
              My experties lies in ensuring the precision and quality of Heat
              Treatment processes.
            </p>
          </div>

          <div className={showExp ? "exp   w-full capitalize" : "hidden"}>
            <h2 className="text-4xl text-center mb-5">Experiance</h2>

            <div className=" text-center mx-auto ">
              <h2 className="text-5xl  mb-2 max-sm:text-3xl ">
                Sanjeev auto pvt ltd
              </h2>
              <h4 className="text-2xl tracking-wider  mb-2 max-sm:text-xl max-sm:mb-5">
                from 2018 to present
              </h4>

              <p className=" tracking-wider leading-2 w-[70%] mx-auto max-sm:w-full max-sm:text-justify">
                As a QA engineer , I focus on new development, inventory
                tracking, and ensuring product quality, communicate effectively
                and implement risk mitigation strategied in the supply chain
              </p>
            </div>
          </div>

          <div
            className={
              showSkills ? "skills  flex  justify-between w-full" : "hidden"
            }
          >
            <div className="technical text-center mx-auto w-full">
              <h4 className="text-3xl mb-2">Social</h4>
              <div className=" text-xl mb-5 ">
                <p>Team Leader</p>
                <p>Creativity</p>
                <p>Critical Thinking</p>
                <p>Project Management</p>
              </div>
              <h4 className="text-3xl mb-2">Technical</h4>
              <div className=" text-xl ">
                <p>Quality Assurance</p>
                <p>Computer </p>
                <p>Thermodynamics</p>
                <p>Auto Cad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
