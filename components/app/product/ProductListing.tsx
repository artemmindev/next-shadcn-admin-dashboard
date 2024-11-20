import { Product } from "@/constants/data";
import { fakeProducts } from "@/constants/mock-api";
import { DataTable as ProductTable } from "@/components/ui/table/DataTable";
import { columns } from "@/components/app/product/product-tables/Columns";
import { searchParamsCache } from "@/lib/searchParams";

const ProductListing = async () => {
  const page = searchParamsCache.get("page");
  const search = searchParamsCache.get("q");
  const pageLimit = searchParamsCache.get("limit");
  const categories = searchParamsCache.get("categories");

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(categories && { categories: categories }),
  };

  const data = await fakeProducts.getProducts(filters);
  const totalProducts = data.total_products;
  const products: Product[] = data.products;

  return (
    <ProductTable
      columns={columns}
      data={products}
      totalItems={totalProducts}
    />
  );
};

export default ProductListing;
