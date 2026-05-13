// src/shared/components/Sidebar.js
"use client";

import { useAppSelector } from "@/hooks/useAppSelector";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: 'Dashboard', path: '/dashboard', roles: ['ADMIN', 'USER'] },
  { name: 'Attendance', path: '/attendance', roles: ['ADMIN', 'USER'] },
  // These are restricted to ADMIN only
  { name: 'Employees', path: '/employees', roles: ['ADMIN'] },
  { name: 'Payroll', path: '/payroll', roles: ['ADMIN'] },
  { name: 'Recruitment', path: '/recruitment', roles: ['ADMIN'] },
  { name: 'Reports', path: '/reports', roles: ['ADMIN'] },
  { name: 'Settings', path: '/settings', roles: ['ADMIN'] },
];

export default function Sidebar() {
  const pathname = usePathname();
  const currentUser = useAppSelector((state) => state.reducer?.auth?.user);
  const userRole = currentUser?.role || "USER";

  return (
    <aside className="w-64 bg-[#0f172a] min-h-screen p-4 text-slate-300">
      <div className="mb-10 px-4">
        <h1 className="text-2xl font-bold text-white">flow <span className="text-blue-500">HCM</span></h1>
      </div>

      <nav className="space-y-1">
        {menuItems
          .filter(item => item.roles.includes(userRole)) // Filter based on role
          .map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              className={`flex items-center px-4 py-3 text-[11px] font-black uppercase tracking-widest rounded-lg transition-all ${
                pathname === item.path 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50" 
                  : "hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
      </nav>
    </aside>
  );
}