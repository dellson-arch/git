// src/features/employees/components/EmployeeTable.js
"use client";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch"; // Use your custom hook
import Card from "@/shared/ui/Card";
import { addEmployee, updateEmployee } from "../redux/employeeSlice";

export default function EmployeeTable() {
  const dispatch = useAppDispatch(); // Use the custom dispatch hook

  const list = useAppSelector((state) => state.reducer?.employees?.list || []);

  const handleAddClick = () => {
    const name = prompt("Enter Employee Name:");
    const role = prompt("Enter Role (e.g. Full Stack Developer):");

    if (name && role) {
      // Logic check: Ensure addEmployee is correctly imported
      dispatch(addEmployee({ name, role }));
    }
  };

  const handleEdit = (emp) => {
    const newName = prompt("Edit Name:", emp.name);
    const newRole = prompt("Edit Role:", emp.role);

    if (newName && newRole) {
      dispatch(
        updateEmployee({
          id: emp.id,
          name: newName,
          role: newRole,
        }),
      );
    }
  };

  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
        <h2 className="text-sm font-bold text-blue-900">Employee Directory</h2>
        <button
          onClick={handleAddClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors"
        >
          + Add Employee
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Joined
              </th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {/* Map logic is correct; if it's empty, state.employees.list is likely undefined */}
            {list.length > 0 ? (
              list.map((emp) => (
                <tr
                  key={emp.id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-6 py-4 text-xs font-medium text-slate-700">
                    {emp.name}
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-600">
                    {emp.role}
                  </td>
                  <td className="px-6 py-4 text-xs">
                    <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">
                    {emp.joined}
                  </td>
                  <td className="px-6 py-4 text-xs">
                    <button
                      onClick={() => handleEdit(emp)}
                      className="text-blue-600 hover:underline font-bold"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-8 text-center text-xs text-slate-400 italic"
                >
                  No employees found. Click "+ Add Employee" to start.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
