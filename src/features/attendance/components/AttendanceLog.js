// src/features/attendance/components/AttendanceLogs.js
"use client";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch"; 
import { punchIn, punchOut } from "../redux/attendanceSlice";
import Card from "@/shared/ui/Card";

export default function AttendanceLogs() {
  const dispatch = useAppDispatch();
  // Using the path seen in your previous Redux logs
  const { logs, isPunchedIn } = useAppSelector((state) => state.reducer?.attendance || { logs: [], isPunchedIn: false });

  const handlePunch = () => {
    if (isPunchedIn) {
      dispatch(punchOut());
    } else {
      dispatch(punchIn());
    }
  };

  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
        <h2 className="text-sm font-bold text-blue-900">My Attendance Logs</h2>
        <button 
          onClick={handlePunch}
          className={`${isPunchedIn ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors uppercase`}
        >
          {isPunchedIn ? 'Punch Out' : 'Punch In'}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase">Date</th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase">Time</th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase">Type</th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {logs.length > 0 ? (
              logs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-xs text-slate-700 font-medium">{log.date}</td>
                  <td className="px-6 py-4 text-xs text-slate-600">{log.time}</td>
                  <td className="px-6 py-4 text-xs text-slate-600 font-bold">{log.type}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${log.status === 'Present' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-10 text-center text-xs text-slate-400 italic">
                  No logs found. Use the button to Punch In.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}