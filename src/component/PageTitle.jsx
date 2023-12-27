import React from "react";

const PageTitle = ({ text }) => {
  return (
    <div className="flex max-sm:flex-col justify-center max-sm:items-center pt-10 text-black text-5xl">
      <h2>{text} </h2>
    </div>
  );
};

export default PageTitle;
