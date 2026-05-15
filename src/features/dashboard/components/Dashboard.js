// src/features/dashboard/components/Dashboard.js
"use client";

import DashboardCards from "./DashboardCards";
import RecentActivities from "./RecentActivities";
import AttendanceSummary from "./AttendanceSummary";
import { RefreshCcw } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">Dashboard</h2>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Real-time HR Analytics</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-xl text-[10px] font-black uppercase text-slate-600 hover:shadow-sm transition-all">
          <RefreshCcw size={14} /> Refresh
        </button>
      </div>

      {/* Stats Section */}
      <DashboardCards />

      {/* Main Grid: Lists and Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentActivities />
        <AttendanceSummary />
      </div>
    </div>
  );
}