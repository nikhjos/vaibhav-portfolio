import React from "react";
import { PageLinks } from "../assets/Data";
import { FaTimes } from "react-icons/fa";

const Linkbar = ({ showBar, setShowBar }) => {
  return (
    <nav className="bg-sky-500 opacity-1  fixed top-0 right-0 w-2/4 h-lvh max-h-screen  flex justify-center  ">
      <div className="fixed top-4 right-4 text-red-900">
        <button
          type="button"
          onClick={() => setShowBar(!showBar)}
          className="text-4xl"
        >
          {showBar && <FaTimes />}
        </button>
      </div>

      <div className="px-5 py-10 text-xl flex justify-center items-center flex-col gap-y-8">
        {PageLinks.map((link) => {
          const { id, text, href } = link;
          return (
            <article key={id}>
              <a href={href}>{text}</a>
            </article>
          );
        })}
      </div>
    </nav>
  );
};

export default Linkbar;
