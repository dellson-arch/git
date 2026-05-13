// src/features/settings/components/SettingsTabs.js
"use client";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";

import Card from "@/shared/ui/Card";
import { toggleNotification } from "../redux/settingsSlice";

export default function SettingsTabs() {
  const dispatch = useAppDispatch();
  const { 
    profile = { name: '', email: '', role: '' }, 
    notifications = { emailAlerts: false, pushNotifications: false } 
  } = useAppSelector((state) => state.settings || {});
  return (
    <div className="max-w-4xl space-y-6">
      <Card className="p-6">
        <h3 className="text-sm font-bold text-slate-800 mb-6">Account Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">Full Name</label>
            <input 
              type="text" 
              defaultValue={profile.name}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-500" 
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">Email Address</label>
            <input 
              type="email" 
              defaultValue={profile.email}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-500" 
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-bold text-slate-800 mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          {Object.keys(notifications).map((key) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-xs text-slate-600 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <button 
                onClick={() => dispatch(toggleNotification({ field: key }))}
                className={`w-10 h-5 rounded-full transition-colors relative ${notifications[key] ? 'bg-blue-600' : 'bg-slate-200'}`}
              >
                <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${notifications[key] ? 'right-1' : 'left-1'}`} />
              </button>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex justify-end">
        <button className="bg-blue-600 text-white text-[11px] font-bold px-6 py-2.5 rounded-xl shadow-sm hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}