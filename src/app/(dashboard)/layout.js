import Sidebar from "@/shared/components/Sidebar"
import Navbar from "@/shared/components/Navbar"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="p-5 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  )
}