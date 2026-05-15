// src/features/dashboard/components/RecentActivities.js
import Card from "@/shared/ui/Card";

export default function RecentActivities() {
  return (
    <Card title="Recent Leave Applications" badge="55">
      <div className="p-6 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 rounded-2xl bg-slate-50/50 border border-slate-100 flex justify-between items-center hover:border-blue-100 transition-colors cursor-pointer">
            <div>
              <p className="text-xs font-black text-slate-700">Amie Jerde</p>
              <p className="text-[10px] text-slate-400 font-bold mt-0.5 uppercase">Annual Leave • 2026-01-12</p>
            </div>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase rounded-lg border border-emerald-100">Approved</span>
          </div>
        ))}
      </div>
    </Card>
  );
}