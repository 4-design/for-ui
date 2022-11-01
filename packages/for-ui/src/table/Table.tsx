import { Fragment, useCallback, useState, useMemo, useEffect, useRef } from 'react';
import {
  ColumnDef,
  ColumnSort,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  RowData,
  RowSelectionState,
  SortingState,
  TableOptions,
  useReactTable,
  Row,
} from '@tanstack/react-table';
import clsx from 'clsx';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import { Checkbox } from '../checkbox';
import { Radio } from '../radio';
import { TableCell } from './TableCell';
import { TablePagination } from './TablePagination';

export type TableProps<T extends RowData> = Pick<TableOptions<T>, 'data' | 'columns' | 'getRowId'> & {
  disablePagination?: boolean | undefined;
  defaultSortColumn?: ColumnSort;
} & (
    | {
        /** If wanting to use selectable table, specify _onSelectRow_ or _onSelectRows_ exclusively */
        onSelectRow?: ((id: string | undefined) => void) | undefined;
        onSelectRows?: never;
      }
    | {
        onSelectRow?: never;
        /** If wanting to use selectable table, specify _onSelectRow_ or _onSelectRows_ exclusively */
        onSelectRows?: ((ids: string[]) => void) | undefined;
      }
  );

export const Table = <T extends RowData>(props: TableProps<T>) => {
  const { data, disablePagination, defaultSortColumn, onSelectRow, onSelectRows } = props;
  const [sorting, setSorting] = useState<SortingState>(defaultSortColumn ? [defaultSortColumn] : []);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const prevRowSelection = useRef<RowSelectionState>({});

  useEffect(() => {
    // In case rowSelection is not changed but only onSelectRow or onSelectRows is changed, callback should not be called.
    if (prevRowSelection.current === rowSelection) {
      return;
    }
    prevRowSelection.current = rowSelection;
    const selectedIds = Object.keys(rowSelection);
    onSelectRow?.(selectedIds[0]);
    onSelectRows?.(selectedIds);
  }, [rowSelection, onSelectRow, onSelectRows]);

  const selectRow = useCallback(
    (row: Row<T>) => {
      // If multiply seletable table, using toggle. Or if singly selectable table, not using toggle.
      row.toggleSelected(onSelectRows ? undefined : true);
    },
    [onSelectRows]
  );

  const columns = useMemo(() => {
    // Not selectable table
    if (!(onSelectRow || onSelectRows)) {
      return props.columns;
    }

    const selectColumn: ColumnDef<T> = {
      // FIXME: use useId instead
      id: 'select',
      meta: {
        minWidth: '20px',
        width: '20px',
        maxWidth: '20px',
      },
      header: ({ table }) => (
        <Fragment>
          {!!onSelectRows && (
            <Checkbox
              nopadding
              value="required"
              checked={table.getIsAllRowsSelected()}
              indeterminate={!table.getIsAllRowsSelected() && table.getIsSomeRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          )}
        </Fragment>
      ),
      cell: ({ row }) => (
        <TableCell>
          {!!onSelectRows && (
            <Checkbox
              nopadding
              value="required"
              checked={row.getIsSelected()}
              onClick={(e) => {
                selectRow(row);
                e.stopPropagation();
              }}
            />
          )}
          {!!onSelectRow && (
            <Radio
              nopadding
              size="small"
              value="required"
              checked={row.getIsSelected()}
              onClick={(e) => {
                selectRow(row);
                e.stopPropagation();
              }}
            />
          )}
        </TableCell>
      ),
    };
    return [selectColumn, ...props.columns];
  }, [props, onSelectRow, onSelectRows, selectRow]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      rowSelection,
    },
    getRowId: props.getRowId,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: !disablePagination ? getPaginationRowModel() : undefined,
    enableRowSelection: !!(onSelectRow || onSelectRows),
    enableMultiRowSelection: !!onSelectRows,
  });

  return (
    <>
      <table className="border-shade-light-default w-full border-separate border-spacing-0 rounded-sm border">
        <thead className="bg-shade-light-default table-header-group">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="table-row align-middle">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-shade-light-default text-shade-dark-default z-30 whitespace-nowrap border-b p-3 text-left text-base"
                  scope="col"
                  style={{
                    width: header.column.columnDef.meta?.width,
                    cursor: header.column.getIsSorted() ? 'pointer' : 'auto',
                  }}
                >
                  {header.column.getCanSort() ? (
                    <div
                      className={clsx([
                        'flex items-center',
                        header.column.getCanSort() && 'cursor-pointer select-none',
                      ])}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: <MdArrowUpward className="ml-1" />,
                        desc: <MdArrowDownward className="ml-1" />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  ) : (
                    <div className="flex items-center">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="bg-shade-white-default text-shade-dark-default">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={clsx([
                'border-shade-light-default hover:bg-shade-light-default border-b transition duration-300 ease-in-out',
                (onSelectRow || onSelectRows) && 'cursor-pointer',
              ])}
              onClick={() => {
                selectRow(row);
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <Fragment key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {!disablePagination && <TablePagination table={table} />}
    </>
  );
};
