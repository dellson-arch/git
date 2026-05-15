// src/shared/ui/Breadcrumbs.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Split path into segments and filter out empty strings
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-4">
      {/* Home Link */}
      <Link 
        href="/dashboard" 
        className="text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1"
      >
        <Home size={12} />
        <span>Dashboard</span>
      </Link>

      {pathSegments.map((segment, index) => {
        // Build the URL for the breadcrumb step
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === pathSegments.length - 1;
        
        // Don't repeat "Dashboard" if it's already the home link
        if (segment.toLowerCase() === "dashboard") return null;

        return (
          <div key={href} className="flex items-center gap-2">
            <ChevronRight size={12} className="text-slate-300" />
            {isLast ? (
              <span className="text-slate-800 cursor-default">
                {segment.replace(/-/g, " ")}
              </span>
            ) : (
              <Link 
                href={href} 
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                {segment.replace(/-/g, " ")}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}