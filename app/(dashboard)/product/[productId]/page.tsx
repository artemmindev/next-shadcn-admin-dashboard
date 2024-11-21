import FormCardSkeleton from "@/components/ui/common/FormCardSkeleton";
import PageContainer from "@/components/layout/PageContainer";
import { Suspense } from "react";
import ProductView from "@/components/app/product/ProductView";

export const metadata = {
  title: "Dashboard : Product View",
};

type PageProps = { params: Promise<{ productId: string }> };

const ProductViewPage = async ({ params }: PageProps) => {
  const { productId } = await params;

  return (
    <PageContainer scrollable>
      <div className="flex-1 space-y-4">
        <Suspense fallback={<FormCardSkeleton />}>
          <ProductView productId={productId} />
        </Suspense>
      </div>
    </PageContainer>
  );
};

export default ProductViewPage;
