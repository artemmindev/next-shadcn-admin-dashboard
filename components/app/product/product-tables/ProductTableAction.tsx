"use client";

import DataTableFilterBox from "@/components/ui/common/table/DataTableFilterBox";
import DataTableResetFilter from "@/components/ui/common/table/DataTableResetFilter";
import DataTableSearch from "@/components/ui/common/table/DataTableSearch";
import {
  CATEGORY_OPTIONS,
  useProductTableFilters,
} from "./UseProductTableFilters";

const ProductTableAction = () => {
  const {
    categoriesFilter,
    setCategoriesFilter,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setPage,
    setSearchQuery,
  } = useProductTableFilters();
  return (
    <div className="flex flex-wrap items-center gap-4">
      <DataTableSearch
        searchKey="name"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setPage={setPage}
      />
      <DataTableFilterBox
        filterKey="categories"
        title="Categories"
        options={CATEGORY_OPTIONS}
        setFilterValue={setCategoriesFilter}
        filterValue={categoriesFilter}
      />
      <DataTableResetFilter
        isFilterActive={isAnyFilterActive}
        onReset={resetFilters}
      />
    </div>
  );
};

export default ProductTableAction;
