import { Suspense } from "react";
import PageContainer from "@/components/layout/PageContainer";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { SearchParams } from "nuqs/server";
import ProductListing from "@/components/app/product/ProductListing";
import DataTableSkeleton from "@/components/ui/table/DataTableSkeleton";
import ProductTableAction from "@/components/app/product/product-tables/ProductTableAction";
import { searchParamsCache, serialize } from "@/lib/searchParams";

export const metadata = {
  title: "Dashboard: Products",
};

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Page({
  searchParams
}:PageProps) {

  const parsedSearchParams = await searchParamsCache.parse(searchParams);

  const key = serialize({ ...parsedSearchParams });

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title="Products"
            description="Manage products (Server side table functionalities.)"
          />
        </div>
        <Separator />
        <ProductTableAction />
        <Suspense
          key={key}
          fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}
        >
          <ProductListing />
        </Suspense>
      </div>
    </PageContainer>
  );
}
