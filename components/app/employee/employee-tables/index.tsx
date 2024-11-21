"use client";

import { DataTable } from "@/components/ui/common/table/DataTable";
import DataTableFilterBox from "@/components/ui/common/table/DataTableFilterBox";
import DataTableResetFilter from "@/components/ui/common/table/DataTableResetFilter";
import DataTableSearch from "@/components/ui/common/table/DataTableSearch";
import { Employee } from "@/constants/data";
import { columns } from "../employee-tables/Columns";
import {
  GENDER_OPTIONS,
  useEmployeeTableFilters,
} from "./useEmployeeTableFilters";

export default function EmployeeTable({
  data,
  totalData,
}: {
  data: Employee[];
  totalData: number;
}) {
  const {
    genderFilter,
    setGenderFilter,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setPage,
    setSearchQuery,
  } = useEmployeeTableFilters();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="name"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        <DataTableFilterBox
          filterKey="gender"
          title="Gender"
          options={GENDER_OPTIONS}
          setFilterValue={setGenderFilter}
          filterValue={genderFilter}
        />
        <DataTableResetFilter
          isFilterActive={isAnyFilterActive}
          onReset={resetFilters}
        />
      </div>
      <DataTable columns={columns} data={data} totalItems={totalData} />
    </div>
  );
}
