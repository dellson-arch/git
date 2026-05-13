// src/app/recruitment/page.js
import JobBoard from "@/features/recruitment/components/JobBoard";

export default function RecruitmentPage() {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Recruitment</h1>
          <p className="text-xs text-slate-500">Track active job openings and candidate flow</p>
        </div>
        {/* <button className="bg-blue-600 text-white text-[11px] font-bold px-4 py-2 rounded-xl shadow-sm hover:bg-blue-700">
          Create New Job
        </button> */}
      </header>
      
      <JobBoard />
    </div>
  );
}