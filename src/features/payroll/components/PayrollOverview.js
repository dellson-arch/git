// src/features/payroll/components/PayrollOverview.js
"use client";

import { useState, useMemo } from "react";
import Card from "@/shared/ui/Card";
import { Search, Filter, ChevronDown, Plus, X, DollarSign, User, Briefcase } from "lucide-react";

const initialPayrollData = [
  { id: 1, name: "Darlene Robertson", role: "Lead Product Manager", date: "February 11, 2014", status: "Active", salary: "$24,200.00", totalPaid: "$88,400.00", avatar: "DR" },
  { id: 2, name: "Marvin McKinney", role: "Lead Data Engineer", date: "November 7, 2017", status: "Active", salary: "$34,200.00", totalPaid: "$96,480.00", avatar: "MM" },
  { id: 3, name: "Eleanor Pena", role: "Lead UI/UX Designer", date: "September 9, 2013", status: "Active", salary: "$36,800.00", totalPaid: "$128,120.00", avatar: "EP" },
  { id: 4, name: "Ralph Edwards", role: "Senior Frontend Dev", date: "February 11, 2014", status: "Active", salary: "$22,590.00", totalPaid: "$88,400.00", avatar: "RE" },
];

export default function PayrollOverview() {
  // --- States ---
  const [payrollList, setPayrollList] = useState(initialPayrollData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState([2]); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- Form State ---
  const [formData, setFormData] = useState({ name: "", role: "", salary: "" });

  // --- Logic ---
  const filteredData = useMemo(() => {
    return payrollList.filter(emp => 
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, payrollList]);

  const handleAddPayroll = (e) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now(),
      name: formData.name,
      role: formData.role,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      status: "Active",
      salary: `$${Number(formData.salary).toLocaleString()}.00`,
      totalPaid: "$0.00",
      avatar: formData.name.split(" ").map(n => n[0]).join("").toUpperCase()
    };

    setPayrollList([newEntry, ...payrollList]);
    setIsModalOpen(false);
    setFormData({ name: "", role: "", salary: "" });
  };

  const toggleSelectRow = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="relative">
      <Card className="p-0 overflow-hidden border-slate-100 shadow-sm bg-white">
        {/* 1. SEARCH & ACTION BAR */}
        <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            <input 
              type="text" 
              placeholder="Search payroll..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50/50 border border-slate-100 rounded-2xl text-xs font-medium outline-none focus:ring-4 focus:ring-blue-500/5 transition-all"
            />
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-100 active:scale-95"
          >
            <Plus size={16} strokeWidth={3} />
            Add Payroll
          </button>
        </div>

        {/* 2. TABLE CONTROLS */}
        <div className="px-6 py-4 border-y border-slate-50 flex justify-between items-center">
          <div className="text-[11px] font-black text-slate-400 uppercase tracking-tight">
            Showing <span className="text-slate-800">{filteredData.length}</span> results
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50">
              <Filter size={14} strokeWidth={3} /> Filter
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50">
              September 2020 <ChevronDown size={14} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* 3. DYNAMIC TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-5 w-12"><input type="checkbox" className="rounded border-slate-300" readOnly /></th>
                <th className="px-4 py-5">Name</th>
                <th className="px-4 py-5">Date Employed</th>
                <th className="px-4 py-5">Status</th>
                <th className="px-4 py-5">Role</th>
                <th className="px-4 py-5 text-right">Salary</th>
                <th className="px-6 py-5 text-right">Total Paid This Year</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredData.map((emp) => (
                <tr 
                  key={emp.id} 
                  className={`transition-all duration-200 ${selectedIds.includes(emp.id) ? 'bg-blue-50/30' : 'hover:bg-slate-50/50'}`}
                >
                  <td className="px-6 py-5">
                    <input 
                      type="checkbox" 
                      checked={selectedIds.includes(emp.id)}
                      onChange={() => toggleSelectRow(emp.id)}
                      className="w-4 h-4 rounded border-slate-300 text-blue-600 cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-black text-slate-500 uppercase">
                        {emp.avatar}
                      </div>
                      <span className={`text-xs font-black tracking-tight ${selectedIds.includes(emp.id) ? 'text-blue-700' : 'text-slate-800'}`}>
                        {emp.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-5 text-[11px] font-bold text-slate-500 uppercase">{emp.date}</td>
                  <td className="px-4 py-5">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase rounded-lg border border-emerald-100">
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-4 py-5 text-[11px] font-bold text-slate-500">{emp.role}</td>
                  <td className="px-4 py-5 text-xs font-black text-slate-800 text-right tabular-nums">{emp.salary}</td>
                  <td className="px-6 py-5 text-xs font-black text-slate-800 text-right tabular-nums">{emp.totalPaid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* --- ADD PAYROLL MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 border border-slate-100">
            <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-800">Add New Payroll</h3>
                <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">Enter employee disbursement details</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white rounded-xl transition-colors shadow-sm border border-transparent hover:border-slate-100 text-slate-400">
                <X size={18} />
              </button>
            </div>
            
            <form className="p-8 space-y-6" onSubmit={handleAddPayroll}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-2">
                  <User size={12} className="text-blue-500" /> Full Name
                </label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all" 
                  placeholder="e.g. Courtney Henry" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-2">
                    <Briefcase size={12} className="text-blue-500" /> Role
                  </label>
                  <input 
                    required
                    type="text" 
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold outline-none focus:border-blue-500 transition-all" 
                    placeholder="UI Designer" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-2">
                    <DollarSign size={12} className="text-blue-500" /> Salary
                  </label>
                  <input 
                    required
                    type="number" 
                    value={formData.salary}
                    onChange={(e) => setFormData({...formData, salary: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold outline-none focus:border-blue-500 transition-all" 
                    placeholder="24000" 
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-[24px] text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-100 transition-all active:scale-95 mt-4">
                Confirm & Create Entry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}