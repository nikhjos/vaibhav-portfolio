import React from "react";

import HeroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className=" mt-10  " id="Home">
      <div className="mx-auto max-w-7xl px-4 py-4 bg-neutral text-accent rounded-xl flex flex-col gap-x-5 sm:flex-row justify-between items-center h-4/5 ">
        <div className="flex flex-col gap-y-8 max-sm:items-center ">
          <p className="text-5xl ">Hello</p>
          <h1 className="text-7xl  max-sm:text-5xl">
            I'm Vaibhav <span className="text-accent">Joshi</span>
          </h1>
          <h3 className="text-3xl  tracking-widest leading-3">
            Mechanical Engineer
          </h3>
          <p className="text-xl tracking-wider max-w-xl mb-10 max-sm:w-3/4 max-sm:text-center">
            Transforming concept into reality through design, analysis, and
            problem-solving
          </p>

          <div className="btn-container flex  justify-start gap-x-10">
            <button type="button" className="btn btn-accent text-2xl">
              Download Cv
            </button>
            <button type="button" className="btn btn-accent text-2xl">
              <a href="#Contact">Contact Me</a>
            </button>
          </div>
        </div>

        <div>
          <img src={HeroImg} alt="hero" className="h-full max-sm:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
