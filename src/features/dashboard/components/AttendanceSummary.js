// src/features/dashboard/components/AttendanceSummary.js
"use client";
import { useAppSelector } from "@/hooks/useAppSelector";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import Card from "@/shared/ui/Card";

export default function AttendanceSummary() {
  const attendanceData = useAppSelector((state) => state.reducer?.attendance || state.attendance);
  const logs = attendanceData?.logs || [];

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  
  const dynamicData = days.map(day => {
    const dayLogs = logs.filter(log => log.date && log.date.includes(day));
    
    return {
      name: day,
      // We add a tiny 'minHeight' logic or just ensure we return 0
      Present: dayLogs.filter(l => l.status === 'Present').length,
      Late: dayLogs.filter(l => l.status === 'Late').length,
      Absent: dayLogs.filter(l => l.status === 'Absent').length,
    };
  });

  return (
    <Card className="p-6 min-h-[400px]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[11px] font-bold uppercase text-slate-800 tracking-tight">
          Attendance Flag Summary
        </h2>
        <div className="flex gap-4">
           {/* Legend labels matching your premium UI */}
           <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500"/> <span className="text-[10px] font-bold text-slate-500">Present</span></div>
           <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500"/> <span className="text-[10px] font-bold text-slate-500">Late</span></div>
           <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500"/> <span className="text-[10px] font-bold text-slate-500">Absent</span></div>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dynamicData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }}
              dy={10}
            />
            {/* Show YAxis with integer-only ticks so it looks professional */}
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} allowDecimals={false} />
            <Tooltip 
              cursor={{fill: '#f8fafc'}}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
            />
            {/* Use the exact colors from your Flow HCM branding */}
            <Bar dataKey="Present" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={8} />
            <Bar dataKey="Late" fill="#10b981" radius={[4, 4, 0, 0]} barSize={8} />
            <Bar dataKey="Absent" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}