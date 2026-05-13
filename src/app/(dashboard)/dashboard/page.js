// src/app/(dashboard)/dashboard/page.js
"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setUser } from "@/features/auth/redux/authSlice"; // Ensure this import exists

import DashboardCards from "@/features/dashboard/components/DashboardCards";
import AttendanceSummary from "@/features/dashboard/components/AttendanceSummary";
import RecentActivities from "@/features/dashboard/components/RecentActivities";
import Card from "@/shared/ui/Card";

export default function DashboardPage() {
  const subTabs = [
    "ESS Dashboard", "Attendance Dashboard", "Payroll Dashboard", 
    "Recruitment Dashboard", "Employee Matrix", "Help Desk", "Organogram"
  ];

  const dispatch = useAppDispatch();
  // Using the path confirmed in your Redux DevTools logs
  const currentUser = useAppSelector((state) => state.reducer?.auth?.user);

  useEffect(() => {
    const savedUser = localStorage.getItem("flow_hcm_user");
    if (savedUser && !currentUser) {
      dispatch(setUser(JSON.parse(savedUser)));
    }
  }, [dispatch, currentUser]);

  const isAdmin = currentUser?.role === "ADMIN";

  return (
    <div className="max-w-[1600px] mx-auto space-y-5 pb-10">
      {/* 1. HORIZONTAL SUB-NAV */}
      <div className="flex bg-white border-b border-gray-200 overflow-x-auto no-scrollbar mb-6 -mx-6 px-6">
        {subTabs.map((tab, i) => (
          <button 
            key={tab} 
            className={`py-4 px-4 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-all ${
              i === 0 
                ? "border-blue-600 text-blue-700 bg-blue-50/30" 
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 2. DYNAMIC STAT CARDS (The missing field) */}
      <DashboardCards />

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 px-2">
        
        {/* 3. PROFILE COLUMN (3/12) */}
        <aside className="xl:col-span-3 space-y-5">
          <Card className="text-center p-6 border-slate-200/60 shadow-sm">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-sm mx-auto overflow-hidden">
                 <div className="bg-blue-600 w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                   {currentUser?.name?.charAt(0) || "N"}
                 </div>
              </div>
            </div>
            <h2 className="text-base font-bold text-slate-800">{currentUser?.name || "Nayan"}</h2>
            <p className="text-blue-600 text-[11px] font-black mb-4 uppercase tracking-tight">
              {currentUser?.role === "ADMIN" ? "Administrator" : "Full Stack Developer"}
            </p>
            
            <div className="grid grid-cols-2 border-t border-slate-100 pt-4 gap-2">
              <div className="text-center">
                <p className="text-[9px] text-gray-400 uppercase font-black tracking-tighter">Birthdays</p>
                <p className="text-[11px] font-semibold text-slate-600">None Today</p>
              </div>
              <div className="text-center border-l border-slate-100">
                <p className="text-[9px] text-gray-400 uppercase font-black tracking-tighter">Anniversary</p>
                <p className="text-[11px] font-semibold text-slate-600">None Today</p>
              </div>
            </div>
          </Card>
          
          <RecentActivities title="Missing Entry" />
        </aside>

        {/* 4. MAIN CONTENT COLUMN (9/12) */}
        <div className="xl:col-span-9 space-y-5">
          {/* Only Admin sees global charts */}
          {isAdmin ? (
            <AttendanceSummary />
          ) : (
            <Card className="p-10 bg-gradient-to-br from-blue-500 to-blue-700 text-white">
               <h3 className="text-xl font-bold">Welcome back, {currentUser?.name}!</h3>
               <p className="text-sm opacity-80">You have no pending attendance alerts today.</p>
            </Card>
          )}
          
          {/* Bottom Grid with Role Protection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <RecentActivities title="Leave Summary" />
            <RecentActivities title="My Requests" />
            {/* Logic: Only Admin sees "My Approvals" to process requests */}
            {isAdmin && <RecentActivities title="My Approvals" />}
          </div>
        </div>

      </div>
    </div>
  )
}