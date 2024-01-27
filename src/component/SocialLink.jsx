import React from "react";
import { SocialLinks } from "../assets/Data";

const SocialLink = () => {
  return (
    <div className="flex gap-x-8 text-4xl ">
      {SocialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <a
            className=" hover:text-secondary duration:3000 px-2 py-2"
            key={id}
            href={href}
            target="_blank"
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLink;
