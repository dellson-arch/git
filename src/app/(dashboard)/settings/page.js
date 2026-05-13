// src/app/settings/page.js
import SettingsTabs from "@/features/settings/components/SettingsTabs";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-bold text-slate-800">Settings</h1>
        <p className="text-xs text-slate-500">Configure your personal preferences and account security</p>
      </header>
      
      <SettingsTabs />
    </div>
  );
}