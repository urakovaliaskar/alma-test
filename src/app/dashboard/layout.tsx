"use client";

import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Container, Content } from "@/styles";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <Content>{children}</Content>
    </Container>
  );
};

export default DashboardLayout;
