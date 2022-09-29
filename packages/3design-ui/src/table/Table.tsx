import * as React from 'react';
import {
  ColumnDef,
  ColumnSort,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  OnChangeFn,
  RowData,
  RowSelectionState,
  SortingState,
  TableOptions,
  useReactTable,
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

  onSelectRow?: ((id: string | undefined) => void) | undefined;
  onSelectRows?: ((ids: string[]) => void) | undefined;
};

export const Table = <T extends RowData>(props: TableProps<T>) => {
  const { data, disablePagination, defaultSortColumn } = props;
  const [sorting, setSorting] = React.useState<SortingState>(defaultSortColumn ? [defaultSortColumn] : []);
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

  if (props.onSelectRow && props.onSelectRows) {
    throw new Error('You cannot specify both onSelectRow and onSelectRows at the same time.');
  }

  const columns = React.useMemo(() => {
    if (props.onSelectRow || props.onSelectRows) {
      const selectColumn: ColumnDef<T> = {
        id: 'select',
        meta: {
          minWidth: '20px',
          width: '20px',
          maxWidth: '20px',
        },
        header: ({ table }) => (
          <React.Fragment>
            {!!props.onSelectRows && (
              <Checkbox
                nopadding
                size="small"
                value="required"
                checked={table.getIsAllRowsSelected()}
                indeterminate={table.getIsSomeRowsSelected()}
                onChange={table.getToggleAllRowsSelectedHandler()}
              />
            )}
          </React.Fragment>
        ),
        cell: ({ row }) => (
          <TableCell>
            {!!props.onSelectRows && (
              <Checkbox
                nopadding
                size="small"
                value="required"
                checked={row.getIsSelected()}
                indeterminate={row.getIsSomeSelected()}
                onChange={row.getToggleSelectedHandler()}
              />
            )}
            {!!props.onSelectRow && (
              <Radio
                nopadding
                size="small"
                value="required"
                checked={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
              />
            )}
          </TableCell>
        ),
      };

      return [selectColumn, ...props.columns];
    }

    return props.columns;
  }, [props]);

  const onSelectRow = React.useCallback(
    (row: RowSelectionState) => {
      const keys = Object.keys(row);
      if (props.onSelectRow) {
        props.onSelectRow(keys.length > 0 ? keys[0] : undefined);
      }

      if (props.onSelectRows) {
        props.onSelectRows(keys);
      }

      setRowSelection(row);
    },
    [setRowSelection, props]
  );

  const onRowSelectionChange = React.useCallback<OnChangeFn<RowSelectionState>>(
    (v) => {
      if (typeof v === 'function') {
        const updateRow = v(rowSelection);
        const oldRow = rowSelection;
        const newRow = Object.fromEntries(Object.entries(updateRow).filter(([k, _]) => k !== Object.keys(oldRow)[0]));
        onSelectRow(newRow);
      } else {
        throw new Error('You cannot specify both onSelectRow and onSelectRows at the same time.');
      }
    },
    [onSelectRow, rowSelection]
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      rowSelection,
    },
    getRowId: props.getRowId,
    onRowSelectionChange,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: !disablePagination ? getPaginationRowModel() : undefined,
  });

  return (
    <>
      <table className="w-full border-separate border-spacing-0 rounded-sm border border-shade-light-default">
        <thead className="table-header-group bg-shade-light-default">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="table-row align-middle">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="z-30 whitespace-nowrap border-b border-shade-light-default p-3 text-left text-base text-shade-dark-default"
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
                'border-b border-shade-light-default transition duration-300 ease-in-out hover:bg-shade-light-default',
                (props.onSelectRow || props.onSelectRows) && 'cursor-pointer',
              ])}
            >
              {row.getVisibleCells().map((cell) => (
                <React.Fragment key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {!disablePagination && <TablePagination table={table} />}
    </>
  );
};
