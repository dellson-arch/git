// src/shared/ui/PageHeader.js
import Breadcrumbs from "./Breadcrumbs";

export default function PageHeader({ title, children }) {
  return (
    <div className="flex justify-between items-end mb-8">
      <div>
        <Breadcrumbs />
        <h2 className="text-2xl font-black text-slate-800 tracking-tight">
          {title}
        </h2>
      </div>
      {/* Action buttons (like "Add Record") go here */}
      <div className="flex gap-3">
        {children}
      </div>
    </div>
  );
}