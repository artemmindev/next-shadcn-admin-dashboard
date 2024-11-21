import { Suspense } from "react";
import { SearchParams } from "nuqs/server";
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import PageContainer from "@/components/layout/PageContainer";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import ProductListing from "@/components/app/product/ProductListing";
import DataTableSkeleton from "@/components/ui/common/table/DataTableSkeleton";
import ProductTableAction from "@/components/app/product/product-tables/ProductTableAction";
import { searchParamsCache, serialize } from "@/lib/searchParams";
import { cn } from '@/lib/utils';

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
          <Link
            href="/product/new"
            className={cn(buttonVariants(), 'text-xs md:text-sm')}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
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
