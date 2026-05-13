"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setUser } from "@/features/auth/redux/authSlice";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = (data) => {
    // 1. Prepare user object (Role logic)
    const userData = {
      name: data.name,
      email: data.email,
      role: data.role, // "ADMIN" or "USER"
    };

    // 2. Save to LocalStorage for persistence
    localStorage.setItem("flow_hcm_user", JSON.stringify(userData));

    // 3. Update Redux state to trigger Dashboard permissions
    dispatch(setUser(userData));

    // 4. Redirect to Dashboard
    router.push("/dashboard");
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative w-full max-w-lg">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
          <div className="flex justify-center mb-6">
            <h1 className="text-5xl font-bold text-blue-900 tracking-tighter">HRMS</h1>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-slate-800">Create Account</h2>
            <p className="text-slate-500 text-sm mt-1">Register your Flow HCM account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-[10px] font-black uppercase text-blue-700 tracking-widest">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Nayan"
                  {...register("name", { required: true })}
                  className="w-full border border-slate-200 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-500 text-sm text-black"
                />
              </div>

              {/* ROLE SELECTION FIELD */}
              <div>
                <label className="block mb-1 text-[10px] font-black uppercase text-blue-700 tracking-widest">
                  Account Role
                </label>
                <select
                  {...register("role", { required: true })}
                  className="w-full border border-slate-200 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-500 text-sm font-bold text-slate-700 bg-white"
                >
                  <option value="USER">Standard Employee</option>
                  <option value="ADMIN">Administrator</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-[10px] font-black uppercase text-blue-700 tracking-widest">
                Email Address
              </label>
              <input
                type="email"
                placeholder="nayan@example.com"
                {...register("email", { required: true })}
                className="w-full border border-slate-200 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-500 text-sm text-black"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-[10px] font-black uppercase text-blue-700 tracking-widest">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  {...register("password", { required: true })}
                  className="w-full border border-slate-200 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-500 text-sm text-black"
                />
              </div>
              <div>
                <label className="block mb-1 text-[10px] font-black uppercase text-blue-700 tracking-widest">
                  Confirm
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  {...register("confirmPassword", { required: true })}
                  className="w-full border border-slate-200 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-500 text-sm text-black"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 mt-4 rounded-xl text-xs font-black tracking-widest uppercase shadow-lg shadow-blue-200"
            >
              CREATE ACCOUNT
            </button>

            <div className="text-center pt-2">
              <p className="text-slate-500 text-[11px] font-bold">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-blue-600 hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}