"use client";

import React, { useState } from "react";
import Card from "@/shared/ui/Card";
import { 
  Search, 
  Download, 
  Eye, 
  Filter, 
  FileText, 
  Calendar,
  MoreHorizontal
} from "lucide-react";
// Import your feature-specific hooks and redux selectors here
// import { usePayslips } from "../hooks/usePayslips";

export default function PayslipsFeature() {
  // Example state - in production, this would come from your Redux store via useAppSelector
  const [payslips] = useState([
    { id: "PS-9921", employee: "Darlene Robertson", period: "May 2026", amount: "$5,200.00", status: "Generated", date: "2026-05-01" },
    { id: "PS-9920", employee: "Marvin McKinney", period: "May 2026", amount: "$6,150.00", status: "Sent", date: "2026-05-01" },
    { id: "PS-9919", employee: "Eleanor Pena", period: "May 2026", amount: "$7,800.00", status: "Generated", date: "2026-05-01" },
  ]);

  return (
    <div className="p-8 space-y-6 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Payslips</h1>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
            Generate and manage employee salary statements
          </p>
        </div>
        <div className="flex gap-3">
           <button className="h-11 px-6 bg-slate-100 text-slate-600 rounded-xl text-[11px] font-black uppercase tracking-wider flex items-center gap-2 hover:bg-slate-200 transition-all">
            <Calendar size={16} /> Bulk Generate
          </button>
          <button className="h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[11px] font-black uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-blue-200 transition-all active:scale-95">
            <FileText size={16} /> New Payslip
          </button>
        </div>
      </div>

      <Card className="p-0 border-slate-100 shadow-xl bg-white overflow-hidden">
        {/* Search & Utility Bar */}
        <div className="p-6 border-b border-slate-50 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search by ID or employee name..." 
              className="w-full h-[46px] pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-2xl text-[13px] font-bold outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"
            />
          </div>
          <div className="flex items-center gap-2">
             <button className="p-3 bg-slate-50 text-slate-500 rounded-xl hover:bg-slate-100 border border-slate-200 transition-colors">
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Slip ID</th>
                <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Employee</th>
                <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Pay Period</th>
                <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Net Salary</th>
                <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Status</th>
                <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {payslips.map((slip) => (
                <tr key={slip.id} className="hover:bg-slate-50/50 transition-all group">
                  <td className="p-5 text-[12px] font-black text-blue-600 tracking-tighter">{slip.id}</td>
                  <td className="p-5">
                    <span className="text-[13px] font-bold text-slate-800">{slip.employee}</span>
                  </td>
                  <td className="p-5">
                    <span className="text-[12px] font-bold text-slate-500">{slip.period}</span>
                  </td>
                  <td className="p-5">
                    <span className="text-[13px] font-black text-slate-900">{slip.amount}</span>
                  </td>
                  <td className="p-5">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
                      slip.status === 'Sent' 
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                        : 'bg-amber-50 text-amber-600 border-amber-100'
                    }`}>
                      {slip.status}
                    </span>
                  </td>
                  <td className="p-5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 hover:bg-slate-100 text-slate-600 rounded-lg transition-colors">
                        <Download size={16} />
                      </button>
                      <button className="p-2 hover:bg-slate-100 text-slate-400 rounded-lg transition-colors">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}