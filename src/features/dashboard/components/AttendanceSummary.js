// src/features/dashboard/components/AttendanceSummary.js
"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import Card from "@/shared/ui/Card";
import { TrendingUp } from "lucide-react";

const data = [
  { name: "Dec 2025", value: 8 },
  { name: "Jan 2026", value: 12 },
  { name: "Feb 2026", value: 15 },
  { name: "Mar 2026", value: 10 },
  { name: "Apr 2026", value: 18 },
  { name: "May 2026", value: 14 },
];

export default function AttendanceSummary() {
  return (
    <Card className="p-6 border-slate-100 min-h-[400px]">
      {/* Header matching Screenshot 5.40.29 PM */}
      <div className="flex items-center gap-2 mb-8">
        <TrendingUp size={18} className="text-slate-800" />
        <h3 className="text-sm font-black text-slate-800 tracking-tight">
          Hiring Trend (6 Months)
        </h3>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            {/* Dashed grid lines */}
            <CartesianGrid 
              vertical={true} 
              horizontal={true} 
              strokeDasharray="3 3" 
              stroke="#E2E8F0" 
            />
            
            <XAxis 
              dataKey="name" 
              axisLine={true} 
              tickLine={false} 
              tick={{ fill: "#64748B", fontSize: 11, fontWeight: 600 }}
              dy={10}
            />
            
            <YAxis 
              axisLine={true} 
              tickLine={false} 
              tick={{ fill: "#64748B", fontSize: 12, fontWeight: 600 }} 
              domain={[0, 20]}
              ticks={[0, 5, 10, 15, 20]}
            />

            {/* The Blue Bar - matches your dashboard theme */}
            <Bar 
              dataKey="value" 
              fill="#3B82F6" 
              radius={[2, 2, 0, 0]} 
              barSize={60} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}