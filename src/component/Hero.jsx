import React from "react";
import { SocialLinks } from "../assets/Data";
import HeroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="bg-sky-300" id="Home">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-x-5 sm:flex-row justify-between items-center h-4/5 ">
        <div className="flex flex-col gap-y-8 max-sm:items-center ">
          <p className="text-5xl text-slate-900 ">Hello</p>
          <h1 className="text-7xl text-slate-900 max-sm:text-5xl">
            I'm Vaibhav <span className="text-orange-500">Joshi</span>
          </h1>
          <h3 className="text-3xl text-slate-600">Mechanical Engineer</h3>
          <p className="text-xl text-slate-600 tracking-wider max-w-xl mb-10 max-sm:w-3/4 max-sm:text-center">
            Transforming concept into reality through design, analysis, and
            problem-solving
          </p>

          <div className="flex gap-x-8 text-4xl ">
            {SocialLinks.map((link) => {
              const { id, href, icon } = link;
              return (
                <a
                  className="text-slate-700 hover:text-orange-900 duration:3000 px-2 py-2"
                  key={id}
                  href={href}
                  target="_blank"
                >
                  {icon}
                </a>
              );
            })}
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
