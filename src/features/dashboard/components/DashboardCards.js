// src/features/dashboard/components/DashboardCards.js
import Card from "@/shared/ui/Card";
import { Users, Building2, Clock, CalendarCheck } from "lucide-react";

const stats = [
  { label: "Total Employees", value: "10", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
  { label: "Attendance Rate", value: "85.5%", sub: "45 present today", icon: Clock, color: "text-purple-500", bg: "bg-purple-50" },
  { label: "Pending Leaves", value: "2", sub: "0 on leave today", icon: CalendarCheck, color: "text-amber-500", bg: "bg-amber-50" },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((item, idx) => (
        <Card key={idx} className="p-6 border-slate-100">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{item.label}</p>
              <h3 className="text-2xl font-black text-slate-800 tracking-tighter">{item.value}</h3>
              {item.sub && <p className="text-[10px] font-bold text-slate-400">{item.sub}</p>}
            </div>
            <div className={`p-3 rounded-2xl ${item.bg} ${item.color}`}>
              <item.icon size={20} strokeWidth={2.5} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}