import React from "react";

const SkillsCard = ({ id, img, title, text }) => {
  return (
    <article className="px-4 py-4 bg-neutral text-accent text-center max-w-md rounded-3xl hover:shadow-2xl hover:scale-105 duration:3000">
      <img src={img} alt="image" className="h-36 w-full mb-7" />
      <h2 className=" text-2xl mb-2">{title} </h2>
      <p className=" text-xl tracking-wider">{text} </p>
    </article>
  );
};

export default SkillsCard;
