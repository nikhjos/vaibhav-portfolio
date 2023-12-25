import React from "react";
import { Skill } from "../assets/Data";
import SkillsCard from "./SkillsCard";
import PageTitle from "./PageTitle";

const Skills = () => {
  return (
    <section className="bg-sky-300" id="Skills">
      <PageTitle text="Skills" />
      <div className="mx-auto max-w-7xl px-4 py-10  grid grid-cols-1 sm:grid-cols-3 gap-12 ">
        {Skill.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
