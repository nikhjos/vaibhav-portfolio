import React from "react";

const Experiance = () => {
  return (
    <div className="flex flex-col gap-y-4  text-slate-900 text-3xl min-w-full ">
      <div className="flex flex-col gap-y-5 max-sm:gap-y-2">
        <small className="bg-sky-300 py-1 px-1 rounded-2xl">Company</small>
        <h5 className="  px-1 max-sm:text-xl">Sanjeev Auto Pvt Ltd</h5>
      </div>

      <div className="flex flex-col gap-y-5 max-sm:gap-y-2">
        <small className="bg-sky-300 py-1 px-1 rounded-2xl">Present</small>
        <h5 className="  px-1 max-sm:text-xl ">2016-present</h5>
      </div>

      <div className="flex flex-col gap-y-5 max-sm:gap-y-2 ">
        <small className="bg-sky-300 py-1 px-1 rounded-2xl">Job Progress</small>
        <h5 className=" max-w-xl tracking-wider text-xl px-1 max-sm:text-xl max-sm:tracking-wide  ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          dolores, nulla quod quam nesciunt facilis!
        </h5>
      </div>
    </div>
  );
};

export default Experiance;
