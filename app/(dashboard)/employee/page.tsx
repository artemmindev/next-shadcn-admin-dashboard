import { searchParamsCache } from "@/lib/searchParams";
import { SearchParams } from "nuqs/server";
import React from "react";
import EmployeeListingPage from "@/components/app/employee/EmployeeListing";

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: "Dashboard : Employees",
};

export default async function Page({ searchParams }: pageProps) {
  await searchParamsCache.parse(searchParams);

  return <EmployeeListingPage />;
}
