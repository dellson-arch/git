// src/features/payroll/components/PayrollOverview.js
"use client";
import { useAppSelector } from "@/hooks/useAppSelector";
import Card from "@/shared/ui/Card";

export default function PayrollOverview() {
  const payrollData = useAppSelector((state) => state.reducer?.payroll);
  const history = payrollData?.history || [];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-blue-600 text-white">
          <p className="text-[10px] font-bold uppercase opacity-80">
            Next Pay Date
          </p>
          <p className="text-lg font-bold">May 31, 2026</p>
        </Card>
        <Card>
          <p className="text-[10px] font-bold text-slate-400 uppercase">
            Gross Annual Salary
          </p>
          <p className="text-lg font-bold text-slate-800">₹10,20,000</p>
        </Card>
      </div>

      {/* History Table */}
      <Card className="p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/30">
          <h2 className="text-sm font-bold text-blue-900">Payment History</h2>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase">
                Month
              </th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase">
                Amount
              </th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {history && history.length > 0 ? (
              history.map((pay) => (
                <tr key={pay.id} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 text-xs font-semibold text-slate-700">
                    {pay.month}
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-600">
                    {pay.amount}
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">
                    {pay.date}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase">
                      {pay.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-10 text-center text-xs text-slate-400 italic"
                >
                  No payment history available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
