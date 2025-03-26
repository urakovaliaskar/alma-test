import { NextResponse } from "next/server";

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

export async function GET() {
  return NextResponse.json(leadsData);
}
