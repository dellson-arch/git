// src/shared/components/Navbar.js
"use client";

import { Bell, LogOut } from "lucide-react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { logout } from "@/features/auth/redux/authSlice";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const currentUser = useAppSelector((state) => state.reducer?.auth?.user);

  const handleLogout = () => {
    // We keep data in localStorage as requested, just clear the session
    dispatch(logout());
    router.push("/login");
  };

  const getInitials = (name) => {
    if (!name) return "NA";
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-2.5 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <h2 className="text-[11px] font-black text-slate-800 uppercase tracking-widest">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-6">
        <p className="hidden lg:block text-[10px] text-slate-400 font-bold uppercase tracking-tight">
          For support queries contact <span className="text-blue-600 font-black">Waqas (123456789)</span>
        </p>

        <div className="flex items-center gap-4 border-l border-slate-100 pl-6">
          {/* Notifications */}
          <button className="relative p-1.5 hover:bg-slate-50 rounded-full transition-colors text-slate-500">
            <Bell size={18} />
            <span className="absolute top-0.5 right-0.5 bg-red-500 text-[9px] text-white w-4 h-4 rounded-full flex items-center justify-center font-black border-2 border-white">
              2
            </span>
          </button>

          {/* PROFILE GROUP: Hovering anywhere in this div keeps the logout visible */}
          <div className="relative group flex items-center gap-3 pl-2 cursor-pointer py-2">
            <div className="text-right leading-tight hidden sm:block">
              <p className="font-black text-xs text-slate-800 uppercase tracking-tighter">
                {currentUser?.name || "Nayan"}
              </p>
              <p className="text-[9px] text-blue-600 font-black uppercase tracking-widest">
                {currentUser?.role === "ADMIN" ? "Administrator" : "Full Stack Developer"}
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-red-600 ring-4 ring-red-50 flex items-center justify-center font-black text-white text-xs shadow-sm">
              {getInitials(currentUser?.name)}
            </div>

            {/* IMPROVED LOGOUT DROPDOWN */}
            <div className="absolute top-full right-0 mt-1 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out transform group-hover:translate-y-0 translate-y-2">
              <div className="bg-white border border-slate-100 shadow-xl rounded-xl p-2 min-w-[140px]">
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-red-50 rounded-lg transition-colors group/btn"
                >
                  <LogOut size={14} className="text-slate-400 group-hover/btn:text-red-500 transition-colors" />
                  <span className="text-[10px] font-black text-slate-600 group-hover/btn:text-red-500 uppercase tracking-widest transition-colors">
                    Log Out
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}