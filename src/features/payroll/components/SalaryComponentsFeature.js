"use client";

import React from "react";
import { 
  Search, 
  Edit3, 
  Lock, 
  Trash2, 
  ArrowUpRight, 
  ArrowDownLeft,
  ChevronDown
} from "lucide-react";
import Card from "@/shared/ui/Card"; // Assuming you have a base Card component

export default function SalaryComponentsFeature() {
  const components = [
    { name: "Loan Deduction", desc: "Employee loan repayment deduction", type: "Deduction", amount: "$1,000.00", calc: "Fixed amount", status: "Active" },
    { name: "Income Tax (TDS)", desc: "Tax deducted at source on salary income", type: "Deduction", amount: "10.00%", calc: "Of basic salary", status: "Active" },
    { name: "Professional Tax", desc: "Professional tax deduction as per state regulations", type: "Deduction", amount: "$200.00", calc: "Fixed amount", status: "Active" },
    { name: "Special Allowance", desc: "Special allowance for additional responsibilities", type: "Earning", amount: "$3,000.00", calc: "Fixed amount", status: "Active" },
  ];

  return (
    <div className="p-8 grid grid-cols-12 gap-8 animate-in fade-in duration-500">
      
      {/* LEFT SIDE: Add New Component Form */}
      <div className="col-span-4">
        <Card className="p-6 bg-white border-slate-100 shadow-xl">
          <header className="mb-6">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">Add New Component</h2>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Fill in the details to create a new salary component</p>
          </header>

          <form className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Component Name *</label>
              <input type="text" placeholder="e.g., Basic Salary, HRA, Tax" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Description</label>
              <textarea placeholder="Brief description of the component" className="w-full h-24 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Type *</label>
              <div className="relative">
                <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm appearance-none outline-none">
                  <option>Earning</option>
                  <option>Deduction</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Calculation Type *</label>
              <div className="relative">
                <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm appearance-none outline-none">
                  <option>Fixed Amount</option>
                  <option>Percentage</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <button type="button" className="w-full h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-200 transition-all active:scale-95 mt-4">
              Add Component
            </button>
          </form>
        </Card>
      </div>

      {/* RIGHT SIDE: Component Management List */}
      <div className="col-span-8 space-y-6">
        {/* Filter Bar */}
        <div className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" placeholder="Search components..." className="w-full h-11 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white transition-all outline-none" />
          </div>
          <button className="h-11 px-8 bg-emerald-500 text-white rounded-xl text-xs font-black uppercase tracking-widest">Search</button>
        </div>

        {/* List Card */}
        <Card className="p-0 bg-white border-slate-100 shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-50">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">Salary Components</h2>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Manage your payroll components and their calculation methods</p>
          </div>

          <div className="divide-y divide-slate-50">
            {components.map((comp) => (
              <div key={comp.name} className="p-5 flex items-center justify-between hover:bg-slate-50/50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${comp.type === 'Earning' ? 'bg-emerald-50 text-emerald-500' : 'bg-rose-50 text-rose-500'}`}>
                    {comp.type === 'Earning' ? <ArrowUpRight size={20} /> : <ArrowDownLeft size={20} />}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-800">{comp.name}</h4>
                    <p className="text-[11px] font-bold text-slate-400">{comp.desc}</p>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                  <div className="text-right min-w-[100px]">
                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded border ${
                      comp.type === 'Earning' ? 'border-emerald-100 text-emerald-600 bg-emerald-50' : 'border-rose-100 text-rose-600 bg-rose-50'
                    }`}>
                      {comp.type}
                    </span>
                  </div>
                  
                  <div className="text-right min-w-[120px]">
                    <div className="text-sm font-black text-slate-900">{comp.amount}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{comp.calc}</div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                      <Edit3 size={16} />
                    </button>
                    <button className="p-2 text-amber-500 hover:bg-amber-50 rounded-lg transition-colors">
                      <Lock size={16} />
                    </button>
                    <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}