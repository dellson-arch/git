import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Wallet,
  FileBarChart,
  Briefcase,
  Settings,
} from "lucide-react"

export const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Employees",
    href: "/employees",
    icon: Users,
  },
  {
    title: "Attendance",
    href: "/attendance",
    icon: CalendarCheck,
  },
  {
    title: "Payroll",
    href: "/payroll",
    icon: Wallet,
  },
   {
    title: "Recruitment",
    href: "/recruitment",
    icon: Briefcase,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileBarChart,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]