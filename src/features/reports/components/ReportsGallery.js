// src/features/reports/components/ReportsGallery.js
"use client";
import { useAppSelector } from "@/hooks/useAppSelector";
import Card from "@/shared/ui/Card";

export default function ReportsGallery() {
  const { availableReports } = useAppSelector((state) => state.reports || { availableReports: [] });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {availableReports.map((report) => (
        <Card key={report.id} className="p-0 border-slate-200/60 shadow-sm flex flex-col">
          <div className="p-5 flex-1">
            <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">
              {report.category}
            </span>
            <h3 className="mt-3 text-sm font-bold text-slate-800">{report.title}</h3>
            <p className="text-[10px] text-slate-400 mt-1">Last generated: {report.lastGenerated}</p>
          </div>
          
          <div className="bg-slate-50 p-3 flex justify-between items-center border-t border-slate-100">
            <button className="text-[10px] font-bold text-slate-600 hover:text-blue-600 transition-colors">
              Schedule Auto-Run
            </button>
            <button className="bg-white border border-slate-200 text-slate-700 text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-slate-100 shadow-sm">
              Download PDF
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}