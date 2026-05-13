// src/app/reports/page.js
import ReportsGallery from "@/features/reports/components/ReportsGallery";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Analytics & Reports</h1>
          <p className="text-xs text-slate-500">Generate and export organizational data</p>
        </div>
      </header>
      
      <ReportsGallery />
    </div>
  );
}