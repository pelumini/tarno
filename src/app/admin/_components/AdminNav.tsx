"use client";

import Link from "next/link";
import React from "react";
import AdminNavItem from "./AdminNavItem";
import { usePathname } from "next/navigation";
import {
  MdDashboard,
  MdDns,
  MdFormatListBulleted,
  MdLibraryAdd,
} from "react-icons/md";
import Container from "@/components/Container";
import { IconType } from "react-icons";

type AdminNavLinks = {
  href: string;
  label: string;
  icon: IconType;
  selected: boolean;
};

const adminNavLinks: AdminNavLinks[] = [
  {
    href: "/admin",
    label: "Summary",
    icon: MdDashboard,
    selected: false,
  },
  {
    href: "/admin/add-products",
    label: "Add Products",
    icon: MdLibraryAdd,
    selected: false,
  },
  {
    href: "/admin/manage-products",
    label: "Manage Products",
    icon: MdDns,
    selected: false,
  },
  {
    href: "/admin/manage-orders",
    label: "Manage Orders",
    icon: MdFormatListBulleted,
    selected: false,
  },
] as const;

const AdminNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
      <Container>
        <div
          className="flex flex-row items-center justify-between 
            md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap"
        >
          {adminNavLinks.map((links, index) => (
            <Link key={index} href={links.href}>
              <AdminNavItem
                label={links.label}
                icon={links.icon}
                selected={pathname === links.href}
              />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AdminNav;
