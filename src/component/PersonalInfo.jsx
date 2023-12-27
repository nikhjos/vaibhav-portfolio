import React from "react";

const PersonalInfo = () => {
  return (
    <div className="flex flex-col gap-10 min-w-full max-sm:gap-6">
      <div className="flex flex-row gap-4">
        <h1 className="bg-sky-300 pr-2 text-2xl max-sm:text-xl">Name:</h1>
        <p className="text-3xl max-sm:text-2xl">Vaibhav Rajendra Joshi</p>
      </div>

      <div className="flex flex-row gap-4">
        <h1 className="bg-sky-300 pr-2 text-2xl max-sm:text-xl">Dob:</h1>
        <p className="text-3xl max-sm:text-2xl">17-03-1996</p>
      </div>

      <div className="flex flex-row gap-4">
        <h1 className="bg-sky-300 pr-2 text-2x max-sm:text-xl">Education:</h1>
        <p className="text-3xl max-sm:text-2xl">B.E.Mechanical</p>
      </div>

      <div className="flex flex-row gap-4">
        <h1 className="bg-sky-300 pr-2 text-2xl max-sm:text-xl">Hobbies:</h1>
        <p className="text-3xl max-sm:text-2xl">Watching Movie</p>
      </div>
    </div>
  );
};

export default PersonalInfo;
