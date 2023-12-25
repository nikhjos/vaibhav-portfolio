import React from "react";

const Experiance = () => {
  return (
    <div className="flex flex-col gap-y-5  text-slate-900 text-3xl min-w-full">
      <div className="flex flex-col gap-y-5">
        <small className="bg-sky-300 py-2 px-2 rounded-2xl">Company</small>
        <h5 className="  px-2 ">Sanjeev Auto Pvt Ltd</h5>
      </div>

      <div className="flex flex-col gap-y-5">
        <small className="bg-sky-300 py-2 px-2 rounded-2xl">Present</small>
        <h5 className="  px-2 ">2016-present</h5>
      </div>

      <div className="flex flex-col gap-y-5">
        <small className="bg-sky-300 py-2 px-2 rounded-2xl">Job Progress</small>
        <h5 className=" max-w-xl tracking-wider text-xl px-2 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          dolores, nulla quod quam nesciunt facilis!
        </h5>
      </div>
    </div>
  );
};

export default Experiance;
