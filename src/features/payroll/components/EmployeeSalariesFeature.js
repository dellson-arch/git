"use client";

import React, { useState } from "react";
import { 
  Search, 
  Edit3, 
  Lock, 
  Trash2, 
  ArrowUpRight, 
  ArrowDownLeft,
  ChevronDown
} from "lucide-react";
import Card from "@/shared/ui/Card";

export default function SalaryComponentsFeature() {
  // 1. DYNAMIC LIST STATE
  const [components, setComponents] = useState([
    { id: 1, name: "Loan Deduction", desc: "Employee loan repayment", type: "Deduction", amount: "1000", calc: "Fixed Amount" },
    { id: 2, name: "Income Tax (TDS)", desc: "Tax deducted at source", type: "Deduction", amount: "10", calc: "Percentage" },
    { id: 3, name: "Special Allowance", desc: "Bonus pay", type: "Earning", amount: "3000", calc: "Fixed Amount" }
  ]);

  // 2. FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    type: "Earning",
    calc: "Fixed Amount",
    amount: ""
  });

  // 3. SAVE BUTTON LOGIC
  const handleSave = (e) => {
    e.preventDefault(); // Prevents page reload
    
    if (!formData.name || !formData.amount) {
      alert("Please fill in the Name and Amount");
      return;
    }

    const newEntry = {
      ...formData,
      id: Date.now(), // Unique ID for the list
    };

    setComponents([newEntry, ...components]); // Adds new card to the top
    
    // Reset Form
    setFormData({
      name: "",
      desc: "",
      type: "Earning",
      calc: "Fixed Amount",
      amount: ""
    });
  };

  return (
    <div className="p-8 grid grid-cols-12 gap-8">
      
      {/* LEFT: ADD NEW COMPONENT CARD */}
      <div className="col-span-4">
        <Card className="p-6 bg-white border-slate-100 shadow-xl">
          <header className="mb-6">
            <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">Add New Component</h2>
          </header>

          <form onSubmit={handleSave} className="space-y-4">
            {/* Name */}
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-500 uppercase">Component Name *</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="e.g., HRA, PF"
                className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-emerald-500 transition-all"
              />
            </div>

            {/* Type Toggle */}
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-500 uppercase">Type *</label>
              <select 
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none"
              >
                <option value="Earning">Earning</option>
                <option value="Deduction">Deduction</option>
              </select>
            </div>

            {/* AMOUNT OPTION (Fixed here) */}
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-500 uppercase">
                {formData.calc === "Percentage" ? "Percentage (%)" : "Fixed Amount ($)"} *
              </label>
              <input 
                type="number" 
                required
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
                placeholder="0.00"
                className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-emerald-500 font-bold"
              />
            </div>

            {/* Calculation Type */}
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-500 uppercase">Calculation Type *</label>
              <select 
                value={formData.calc}
                onChange={(e) => setFormData({...formData, calc: e.target.value})}
                className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none"
              >
                <option value="Fixed Amount">Fixed Amount</option>
                <option value="Percentage">Percentage</option>
              </select>
            </div>

            {/* SAVE BUTTON */}
            <button 
              type="submit"
              className="w-full h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-100 transition-all active:scale-95 mt-4"
            >
              Add Component
            </button>
          </form>
        </Card>
      </div>

      {/* RIGHT: DYNAMIC LIST */}
      <div className="col-span-8 space-y-6">
        <Card className="p-0 bg-white border-slate-100 shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">Salary Components</h2>
            <span className="text-[10px] font-black bg-slate-100 px-3 py-1 rounded-full text-slate-500">
              {components.length} TOTAL
            </span>
          </div>

          <div className="divide-y divide-slate-50">
            {components.map((item) => (
              <div key={item.id} className="p-5 flex items-center justify-between hover:bg-slate-50/50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${item.type === 'Earning' ? 'bg-emerald-50 text-emerald-500' : 'bg-rose-50 text-rose-500'}`}>
                    {item.type === 'Earning' ? <ArrowUpRight size={20} /> : <ArrowDownLeft size={20} />}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-800">{item.name}</h4>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">{item.type}</p>
                  </div>
                </div>

                <div className="flex items-center gap-10">
                  <div className="text-right min-w-[120px]">
                    <div className="text-sm font-black text-slate-900">
                      {item.calc === "Percentage" ? `${item.amount}%` : `$${Number(item.amount).toLocaleString()}`}
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{item.calc}</div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button 
                      onClick={() => setComponents(components.filter(c => c.id !== item.id))}
                      className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                    >
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