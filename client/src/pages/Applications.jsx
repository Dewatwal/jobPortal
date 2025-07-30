import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";
const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);
  return (
<>
  <Navbar />

  <div className="w-full px-4 mt-10">
    <div className="max-w-[600px] flex flex-col items-start">
      <h2 className="text-2xl font-semibold mb-6">Your Resume</h2>

      <div className="flex flex-col sm:flex-row gap-4 items-start">
        {isEdit ? (
          <>
            <label
              htmlFor="resumeUpload"
              className="flex flex-col items-center cursor-pointer border border-gray-300 rounded-lg p-4 hover:bg-gray-100 transition"
            >
              <p className="mb-2 font-medium text-gray-700">Select Resume</p>
              <input
                onChange={(e) => setResume(e.target.files[0])}
                accept="application/pdf"
                type="file"
                id="resumeUpload"
                className="hidden"
              />
              <img
                src={assets.profile_upload_icon}
                alt="Upload icon"
                className="w-10 h-10"
              />
            </label>

            <button onClick={()=>setIsEdit(false)} className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
              Save
            </button>
          </>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href=""
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 border hover:border-blue-900 transition"
            >
              Resume
            </a>
            <button
              onClick={() => setIsEdit(true)}
              className="text-gray-800 border border-gray-700 rounded-lg px-5 py-2 hover:bg-gray-100 transition"
            >
              Edit
            </button>
          </div>
        )}
      </div>
     <h2 className="text-xl font-semibold mb-4 mt-6">Jobs Applied</h2>

<div className="w-full overflow-x-auto">
  <table className="w-full bg-white border border-gray-300 rounded-lg">
    <thead className="bg-gray-100 text-gray-700 text-sm">
      <tr>
        <th className="py-3 px-4 border-b text-left">Company</th>
        <th className="py-3 px-4 border-b text-left">Job Title</th>
        <th className="py-3 px-4 border-b text-left max-sm:hidden">Location</th>
        <th className="py-3 px-4 border-b text-left max-sm:hidden">Date</th>
        <th className="py-3 px-4 border-b text-left">Status</th>
      </tr>
    </thead>

    <tbody>
      {jobsApplied.map((job, index) => (
        <tr key={index} className="text-sm text-gray-800 hover:bg-gray-50 transition">
          <td className="py-3 px-4 border-b align-middle">
            <div className="flex items-center gap-2">
              <img className="w-8 h-8 object-contain" src={job.logo} alt="Logo" />
              <span>{job.company}</span>
            </div>
          </td>
          <td className="py-3 px-4 border-b align-middle">{job.title}</td>
          <td className="py-3 px-4 border-b align-middle max-sm:hidden">{job.location}</td>
          <td className="py-3 px-4 border-b align-middle max-sm:hidden">
            {moment(job.date).format('ll')}
          </td>
          <td className="py-3 px-4 border-b align-middle">
            <span className={`${job.status==="Accepted"?'bg-green-300':job.status==="Rejected" ?'bg-red-300':'bg-blue-300'} px-4 py-1.5 rounded`}> {job.status}</span>
           </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
  </div>
  <Footer/>
</>


  );
};

export default Applications;
