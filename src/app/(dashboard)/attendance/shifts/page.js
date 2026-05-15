import Card from "@/shared/ui/Card";

export default function ShiftsPage() {
  const shifts = [
    { name: 'Morning Shift', time: '09:00 AM - 06:00 PM', color: 'bg-orange-50 text-orange-600' },
    { name: 'Night Shift', time: '09:00 PM - 06:00 AM', color: 'bg-indigo-50 text-indigo-600' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {shifts.map(shift => (
        <Card key={shift.name} className="p-6 border-slate-100 flex justify-between items-center">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-800">{shift.name}</h4>
            <p className="text-[10px] font-bold text-slate-400 mt-1">{shift.time}</p>
          </div>
          <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase ${shift.color}`}>Active</span>
        </Card>
      ))}
    </div>
  );
}