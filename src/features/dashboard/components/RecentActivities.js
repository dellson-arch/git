// src/features/dashboard/components/RecentActivities.js
"use client";

import { useAppSelector } from "@/hooks/useAppSelector";
import Card from "@/shared/ui/Card";

export default function RecentActivities({ title }) {
  // Pull data from the root store
const recruitmentData = useAppSelector((state) => state.recruitment || state.reducer?.recruitment);
  const employeeData = useAppSelector((state) => state.employees || state.reducer?.employees);
  
  const jobs = recruitmentData?.jobs || [];
  const employees = employeeData?.list || [];
  
  // Logic to show different counts based on which card this is
  const getCount = (label) => {
    switch (label) {
      case "List of Recruit Approvals":
        return jobs.length; // Dynamic recruitment count
      case "List of Employee Approvals":
        return employees.length; // Dynamic employee count
      case "List of Clearance Approvals":
        return 3; // Keep some as mock for now
      default:
        return 0;
    }
  };

  const listItems = [
    "List of Recruit Approvals",
    "List of Employee Approvals",
    "List of Clearance Approvals",
    "List of Attendance Approvals"
  ];

  return (
    <Card className="p-4 border-slate-200/60 shadow-sm">
      <div className="flex items-center gap-2 mb-4 border-b border-slate-50 pb-2">
        <div className="w-1.5 h-4 bg-blue-600 rounded-full" />
        <h3 className="text-[10px] font-black uppercase text-slate-800 tracking-wider">{title}</h3>
      </div>
      
      <ul className="space-y-4">
        {listItems.map((item) => (
          <li key={item} className="flex justify-between items-center group">
            <span className="text-[11px] text-slate-500 group-hover:text-slate-800 transition-colors">
              {item}
            </span>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
              getCount(item) > 0 ? "text-blue-600 bg-blue-50" : "text-slate-300"
            }`}>
              {getCount(item)}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}