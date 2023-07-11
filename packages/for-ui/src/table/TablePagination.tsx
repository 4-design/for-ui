import Pagination from '@mui/material/Pagination';
import { RowData, Table } from '@tanstack/react-table';

export interface TablePaginationProps<T extends RowData> {
  table: Table<T>;
  page?: number;
  defaultPage?: number;
  onChangePagination?: (page: number) => void;
}

export const TablePagination = <T extends RowData>({
  table,
  page,
  defaultPage = 1,
  onChangePagination,
}: TablePaginationProps<T>) => {
  const { getPageCount, setPageIndex } = table;

  const handleChange = (_: React.ChangeEvent<unknown>, p: number) => {
    if (onChangePagination) {
      onChangePagination(p);
    }

    if (!page) {
      setPageIndex(p - 1);
    }
  };

  return (
    <div className="border-shade-light-default bg-shade-white-default flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div />
        <div>
          <Pagination
            page={page}
            defaultPage={defaultPage}
            size="large"
            shape="rounded"
            count={getPageCount()}
            showFirstButton
            showLastButton
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
