import React, { useState } from "react";
import { PageLinks } from "../assets/Data";
import { FaBars, FaTimes } from "react-icons/fa";
import Linkbar from "./Linkbar";

const Navbar = () => {
  const [showBar, setShowBar] = useState(false);
  return (
    <nav className="bg-neutral text-accent">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-row sm:flex-row justify-between">
        <div>
          <h2 className="text-4xl font-bold tracking-wider">
            Vaib<span className="text-accent">hav</span>
          </h2>
        </div>

        <div className="bg-transpatent text-2xl sm:hidden">
          <button type="button" onClick={() => setShowBar(!showBar)}>
            {showBar ? "" : <FaBars />}
          </button>

          <div className={showBar ? "active" : " hidden"}>
            <Linkbar showBar={showBar} setShowBar={setShowBar} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 items-center max-sm:hidden">
          {PageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="text-xl  hover:text-secondary duration:3000"
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
