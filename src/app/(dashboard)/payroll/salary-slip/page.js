"use client";

import React, { useState } from "react";
import Card from "@/shared/ui/Card";
import { Search, Filter, Plus, MoreVertical, Download } from "lucide-react";

export default function EmployeeSalaries() {
  const [employees] = useState([
    { id: 1, name: "Darlene Robertson", date: "Feb 11, 2014", status: "Active", role: "Lead Product Manager", salary: "$24,200.00", total: "$88,400.00" },
    { id: 2, name: "Marvin McKinney", date: "Nov 7, 2017", status: "Active", role: "Lead Data Engineer", salary: "$34,200.00", total: "$96,480.00" },
    { id: 3, name: "Eleanor Pena", date: "Sep 9, 2013", status: "Active", role: "Lead UI/UX Designer", salary: "$36,800.00", total: "$128,120.00" },
  ]);

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">PAYROLL</h1>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">View and manage your salary disbursements</p>
        </div>
        <button className="h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[11px] font-black uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-blue-200 transition-all active:scale-95">
          <Plus size={16} strokeWidth={3} /> Add Payroll
        </button>
      </div>

      <Card className="p-0 border-slate-100 shadow-xl bg-white overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search payroll..." 
              className="w-full h-[46px] pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-2xl text-[13px] font-bold outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="h-[46px] px-5 bg-white border border-slate-200 rounded-2xl text-[11px] font-black uppercase flex items-center gap-2 hover:bg-slate-50 transition-all">
              <Filter size={14} /> Filter
            </button>
            <select className="h-[46px] px-5 bg-white border border-slate-200 rounded-2xl text-[11px] font-black uppercase outline-none">
              <option>September 2020</option>
              <option>August 2020</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-5 w-10 border-b border-slate-100">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 accent-blue-600" />
                </th>
                <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Name</th>
                <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Date Employed</th>
                <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Status</th>
                <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Role</th>
                <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Salary</th>
                <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Total Paid</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {employees.map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-50/50 transition-all group">
                  <td className="p-5"><input type="checkbox" className="w-4 h-4 rounded accent-blue-600" /></td>
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-[11px] font-black text-blue-600 border border-blue-100">
                        {emp.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-[13px] font-bold text-slate-800">{emp.name}</span>
                    </div>
                  </td>
                  <td className="p-5 text-[12px] font-bold text-slate-500 uppercase">{emp.date}</td>
                  <td className="p-5">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                      {emp.status}
                    </span>
                  </td>
                  <td className="p-5 text-[12px] font-bold text-slate-600">{emp.role}</td>
                  <td className="p-5 text-[13px] font-black text-slate-900">{emp.salary}</td>
                  <td className="p-5 text-[13px] font-black text-slate-900">{emp.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}