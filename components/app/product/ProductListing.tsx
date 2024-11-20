import { Product } from "@/constants/data";
import { fakeProducts } from "@/constants/mock-api";
import { DataTable as ProductTable } from "@/components/ui/table/DataTable";
import { columns } from "@/components/app/product/product-tables/Columns";

const ProductListing = async () => {
  const data = await fakeProducts.getProducts({});
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
