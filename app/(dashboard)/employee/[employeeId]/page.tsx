import EmployeeViewPage from "@/components/app/employee/EmployeeView";

export const metadata = {
  title: "Dashboard : Employee View",
};

type TProductViewProps = {
  params: Promise<{ employeeId: string }>;
};

export default async function Page({ params }: TProductViewProps) {
  const { employeeId } = await params;

  return <EmployeeViewPage employeeId={employeeId} />;
}
