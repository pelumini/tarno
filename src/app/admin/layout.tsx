import React from "react";
import AdminNav from "./_components/AdminNav";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Tarno Admin",
  description: "Tarno Admin Dashboard",
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <AdminNav />
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
