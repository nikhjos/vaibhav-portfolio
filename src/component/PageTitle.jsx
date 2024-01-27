import React from "react";

const PageTitle = ({ text }) => {
  return (
    <div className="flex max-sm:flex-col justify-center max-sm:items-center pt-10  text-5xl mb-5 underline underline-offset-8 font-bold">
      <h2>{text} </h2>
    </div>
  );
};

export default PageTitle;
