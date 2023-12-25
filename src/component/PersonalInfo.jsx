import React from "react";

const PersonalInfo = () => {
  return (
    <div className="flex flex-col gap-10 min-w-full">
      <div className="flex flex-row gap-4">
        <h1 className="bg-sky-300 pr-2 text-2xl">Name:</h1>
        <p className="text-3xl">Vaibhav Rajendra Joshi</p>
      </div>

      <div className="flex flex-row gap-4">
        <h1 className="bg-sky-300 pr-2 text-2xl">Dob:</h1>
        <p className="text-3xl">17-03-1996</p>
      </div>

      <div className="flex flex-row gap-4">
        <h1 className="bg-sky-300 pr-2 text-2xl">Education:</h1>
        <p className="text-3xl">B.E.Mechanical</p>
      </div>

      <div className="flex flex-row gap-4">
        <h1 className="bg-sky-300 pr-2 text-2xl">Hobbies:</h1>
        <p className="text-3xl">Watching Movie</p>
      </div>
    </div>
  );
};

export default PersonalInfo;
