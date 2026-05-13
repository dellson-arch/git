// src/app/employees/page.js
import EmployeeTable from "@/features/employee/components/EmployeeTable";

export default function EmployeesPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-bold text-slate-800">Employees</h1>
        <p className="text-xs text-slate-500">Manage your organization's talent</p>
      </header>
      
      <EmployeeTable />
    </div>
  );
}