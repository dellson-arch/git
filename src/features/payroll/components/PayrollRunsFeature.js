"use client";

import React, { useState } from "react";
import Card from "@/shared/ui/Card";
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  MoreVertical,
  ArrowRight
} from "lucide-react";
// import { usePayrollRuns } from "../hooks/usePayrollRuns";

export default function PayrollRunsFeature() {
  // Example state for payroll cycles
  const [runs] = useState([
    { id: "RUN-2026-05", month: "May 2026", employees: 42, totalCost: "$184,200.00", status: "In Progress", progress: 65 },
    { id: "RUN-2026-04", month: "April 2026", employees: 40, totalCost: "$178,500.00", status: "Completed", progress: 100 },
    { id: "RUN-2026-03", month: "March 2026", employees: 40, totalCost: "$178,500.00", status: "Completed", progress: 100 },
  ]);

  return (
    <div className="p-8 space-y-6 animate-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Payroll Runs</h1>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
            Execute and monitor salary processing cycles
          </p>
        </div>
        <button className="h-11 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-[11px] font-black uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-200 transition-all active:scale-95">
          <Play size={16} fill="currentColor" /> Start New Run
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {runs.map((run) => (
          <Card key={run.id} className="p-0 border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-6">
                {/* Status Icon */}
                <div className={`p-4 rounded-2xl ${
                  run.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
                }`}>
                  {run.status === 'Completed' ? <CheckCircle2 size={24} /> : <Clock size={24} />}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-slate-800 tracking-tight">{run.month}</h3>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded uppercase">
                      {run.id}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-1">
                    <p className="text-[12px] font-bold text-slate-500 flex items-center gap-1">
                      <Users size={14} /> {run.employees} Employees
                    </p>
                    <p className="text-[12px] font-black text-slate-900">
                      Total: {run.totalCost}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8">
                {/* Progress Bar for Active Runs */}
                {run.status !== 'Completed' && (
                  <div className="w-48 space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter">
                      <span className="text-blue-600">Processing</span>
                      <span className="text-slate-400">{run.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 transition-all duration-1000" 
                        style={{ width: `${run.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <button className="h-10 px-4 border border-slate-200 rounded-lg text-[11px] font-black uppercase text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2">
                    {run.status === 'Completed' ? <RotateCcw size={14} /> : <AlertCircle size={14} />}
                    {run.status === 'Completed' ? 'Rollback' : 'View Details'}
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-600">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Simple helper component if needed
function Users({ size, className }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}