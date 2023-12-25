import React from "react";

const PageTitle = ({ text }) => {
  return (
    <div className="flex justify-center pt-10 text-black text-5xl">
      <h2>{text} </h2>
    </div>
  );
};

export default PageTitle;
