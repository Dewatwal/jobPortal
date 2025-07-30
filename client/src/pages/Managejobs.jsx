import React from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Managejobs = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Manage Jobs</h2>

      <div className="overflow-x-auto rounded-lg shadow-sm">
        <table className="min-w-full bg-white border border-gray-200 text-sm sm:text-base">
          <thead className="bg-gray-100 text-gray-700 font-medium">
            <tr>
              <th className="py-3 px-4 border-b max-sm:hidden text-left">#</th>
              <th className="py-3 px-4 border-b text-left">Job Title</th>
              <th className="py-3 px-4 border-b max-sm:hidden text-left">Date</th>
              <th className="py-3 px-4 border-b text-left">Location</th>
              <th className="py-3 px-4 border-b text-center">Applicants</th>
              <th className="py-3 px-4 border-b text-center">Visible</th>
            </tr>
          </thead>

          <tbody>
            {manageJobsData.map((job, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 text-gray-800 transition"
              >
                <td className="py-3 px-4 border-b max-sm:hidden">{index + 1}</td>
                <td className="py-3 px-4 border-b">{job.title}</td>
                <td className="py-3 px-4 border-b max-sm:hidden">
                  {moment(job.date).format("ll")}
                </td>
                <td className="py-3 px-4 border-b">{job.location}</td>
                <td className="py-3 px-4 border-b text-center">{job.applicants}</td>
                <td className="py-3 px-4 border-b text-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                    checked={job.visible}
                    onChange={() => {
                      // Optionally toggle visibility
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
      <button onClick={()=>navigate('/dashboard/add-job')} className="bg-black text-white py-2 px-4 rounded hover:bg-gray-900">
        Add New Job
      </button>
      </div>
    </div>
  );
};

export default Managejobs;
