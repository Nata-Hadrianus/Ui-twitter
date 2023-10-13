// Default.tsx
import { Sidebar } from "../componentes/Sidebar";
import { Outlet } from "react-router-dom";

export function Default() {
  return (
    <div className="layout">
      <Sidebar /> 
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
