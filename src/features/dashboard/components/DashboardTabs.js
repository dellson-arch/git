// src/features/dashboard/components/DashboardTabs.js
"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setActiveTab } from "../redux/dashboardSlice";

const TABS = [
  "ESS DASHBOARD", "ATTENDANCE DASHBOARD", "PAYROLL DASHBOARD", 
  "RECRUITMENT DASHBOARD", "EMPLOYEE MATRIX", "HELP DESK", "ORGANOGRAM"
];

export default function DashboardTabs() {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.dashboard?.activeTab || TABS[0]);

  return (
    <div className="flex border-b border-slate-200 bg-white px-4 overflow-x-auto no-scrollbar">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => dispatch(setActiveTab(tab))}
          className={`px-4 py-3 text-[10px] font-bold tracking-widest transition-all border-b-2 whitespace-nowrap ${
            activeTab === tab 
              ? "border-blue-600 text-blue-600" 
              : "border-transparent text-slate-500 hover:text-slate-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}