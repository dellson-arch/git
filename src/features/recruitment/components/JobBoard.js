// src/features/recruitment/components/RecruitmentManager.js
"use client";
 
import { useAppSelector } from "@/hooks/useAppSelector";
import { addJob, deleteJob } from "../redux/recruitmentSlice";
import Card from "@/shared/ui/Card";
import { useAppDispatch } from "@/hooks/useAppDispatch";

export default function RecruitmentManager() {
  const dispatch = useAppDispatch();
  const recruitmentData = useAppSelector((state) => state.reducer?.recruitment);
  const jobs = recruitmentData?.jobs || [];

  const handleHRInput = () => {
    // In a real app, this would be a shadcn/ui Modal/Form
    const title = prompt("Job Title (e.g., Senior React Developer):");
    const department = prompt("Department (e.g., Engineering):");

    if (title && department) {
      dispatch(addJob({ title, department }));
    }
  };

  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
        <div>
          <h2 className="text-sm font-bold text-blue-900">Active Recruitment</h2>
          <p className="text-[10px] text-slate-500">Manage your organization's job openings</p>
        </div>
        <button 
          onClick={handleHRInput}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-blue-700 transition-all"
        >
          + Create New Job
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase">Role</th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase">Dept.</th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase text-center">Applicants</th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase">Status</th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <tr key={job.id} className="hover:bg-slate-50/30 transition-colors">
                  <td className="px-6 py-4 text-xs font-bold text-slate-700">{job.title}</td>
                  <td className="px-6 py-4 text-xs text-slate-600">{job.department}</td>
                  <td className="px-6 py-4 text-xs text-slate-600 text-center">
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-mono">
                      {job.applicants}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[9px] font-bold border border-emerald-100">
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => dispatch(deleteJob(job.id))}
                      className="text-red-500 hover:text-red-700 text-[10px] font-bold"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center text-xs text-slate-400">
                  No active job posts. Use the button above to recruit.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}