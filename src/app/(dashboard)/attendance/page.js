// src/app/attendance/page.js
import AttendanceLog from "@/features/attendance/components/AttendanceLog";

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-bold text-slate-800">Attendance</h1>
        <p className="text-xs text-slate-500">Track your daily work hours and logs</p>
      </header>
      
      <AttendanceLog />
    </div>
  );
}