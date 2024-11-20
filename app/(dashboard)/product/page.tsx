import PageContainer from "@/components/layout/PageContainer";
import Heading from "@/components/ui/heading";

export const metadata = {
  title: "Dashboard: Products",
};

export default async function Page() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title="Products"
            description="Manage products (Server side table functionalities.)"
          />
        </div>
      </div>
    </PageContainer>
  );
}
