import { FC, Fragment, useCallback, useState, useMemo, useRef, MouseEvent } from 'react';
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
  OnChangeFn,
  Row as RowType,
} from '@tanstack/react-table';
import { fsx } from '../system/fsx';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import { Checkbox } from '../checkbox';
import { Radio } from '../radio';
import { TableCell } from './TableCell';
import { TablePagination } from './TablePagination';

export type TableProps<T extends RowData> = Pick<TableOptions<T>, 'data' | 'columns' | 'getRowId'> & {
  disablePagination?: boolean | undefined;
  defaultSortColumn?: ColumnSort;
  /** onRowClick is called when each row is clicked regardless of the type of table (selectable or not) */
  onRowClick?: (e: MouseEvent<HTMLTableRowElement>, row: RowType<T>) => void;
  /** The component used to render reach row. By default, Row is used. */
  rowRenderer?: FC<RowProps<T>>;
  className?: string;
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

export const Table = <T extends RowData>({
  data,
  disablePagination,
  defaultSortColumn,
  onSelectRow,
  onSelectRows,
  onRowClick,
  rowRenderer,
  getRowId,
  columns,
  className,
}: TableProps<T>) => {
  // const { data, disablePagination, defaultSortColumn, onSelectRow, onSelectRows, onRowClick, rowRenderer } = props;
  const [sorting, setSorting] = useState<SortingState>(defaultSortColumn ? [defaultSortColumn] : []);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const prevRowSelection = useRef<RowSelectionState>({});

  const onRowSelectionChange: OnChangeFn<RowSelectionState> = useCallback(
    (updater) => {
      // updater is designed to be passed to setState like `setState((prev) => updater(prev))`
      // However, due to the React "state is snapshot" design, it is hard to get current selection without using rowSelection.
      // This may lead to some bugs if setting state several times in 1 rendering.
      const row: RowSelectionState = typeof updater === 'function' ? updater(rowSelection) : updater;
      // If selected the same row (when single selectable table), skip it
      if (prevRowSelection.current === row) {
        return;
      }
      setRowSelection(row);
      prevRowSelection.current = row;
      const selectedIds = Object.keys(row);
      onSelectRow?.(selectedIds[0]);
      onSelectRows?.(selectedIds);
    },
    [rowSelection, onSelectRow, onSelectRows]
  );

  const selectRow = useCallback(
    (row: RowType<T>) => {
      // If multiply seletable table, using toggle. Or if singly selectable table, not using toggle.
      row.toggleSelected(onSelectRows ? undefined : true);
    },
    [onSelectRows]
  );

  const RowComponent: FC<RowProps<T>> = rowRenderer || Row;

  const selectableColumns = useMemo(() => {
    // Not selectable table
    if (!(onSelectRow || onSelectRows)) {
      return columns;
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
    return [selectColumn, ...columns];
  }, [onSelectRow, onSelectRows, selectRow, columns]);

  const table = useReactTable({
    data,
    columns: selectableColumns,
    state: {
      sorting,
      rowSelection,
    },
    getRowId,
    onRowSelectionChange,
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
      <table
        className={fsx(
          'border-shade-light-default w-full border-separate border-spacing-0 rounded-sm border',
          className
        )}
      >
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
                      className={fsx(['flex items-center', header.column.getCanSort() && 'cursor-pointer select-none'])}
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
            <RowComponent
              key={row.id}
              row={row}
              selectable={!!(onSelectRow || onSelectRows)}
              onClick={(e) => {
                selectRow(row);
                onRowClick?.(e, row);
              }}
            />
          ))}
        </tbody>
      </table>

      {!disablePagination && <TablePagination table={table} />}
    </>
  );
};

export type RowProps<T extends RowData> = {
  row: RowType<T>;
  selectable: boolean;
  onClick: (e: MouseEvent<HTMLTableRowElement>, row: RowType<T>) => void;
  className?: string;
};

export const Row = <T extends RowData>({ row, selectable, onClick, className }: RowProps<T>) => (
  <tr
    key={row.id}
    className={fsx([
      'border-shade-light-default border-b transition duration-300 ease-in-out',
      selectable && 'hover:bg-shade-light-default cursor-pointer',
      className,
    ])}
    onClick={(e) => onClick(e, row)}
  >
    {row.getVisibleCells().map((cell) => (
      <Fragment key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Fragment>
    ))}
  </tr>
);

export { createColumnHelper } from '@tanstack/react-table';
