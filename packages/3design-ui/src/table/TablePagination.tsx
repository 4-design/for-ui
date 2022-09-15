import { PropsWithChildren } from 'react'
import Pagination from '@mui/material/Pagination'
import { TableInstance } from 'react-table'

export function TablePagination<T extends object>({
  instance,
}: PropsWithChildren<{ instance: TableInstance<T> }>) {
  const { pageCount, gotoPage } = instance

  return (
    <div className="flex items-center justify-between border-shade-light-default bg-shade-white-default px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div />
        <div>
          <Pagination
            size="large"
            shape="rounded"
            count={pageCount}
            showFirstButton
            showLastButton
            onChange={(_, page: number) => gotoPage(page - 1)}
          />
        </div>
      </div>
    </div>
  )
}
