import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";

const Addjob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Banglore");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Beginner Level");
  const [salary, setSalary] = useState(0);
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  useEffect(() => {
    // intiate quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);
  return (
    <form
      className="container p-4 flex flex-col w-full items-start gap-3 "
      action=""
    >
      <div className="w-full">
        <p className="mb-2"> Job Title</p>
        <input
          type="text"
          placeholder="Type Here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
        />
      </div>
      <div className="ww-full max-w-lg">
        <p className="my-2">Job Description</p>
        <div ref={editorRef}></div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6">
        {/* Job Category */}
        <div className="w-full sm:w-1/3">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="jobCategory"
          >
            Job Category
          </label>
          <select
            id="jobCategory"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setCategory(e.target.value)}
          >
            {JobCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Job Location */}
        <div className="w-full sm:w-1/3">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="jobLocation"
          >
            Job Location
          </label>
          <select
            id="jobLocation"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setLocation(e.target.value)}
          >
            {JobLocations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Job Level */}
        <div className="w-full sm:w-1/3">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="jobLevel"
          >
            Job Level
          </label>
          <select
            id="jobLevel"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setCategory(e.target.value)} 
          >
            <option value="Beginner Level">Beginner Level</option>
            <option value="Intermediate Level">Intermediate Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>
        </div>
      </div>

      <div>
        <p className="mb-2">Salary</p>
        <input className="w-full px-3 py-2 border-2 border-gray-500 rounded sm:w-[120px]"
          onChange={(e) => setSalary(e.target.value)}
          type="Number"
          placeholder="25000"
          min={0}
        />
      </div>
      <button className="w-28 py-3 mt-4 bg-black text-white rounded-2xl">Add</button>
    </form>
  );
};

export default Addjob;
