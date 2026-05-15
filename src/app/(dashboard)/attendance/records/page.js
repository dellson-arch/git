"use client";

import PageHeader from "@/shared/ui/PageHeader";
import Card from "@/shared/ui/Card";
import { Search, Plus, Filter, RotateCcw } from "lucide-react";

/**
 * AttendanceRecords Component
 * Resolved: Horizontal body overflow and alignment issues.
 */
export default function AttendanceRecords() {
  const controlHeight = "h-[42px]";

  return (
    <div className="max-w-full overflow-hidden animate-in fade-in duration-500 space-y-6">
      <PageHeader title="Attendance Records">
        <button className="bg-[#10b981] hover:bg-[#059669] text-white h-10 w-10 rounded-xl shadow-lg shadow-emerald-100 flex items-center justify-center transition-all active:scale-95">
          <Plus size={18} strokeWidth={3} />
        </button>
      </PageHeader>

      {/* FILTER SECTION */}
      <Card className="p-6 border-slate-100 shadow-sm">
        <div className="flex flex-col gap-5">
          
          {/* Row 1: Search & Action Buttons */}
          <div className="flex items-center gap-3">
            <div className={`relative flex-1 ${controlHeight}`}>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
              <input 
                type="text" 
                placeholder="Search by Employee Name or ID..." 
                className="w-full h-full pl-11 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-[11px] font-bold text-slate-600 outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-inner" 
              />
            </div>
            <button className={`${controlHeight} px-6 bg-[#10b981] text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#059669] transition-all flex-shrink-0 shadow-sm`}>
              <Search size={14} strokeWidth={3} /> SEARCH
            </button>
            <button className={`${controlHeight} px-6 bg-[#f43f5e] text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#e11d48] transition-all flex-shrink-0 shadow-sm`}>
              <Filter size={14} strokeWidth={3} /> HIDE FILTERS
            </button>
          </div>

          {/* Row 2: Selectors & Apply Actions */}
          <div className="flex items-end gap-3 w-full">
            {['EMPLOYEE', 'MONTH', 'YEAR'].map((label) => (
              <div key={label} className="flex-1 flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 leading-none">{label}</label>
                <select className={`w-full ${controlHeight} px-4 bg-white border border-slate-200 rounded-xl text-[11px] font-bold text-slate-700 outline-none cursor-pointer hover:border-slate-300 transition-all shadow-sm`}>
                  <option>All {label.charAt(0) + label.slice(1).toLowerCase()}s</option>
                </select>
              </div>
            ))}
            
            <div className="flex items-center gap-2">
              <button className={`${controlHeight} px-10 bg-[#10b981] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#059669] transition-all shadow-sm min-w-[180px]`}>
                APPLY FILTERS
              </button>
              <button className={`${controlHeight} w-[42px] bg-rose-50 text-[#f43f5e] rounded-xl flex items-center justify-center hover:bg-rose-100 transition-all border border-rose-100 flex-shrink-0 group`}>
                <RotateCcw size={16} strokeWidth={3} className="group-active:rotate-180 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* LEGEND SECTION */}
      <div className="flex items-center gap-6 px-1">
        {['Present', 'Absent', 'Half Day', 'On Leave', 'Holiday'].map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${['bg-[#10b981]', 'bg-[#f43f5e]', 'bg-amber-500', 'bg-blue-500', 'bg-yellow-500'][i]}`} /> 
            <span className="text-[10px] font-black uppercase tracking-tight text-slate-500">{label}</span>
          </div>
        ))}
      </div>

      {/* ATTENDANCE TABLE - CONSTRAINED SCROLL */}
      <Card className="overflow-hidden border-slate-100 shadow-md rounded-2xl">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
          <table className="w-full text-left min-w-[1100px] border-separate border-spacing-0">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 sticky left-0 bg-slate-50 z-30">Employee</th>
                {Array.from({ length: 31 }).map((_, i) => (
                  <th key={i} className="p-3 text-center text-[10px] font-black text-slate-400 border-b border-r border-slate-100 min-w-[42px]">{i + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[1, 2, 3, 4].map((row) => (
                <tr key={row} className="hover:bg-slate-50/50 transition-all group">
                  <td className="p-3 sticky left-0 bg-white group-hover:bg-[#f8fafc] z-20 border-r border-slate-100 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center text-[10px] font-black text-blue-600">AJ</div>
                      <div className="min-w-[100px]">
                        <p className="text-[11px] font-black text-slate-700 leading-tight">Amie Jerde</p>
                        <p className="text-[9px] font-medium text-slate-400 uppercase">IT Manager</p>
                      </div>
                    </div>
                  </td>
                  {Array.from({ length: 31 }).map((_, i) => (
                    <td key={i} className="p-3 text-center border-r border-slate-100">
                      {i % 7 === 0 ? <span className="text-slate-200 text-sm">Ø</span> : <span className="text-[#10b981] text-sm">✓</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}