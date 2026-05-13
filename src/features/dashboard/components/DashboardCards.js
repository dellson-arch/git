// src/features/dashboard/components/DashboardCards.js
"use client";
import { useAppSelector } from "@/hooks/useAppSelector";
import Card from "@/shared/ui/Card";

export default function DashboardCards() {
  const employees = useAppSelector((state) => state.reducer?.employees?.list || []);
  const logs = useAppSelector((state) => state.reducer?.attendance?.logs || []);

  // Calculate dynamic values
  const totalEmployees = employees.length;
  const presentToday = logs.filter(l => l.status === "Present").length;

  const cards = [
    { title: "Total Employees", value: totalEmployees },
    { title: "Present Today", value: presentToday },
    { title: "On Leave", value: "0" },
    { title: "Pending Requests", value: "3" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cards.map((card) => (
        <Card key={card.title} className="p-5 border-slate-100 hover:shadow-md transition-shadow">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">
            {card.title}
          </p>
          <h2 className="text-2xl font-black text-slate-800">
            {card.value}
          </h2>
        </Card>
      ))}
    </div>
  );
}