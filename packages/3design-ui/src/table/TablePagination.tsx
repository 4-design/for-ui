import Pagination from '@mui/material/Pagination';
import { RowData, Table } from '@tanstack/react-table';

export const TablePagination = <T extends RowData>({ table }: { table: Table<T> }) => {
  const { getPageCount, setPageIndex } = table;

  return (
    <div className="flex items-center justify-between border-shade-light-default bg-shade-white-default px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div />
        <div>
          <Pagination
            size="large"
            shape="rounded"
            count={getPageCount()}
            showFirstButton
            showLastButton
            onChange={(_, page: number) => setPageIndex(page - 1)}
          />
        </div>
      </div>
    </div>
  );
};
