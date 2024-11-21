import { fakeUsers, User } from "@/constants/mock-api";
import EmployeeForm from "./EmployeeForm";
import PageContainer from "@/components/layout/PageContainer";
import { notFound } from "next/navigation";

type TEmployeeViewProps = {
  employeeId: string;
};

export default async function EmployeeViewPage({
  employeeId,
}: TEmployeeViewProps) {
  let user = null;
  let pageTitle = "Create New User";

  if (employeeId !== "new") {
    const data = await fakeUsers.getUserById(Number(employeeId));
    user = data.user as User;

    if (!user) notFound();

    pageTitle = `Employee Information`;
  }
  return (
    <PageContainer>
      <EmployeeForm initialData={user} pageTitle={pageTitle} />
    </PageContainer>
  );
}
