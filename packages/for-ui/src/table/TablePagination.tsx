import Pagination from '@mui/material/Pagination';
import { RowData, Table } from '@tanstack/react-table';

export interface TablePaginationProps<T extends RowData> {
  table: Table<T>;
  defaultPage?: number;
  onChangePagination?: (page: number) => void;
}

export const TablePagination = <T extends RowData>({
  table,
  defaultPage = 1,
  onChangePagination,
}: TablePaginationProps<T>) => {
  const { getPageCount, setPageIndex } = table;

  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setPageIndex(page - 1);
    if (onChangePagination) {
      onChangePagination(page);
    }
  };

  return (
    <div className="border-shade-light-default bg-shade-white-default flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div />
        <div>
          <Pagination
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
