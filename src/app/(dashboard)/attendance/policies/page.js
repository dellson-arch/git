import Card from "@/shared/ui/Card";

export default function PoliciesPage() {
  return (
    <Card className="p-8 border-slate-100">
      <h3 className="text-xs font-black uppercase tracking-widest text-slate-800 border-b border-slate-50 pb-4 mb-4">Core Attendance Rules</h3>
      <div className="space-y-4">
        <div className="flex justify-between text-[11px] font-bold text-slate-500">
          <span>Late Mark Grace Period</span>
          <span className="text-slate-800">15 Minutes</span>
        </div>
        <div className="flex justify-between text-[11px] font-bold text-slate-500">
          <span>Minimum Hours for Full Day</span>
          <span className="text-slate-800">8.0 Hours</span>
        </div>
      </div>
    </Card>
  );
}