import React from "react";
import { PageLinks } from "../assets/Data";

const Navbar = () => {
  return (
    <nav className="bg-sky-300">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row justify-between">
        <div>
          <h2 className="text-4xl font-bold tracking-wider">
            Vaib<span className="text-orange-500">hav</span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 items-center">
          {PageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="text-xl  text-slate-900 hover:text-orange-900 duration:3000"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
