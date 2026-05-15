// DashboardLayout.js
import Sidebar from "@/shared/components/Sidebar";
import Navbar from "@/shared/components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0"> {/* min-w-0 is critical for flex child overflow */}
        <Navbar />
        <main className="p-5 flex-1 overflow-y-auto overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}