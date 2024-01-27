import React from "react";

import HeroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className=" mt-10  " id="Home">
      <div className="mx-auto max-w-7xl px-4 py-8 bg-neutral text-accent rounded-xl flex flex-col gap-x-5 sm:flex-row justify-between items-center h-4/5 max-sm:mx-5 ">
        <div className="flex flex-col  max-sm:items-center ">
          <p className="text-5xl mb-5 max-sm:text-4xl max-sm:mb-3 ">Hello</p>
          <h1 className="text-7xl mb-5 text-center max-sm:text-5xl max-sm:mb-2">
            I'm Vaibhav <span className="text-accent">Joshi</span>
          </h1>
          <h3 className="text-3xl mb-5 tracking-widest leading-3 max-sm:text-3xl max-sm:mb-3">
            Mechanical Engineer
          </h3>
          <p className="text-xl tracking-wider max-w-xl mb-10 max-sm:w-3/4 max-sm:text-center max-sm:text-1xl">
            Transforming concept into reality through design, analysis, and
            problem-solving
          </p>

          <div className="btn-container flex  justify-start gap-x-10">
            <button
              type="button"
              className="btn btn-accent text-2xl max-sm:text-xl"
            >
              Download Cv
            </button>
            <button
              type="button"
              className="btn btn-accent text-2xl max-sm:text-xl"
            >
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
