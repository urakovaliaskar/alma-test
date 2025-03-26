"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Container,
  Sidebar,
  Content,
  Title,
  SearchFilterContainer,
  PageButton,
  Pagination,
  SearchInput,
  StatusDropdown,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/styles";

const leadsData = [
  {
    name: "Jorge Ruiz",
    submitted: "02/02/2024, 2:45 PM",
    status: "PENDING",
    country: "Mexico",
  },
  {
    name: "Bahar Zamir",
    submitted: "02/02/2024, 2:45 PM",
    status: "PENDING",
    country: "Mexico",
  },
  {
    name: "Mary Lopez",
    submitted: "02/02/2024, 2:45 PM",
    status: "PENDING",
    country: "Brazil",
  },
  {
    name: "Li Zijin",
    submitted: "02/02/2024, 2:45 PM",
    status: "PENDING",
    country: "South Korea",
  },
  {
    name: "Mark Antonov",
    submitted: "02/02/2024, 2:45 PM",
    status: "PENDING",
    country: "Russia",
  },
  {
    name: "Jane Ma",
    submitted: "02/02/2024, 2:45 PM",
    status: "PENDING",
    country: "Mexico",
  },
  {
    name: "Anand Jain",
    submitted: "02/02/2024, 2:45 PM",
    status: "REACHED_OUT",
    country: "Mexico",
  },
  {
    name: "Anna Voronova",
    submitted: "02/02/2024, 2:45 PM",
    status: "PENDING",
    country: "France",
  },
  {
    name: "Judith Sorrow",
    submitted: "02/02/2025, 3:45 PM",
    status: "PENDING",
    country: "England",
  },
];

const LeadsPage = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [leads, setLeads] = useState(leadsData);
  const [editingStatusIndex, setEditingStatusIndex] = useState<number | null>(null);

  const itemsPerPage = 8;
  const filteredLeads = leads.filter(
    (lead) =>
      (statusFilter === "" || lead.status === statusFilter) &&
      (searchQuery === "" ||
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleLeads = filteredLeads.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3;
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const formatStatus = (status: string) => {
    if (status === "PENDING") return "Pending";
    if (status === "REACHED_OUT") return "Reached Out";
    return status;
  };

  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedLeads = [...leads];
    updatedLeads[index].status = newStatus;
    setLeads(updatedLeads);
    setEditingStatusIndex(null);
  };

  return (
    <Container>
      <Sidebar>
        <Image src="/logo.png" alt="Logo" width={100} height={45} />
        <strong>Leads</strong>
        <span>Settings</span>
      </Sidebar>
      <Content>
        <Title>Leads</Title>
        <SearchFilterContainer>
          <SearchInput
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <StatusDropdown
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Status</option>
            <option value="PENDING">Pending</option>
            <option value="REACHED_OUT">Reached Out</option>
          </StatusDropdown>
        </SearchFilterContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>Name  &#8595;</TableHeader>
              <TableHeader>Submitted  &#8595;</TableHeader>
              <TableHeader>Status  &#8595;</TableHeader>
              <TableHeader>Country  &#8595;</TableHeader>
            </tr>
          </thead>
          <tbody>
            {visibleLeads.map((lead, index) => (
              <TableRow key={index}>
                <TableCell>{lead.name}</TableCell>
                <TableCell>{lead.submitted}</TableCell>
                <TableCell>
                  {editingStatusIndex === index ? (
                    <select
                      value={lead.status}
                      onChange={(e) =>
                        handleStatusChange(startIndex + index, e.target.value)
                      }
                    >
                      <option value="PENDING">Pending</option>
                      <option value="REACHED_OUT">Reached Out</option>
                    </select>
                  ) : (
                    <button
                      onClick={() => setEditingStatusIndex(index)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      {formatStatus(lead.status)}
                    </button>
                  )}
                </TableCell>
                <TableCell>{lead.country}</TableCell>
              </TableRow>
            ))}
          </tbody>
          {filteredLeads.length > itemsPerPage && (
            <tfoot>
              <TableRow>
                <TableFooter colSpan={4}>
                  <Pagination>
                    <PageButton
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={currentPage === 1 ? "disabled" : ""}
                    >
                      {"<"}
                    </PageButton>
                    {getPaginationNumbers().map((page) => (
                      <PageButton
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={page === currentPage ? "active" : ""}
                      >
                        {page}
                      </PageButton>
                    ))}
                    <PageButton
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={currentPage === totalPages ? "disabled" : ""}
                    >
                      {">"}
                    </PageButton>
                  </Pagination>
                </TableFooter>
              </TableRow>
            </tfoot>
          )}
        </Table>
      </Content>
    </Container>
  );
};

export default LeadsPage;
