"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setUser } from "@/features/auth/redux/authSlice";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = (data) => {
    // 1. Get the stored user from localStorage
    const savedUserString = localStorage.getItem("flow_hcm_user");
    
    if (!savedUserString) {
      alert("No account found. Please register first.");
      return;
    }

    const savedUser = JSON.parse(savedUserString);

    // 2. Simple credential check (In a real app, this happens on the backend)
    if (data.email === savedUser.email && data.password) {
      
      // 3. Sync found user back to Redux (restores the role: ADMIN or USER)
      dispatch(setUser(savedUser));
      
      // 4. Send them to the dashboard
      router.push("/dashboard");
    } else {
      alert("Invalid email or password");
    }
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

      <div className="relative w-full max-w-md">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
          <div className="flex justify-center mb-6">
            <h1 className="text-5xl font-bold text-blue-900 tracking-tighter">HRMS</h1>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Welcome Back</h2>
            <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest mt-1">
              Sign in to manage your workspace
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block mb-1 text-[10px] font-black uppercase text-blue-700 tracking-widest">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email"
                {...register("email", { required: true })}
                className="w-full border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 text-sm text-black bg-white/50"
              />
            </div>

            <div>
              <label className="block mb-1 text-[10px] font-black uppercase text-blue-700 tracking-widest">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                {...register("password", { required: true })}
                className="w-full border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 text-sm text-black bg-white/50"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <p className="text-[11px] font-bold text-slate-500 uppercase">Remember me</p>
              </div>
              <button type="button" className="text-[11px] font-bold text-blue-600 uppercase hover:underline">
                Forgot?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 rounded-xl text-xs font-black tracking-widest uppercase shadow-lg shadow-blue-200"
            >
              LOG IN
            </button>

            <div className="text-center pt-2">
              <p className="text-[11px] font-bold text-slate-500 uppercase">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-blue-600 font-black hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}