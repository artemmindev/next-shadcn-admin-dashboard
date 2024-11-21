"use client";

import { DataTable } from "@/components/ui/common/table/DataTable";
import { Employee } from "@/constants/data";
import { columns } from "../employee-tables/Columns";

export default function EmployeeTable({
  data,
  totalData,
}: {
  data: Employee[];
  totalData: number;
}) {
  return (
    <div className="space-y-4">
      <DataTable columns={columns} data={data} totalItems={totalData} />
    </div>
  );
}
