"use client";

import React, { useState } from "react";
import PageHeader from "@/shared/ui/PageHeader";
import Card from "@/shared/ui/Card";
import { 
  Plus, Search, Filter, X, Loader2, 
  Eye, Edit, CheckCircle2, XCircle, Trash2 
} from "lucide-react";

/**
 * Reusable UI Components
 */
const ActionIconButton = ({ icon, color, hoverBg, onClick }) => (
  <button 
    onClick={onClick}
    className={`p-2 rounded-xl transition-all active:scale-90 ${color} ${hoverBg}`}
  >
    {icon}
  </button>
);

const FormField = ({ label, required, children }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">
      {label} {required && <span className="text-rose-500">*</span>}
    </label>
    {children}
  </div>
);

const InputStyle = "w-full h-[42px] px-4 bg-slate-50 border border-slate-200 rounded-xl text-[12px] font-bold text-slate-700 outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-sm";

/**
 * Main Timesheet Component
 */
export default function Timesheet() {
  // State Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null); // NULL = Create Mode, ID = Edit Mode

  // Mock Data (Initial state)
  const [entries, setEntries] = useState([
    { id: 2, name: "Rosemary Okuneva", date: "2026-05-13", hours: "11h", project: "11AAA", status: "Pending", submitted: "2026-05-13" },
    { id: 1, name: "Ashlee Bernhard", date: "2025-08-22", hours: "7.50h", project: "TESTING", status: "Pending", submitted: "2025-09-19" },
  ]);

  const [formData, setFormData] = useState({
    employee: "",
    date: new Date().toISOString().split('T')[0],
    hours: "",
    project: "",
    description: ""
  });

  // --- HANDLERS ---

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openCreateModal = () => {
    setEditingId(null);
    setFormData({
      employee: "",
      date: new Date().toISOString().split('T')[0],
      hours: "",
      project: "",
      description: ""
    });
    setIsModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingId(item.id);
    setFormData({
      employee: item.name,
      date: item.date,
      hours: item.hours.replace('h', ''), // strip 'h' for numeric input
      project: item.project,
      description: "" 
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this entry?")) {
      setEntries(entries.filter(e => e.id !== id));
    }
  };

  const handleSave = async () => {
    if (!formData.employee || !formData.hours) return alert("Required fields missing");

    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((res) => setTimeout(res, 600));

    if (editingId !== null) {
      // UPDATE LOGIC: Map through entries and replace the one with the matching ID
      setEntries(prev => prev.map(item => 
        item.id === editingId 
          ? { 
              ...item, 
              name: formData.employee, 
              date: formData.date, 
              hours: `${formData.hours}h`, 
              project: formData.project.toUpperCase() 
            } 
          : item
      ));
    } else {
      // CREATE LOGIC: Add new entry to the array
      const newEntry = {
        id: entries.length > 0 ? Math.max(...entries.map(e => e.id)) + 1 : 1,
        name: formData.employee,
        date: formData.date,
        hours: `${formData.hours}h`,
        project: formData.project.toUpperCase() || "N/A",
        status: "Pending",
        submitted: new Date().toISOString().split('T')[0]
      };
      setEntries([newEntry, ...entries]);
    }
    
    // Reset and close
    setIsSubmitting(false);
    setIsModalOpen(false);
    setEditingId(null);
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 p-4 lg:p-8">
      {/* Header Section */}
      <PageHeader title="Timesheet">
        <button 
          onClick={openCreateModal}
          className="bg-[#10b981] hover:bg-[#059669] text-white px-5 h-11 rounded-xl shadow-lg shadow-emerald-200/50 flex items-center gap-2 text-[11px] font-black uppercase tracking-wider transition-all active:scale-95"
        >
          <Plus size={18} strokeWidth={3} /> Add Timesheet
        </button>
      </PageHeader>

      <Card className="p-0 border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden bg-white">
        {/* Search & Filter Bar */}
        <div className="p-6 border-b border-slate-50 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input type="text" placeholder="Search entries..." className={InputStyle} />
            </div>
            <button className="h-[42px] px-6 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-800 transition-all">
              <Filter size={14} /> Filters
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-slate-50/80">
                <th className="p-5 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100">#</th>
                <th className="p-5 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100">Employee</th>
                <th className="p-5 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100">Date</th>
                <th className="p-5 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100">Hours</th>
                <th className="p-5 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100">Project</th>
                <th className="p-5 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100">Status</th>
                <th className="p-5 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {entries.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-5 text-[12px] font-bold text-slate-400">{item.id}</td>
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 overflow-hidden shadow-sm">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`} alt="avatar" />
                      </div>
                      <span className="text-[13px] font-bold text-slate-800">{item.name}</span>
                    </div>
                  </td>
                  <td className="p-5 text-[12px] font-semibold text-slate-600">{item.date}</td>
                  <td className="p-5">
                    <span className="text-[12px] font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">{item.hours}</span>
                  </td>
                  <td className="p-5">
                    <span className="text-[11px] font-black text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100 uppercase tracking-tight">{item.project}</span>
                  </td>
                  <td className="p-5">
                    <span className="text-[10px] font-black bg-amber-50 text-amber-600 px-3 py-1.5 rounded-lg border border-amber-100 uppercase tracking-widest">{item.status}</span>
                  </td>
                  <td className="p-5 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ActionIconButton icon={<Edit size={16} />} color="text-amber-500" hoverBg="hover:bg-amber-50" onClick={() => openEditModal(item)} />
                      <ActionIconButton icon={<Trash2 size={16} />} color="text-rose-600" hoverBg="hover:bg-rose-50" onClick={() => handleDelete(item.id)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Modal - Unified for Add/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => !isSubmitting && setIsModalOpen(false)} />
          <div className="relative w-full max-w-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h3 className="text-lg font-black text-slate-800">{editingId ? "Edit Timesheet" : "Add New Timesheet"}</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                <X className="text-slate-400" size={20} />
              </button>
            </div>

            <div className="p-7 space-y-6">
              <FormField label="Employee" required>
                <select name="employee" value={formData.employee} onChange={handleChange} className={InputStyle}>
                  <option value="">Select Employee</option>
                  <option value="Rosemary Okuneva">Rosemary Okuneva</option>
                  <option value="Ashlee Bernhard">Ashlee Bernhard</option>
                  <option value="Nayan">Nayan</option>
                </select>
              </FormField>

              <div className="grid grid-cols-2 gap-4">
                <FormField label="Hours" required>
                  <input name="hours" type="number" value={formData.hours} onChange={handleChange} className={InputStyle} placeholder="e.g. 8" />
                </FormField>
                <FormField label="Project">
                  <input name="project" value={formData.project} onChange={handleChange} className={InputStyle} placeholder="Project Code" />
                </FormField>
              </div>

              <FormField label="Description">
                <textarea name="description" value={formData.description} onChange={handleChange} className={`${InputStyle} h-24 p-4 resize-none`} placeholder="What did you work on?" />
              </FormField>
            </div>

            <div className="flex items-center justify-end gap-3 p-6 bg-slate-50/50 border-t border-slate-100">
              <button onClick={() => setIsModalOpen(false)} className="text-[11px] font-black uppercase text-slate-500 mr-4">Cancel</button>
              <button 
                onClick={handleSave} 
                disabled={isSubmitting} 
                className="px-10 h-11 bg-[#10b981] hover:bg-[#059669] text-white rounded-xl text-[11px] font-black uppercase shadow-lg shadow-emerald-100 transition-all flex items-center justify-center min-w-[140px]"
              >
                {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : (editingId ? "Update Entry" : "Save Entry")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}