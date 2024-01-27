import React from "react";
import { SocialLinks } from "../assets/Data";

const Footer = () => {
  return (
    <footer className="bg-neutral text-accent">
      <div className="flex flex-col gap-y-2 mx-auto max-w-7xl px-4 py-4 justify-center items-center">
        <div className="flex jsutify-center items-center  gap-x-4">
          {SocialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <a
                key={id}
                href={href}
                target="_blank"
                className="text-xl duration:3000"
              >
                {icon}{" "}
              </a>
            );
          })}
        </div>

        <a className="" href="#Contact">
          contact me
        </a>
      </div>
    </footer>
  );
};

export default Footer;
