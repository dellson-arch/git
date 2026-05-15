"use client";

import { useState } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import { Clock, LayoutDashboard, Users, CreditCard, UserPlus, BarChart3, Settings, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, roles: ['ADMIN', 'USER'] },
  { 
    name: "Attendance", 
    icon: Clock, 
    roles: ['ADMIN', 'USER'],
    subItems: [
      { name: "Attendance Records", path: "/attendance/records" },
      { name: "Timesheet", path: "/attendance/timesheet" },
      { name: "Attendance Regularization", path: "/attendance/regularization" },
      { name: "Shifts", path: "/attendance/shifts" },
      { name: "Attendance Policies", path: "/attendance/policies" },
    ]
  },
  { name: 'Employees', path: '/employees', icon: Users, roles: ['ADMIN'] },
  
  // --- UPDATED PAYROLL SECTION ---
  { 
    name: 'Payroll', 
    icon: CreditCard, 
    roles: ['ADMIN'],
    subItems: [
      { name: "Payslips", path: "/payroll/payslips" },
      { name: "Payroll Runs", path: "/payroll/runs" },
      { name: "Employee Salaries", path: "/payroll/salaries" },
      { name: "Salary Components", path: "/payroll/components" },
    ]
  },
  
  { name: 'Recruitment', path: '/recruitment', icon: UserPlus, roles: ['ADMIN'] },
  { name: 'Reports', path: '/reports', icon: BarChart3, roles: ['ADMIN'] },
  { name: 'Settings', path: '/settings', icon: Settings, roles: ['ADMIN'] },
];

export default function Sidebar() {
  const pathname = usePathname();
  const currentUser = useAppSelector((state) => state.reducer?.auth?.user);
  const userRole = currentUser?.role || "USER";

  return (
    <aside className="w-72 bg-[#0b1120] min-h-screen p-6 text-slate-400 border-r border-slate-800/50">
      <div className="mb-10 px-2">
        <h1 className="text-xl font-black text-white tracking-tighter italic">
          flow <span className="text-blue-500 not-italic">HCM</span>
        </h1>
      </div>

      <nav className="space-y-2">
        {menuItems
          .filter(item => item.roles.includes(userRole))
          .map((item) => (
            <SidebarItem key={item.name} item={item} pathname={pathname} />
          ))}
      </nav>
    </aside>
  );
}

// Sub-component for individual items to handle logic
function SidebarItem({ item, pathname }) {
  const [isOpen, setIsOpen] = useState(pathname.startsWith(item.path || "/attendance"));
  const hasSubItems = !!item.subItems;
  const isActive = pathname === item.path;

  // Simple item without children
  if (!hasSubItems) {
    return (
      <Link 
        href={item.path}
        className={`flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase tracking-[0.15em] rounded-xl transition-all ${
          isActive 
            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
            : "hover:bg-slate-800/50 hover:text-slate-200"
        }`}
      >
        <item.icon size={18} strokeWidth={isActive ? 3 : 2} />
        {item.name}
      </Link>
    );
  }

  // Item with Sub-items (Accordion style)
  return (
    <div className="space-y-1">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-[10px] font-black uppercase tracking-[0.15em] rounded-xl hover:bg-slate-800/50 hover:text-slate-200 transition-all"
      >
        <div className="flex items-center gap-3">
          <item.icon size={18} />
          {item.name}
        </div>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="ml-6 mt-2 border-l border-slate-800 pl-4 space-y-1 animate-in slide-in-from-top-1 duration-200">
          {item.subItems.map((sub) => (
            <Link 
              key={sub.name} 
              href={sub.path}
              className={`block py-2 text-[11px] font-bold tracking-tight transition-colors ${
                pathname === sub.path ? "text-blue-500" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}