"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sidebar as StyledSidebar, UserProfile, Avatar, UserName } from "@/styles";

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <StyledSidebar>
      <Image src="/logo.png" alt="Logo" width={100} height={45} />
      <Link
        href="/dashboard"
        style={{
          fontWeight: pathname === "/dashboard" ? "bold" : "normal",
        }}
      >
        Leads
      </Link>
      <Link
        href="/settings"
        style={{
          fontWeight: pathname === "/settings" ? "bold" : "normal",
        }}
      >
        Settings
      </Link>
      <UserProfile>
        <Avatar>A</Avatar>
        <UserName>Admin</UserName>
      </UserProfile>
    </StyledSidebar>
  );
};
