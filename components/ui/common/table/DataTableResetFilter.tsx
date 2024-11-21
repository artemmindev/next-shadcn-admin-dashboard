'use client';

import { Button } from '../../button';

type DataTableResetFilterProps = {
  isFilterActive: boolean;
  onReset: () => void;
};

const DataTableResetFilter = ({
  isFilterActive,
  onReset
}: DataTableResetFilterProps) => {
  return (
    <>
      {isFilterActive ? (
        <Button variant="outline" onClick={onReset}>
          Reset Filters
        </Button>
      ) : null}
    </>
  );
}

export default DataTableResetFilter;
