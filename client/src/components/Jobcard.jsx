import React from "react";
import { assets } from "../assets/assets";

const Jobcard = ({ job }) => {
  return (
    <div className="border p-6 shadow rounded hover:border-gray-400">
      <div className="flex justify-between items-center">
        <img className="h-8" src={assets.company_icon} alt="" />
      </div>
      <h4 className="font-medium text-xl mt-2">{job.title}</h4>
      <div className="flex items-center gap-3 mt-2 text-xs">
        <span className="bg-blue-100 border border-blue-300 px-4 py-1.5 rounded hover:border-blue-400 ">
          {job.location}
        </span>
        <span className="bg-red-100 border border-red-300 px-4 py-1.5 rounded hover:border-red-400 ">
          {job.level}
        </span>
      </div>
      <p
        className="text-gray-500 text-sm mt-4"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>
      <div className="mt-4 flex gap-4 text-sm">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer border hover:border-blue-700">
          Apply Now
        </button>
        <button className="text-gray-500 border border-gray-500 rounded px-4 py-2  hover:cursor-pointer hover:border-gray-700">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Jobcard;
