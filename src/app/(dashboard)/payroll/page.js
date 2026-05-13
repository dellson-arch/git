"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/useAppSelector";
import PayrollOverview from "@/features/payroll/components/PayrollOverview";

export default function PayrollPage() {
  const router = useRouter();
  const currentUser = useAppSelector((state) => state.reducer?.auth?.user);

  useEffect(() => {
    // If the user is logged in but is NOT an admin, redirect them to dashboard
    if (currentUser && currentUser.role !== "ADMIN") {
      router.push("/dashboard");
    }
  }, [currentUser, router]);

  // Prevent "flicker" of admin content while checking permissions
  if (!currentUser || currentUser.role !== "ADMIN") {
    return null; 
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Payroll</h1>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
          View and manage your salary disbursements
        </p>
      </header>
      
      <PayrollOverview />
    </div>
  );
}