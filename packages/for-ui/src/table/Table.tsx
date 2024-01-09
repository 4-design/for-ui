import {
  FC,
  forwardRef,
  Fragment,
  MouseEvent,
  useCallback,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
  Row as RowType,
  SortingState,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table';
import { Checkbox } from '../checkbox';
import { Radio } from '../radio';
import { fsx } from '../system/fsx';
import { Text } from '../text';
import { SortableTableCellHead, TableCell } from './TableCell';
import { TablePagination } from './TablePagination';

export type TableProps<T extends RowData> = Pick<TableOptions<T>, 'data' | 'columns' | 'getRowId'> & {
  disablePagination?: boolean | undefined;
  defaultSortColumn?: ColumnSort;
  /** onRowClick is called when each row is clicked regardless of the type of table (selectable or not) */
  onRowClick?: (e: MouseEvent<HTMLTableRowElement>, row: RowType<T>) => void;
  /** The component used to render reach row. By default, Row is used. */
  rowRenderer?: FC<RowProps<T>>;
  className?: string;
  page?: number;
  pageCount?: number;
  pageSize?: number;
  defaultPage?: number;
  onChangePage?: (page: number) => void;
} & (
    | {
        /** If wanting to use selectable table, specify _onSelectRow_ or _onSelectRows_ exclusively */
        onSelectRow?: ((id: string | undefined) => void) | undefined;
        defaultSelectedRow?: string;
        onSelectRows?: never;
        defaultSelectedRows?: never;
      }
    | {
        onSelectRow?: never;
        defaultSelectedRow?: never;
        /** If wanting to use selectable table, specify _onSelectRow_ or _onSelectRows_ exclusively */
        onSelectRows?: ((ids: string[]) => void) | undefined;
        defaultSelectedRows?: string[];
      }
  );

export const Table = <T extends RowData>({
  data,
  disablePagination,
  defaultSortColumn,
  defaultSelectedRow,
  defaultSelectedRows,
  onSelectRow,
  onSelectRows,
  onRowClick,
  rowRenderer,
  getRowId,
  columns,
  pageCount,
  pageSize = 20,
  className,
  page,
  defaultPage = 1,
  onChangePage,
}: TableProps<T>) => {
  const tableId = useId();
  const [sorting, setSorting] = useState<SortingState>(defaultSortColumn ? [defaultSortColumn] : []);

  const defaultRowSelection = defaultSelectedRow
    ? { [defaultSelectedRow]: true }
    : (defaultSelectedRows || []).reduce((acc, id) => ({ ...acc, [id]: true }), {});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>(defaultRowSelection);
  const prevRowSelection = useRef<RowSelectionState>({});

  const onRowSelectionChange: OnChangeFn<RowSelectionState> = useCallback(
    (updater) => {
      // updater is designed to be passed to setState like `setState((prev) => updater(prev))`
      // However, due to the React "state is snapshot" design, it is hard to get current selection without using rowSelection.
      // This may lead to some bugs if setting state several times in 1 rendering.
      const row: RowSelectionState = typeof updater === 'function' ? updater(rowSelection) : updater;
      // If the same row is selected (when single selectable table), skip it
      if (prevRowSelection.current === row) {
        return;
      }
      setRowSelection(row);
      prevRowSelection.current = row;
      const selectedIds = Object.keys(row);
      onSelectRow?.(selectedIds[0]);
      onSelectRows?.(selectedIds);
    },
    [rowSelection, onSelectRow, onSelectRows],
  );

  const selectRow = useCallback(
    (row: RowType<T>) => {
      // If multiple seletable table, using toggle. Otherwise (singly selectable table) not using toggle.
      row.toggleSelected(onSelectRows ? undefined : true);
    },
    [onSelectRows],
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
              label={
                <Text aria-hidden={false} className={fsx(`hidden`)}>
                  すべての行を選択
                </Text>
              }
              className={fsx(`flex`)}
              checked={table.getIsAllRowsSelected()}
              indeterminate={!table.getIsAllRowsSelected() && table.getIsSomeRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          )}
        </Fragment>
      ),
      cell: ({ row }) => (
        <TableCell as="th" scope="row">
          {!!onSelectRows && (
            <Checkbox
              label={
                <Text aria-hidden={false} className={fsx(`hidden`)}>
                  行を選択
                </Text>
              }
              className={fsx(`flex`)}
              checked={row.getIsSelected()}
              onClick={(e) => {
                selectRow(row);
                e.stopPropagation();
              }}
            />
          )}
          {!!onSelectRow && (
            <Radio
              label={
                <Text aria-hidden={false} className={fsx(`hidden`)}>
                  行を選択
                </Text>
              }
              className={fsx(`flex`)}
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
    pageCount: disablePagination ? undefined : pageCount,
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

  useLayoutEffect(() => {
    table.setPageSize(pageSize);
  }, [table, pageSize]);

  return (
    <div className={fsx(`flex flex-col gap-2`, className)}>
      <TableFrame id={tableId}>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="table-row">
              {headerGroup.headers.map((header) => (
                <SortableTableCellHead
                  key={header.id}
                  scope="col"
                  nextSortingOrder={header.column.getNextSortingOrder()}
                  sortable={header.column.getCanSort()}
                  sorted={header.column.getIsSorted()}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{
                    width: header.column.columnDef.meta?.width,
                  }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </SortableTableCellHead>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <RowComponent
              key={row.id}
              row={row}
              selectable={!!(onSelectRow || onSelectRows)}
              onClick={
                (onSelectRow || onSelectRows || onRowClick) &&
                ((e, row) => {
                  selectRow(row);
                  onRowClick?.(e, row);
                })
              }
            />
          ))}
        </TableBody>
      </TableFrame>
      {!disablePagination && (
        <div className={fsx(`flex w-full justify-center`)}>
          <TablePagination
            page={page}
            defaultPage={defaultPage}
            onChangePage={onChangePage}
            table={table}
            aria-controls={tableId}
          />
        </div>
      )}
    </div>
  );
};

export const TableFrame = forwardRef<HTMLTableElement, JSX.IntrinsicElements['table']>(
  ({ className, ...props }, ref) => (
    <div className={fsx(`border-shade-light-default h-full w-full overflow-auto rounded border`, className)}>
      <table
        className={fsx(`ring-shade-light-default w-full border-separate border-spacing-0 ring-1`)}
        ref={ref}
        {...props}
      />
    </div>
  ),
);

export const TableBody = forwardRef<HTMLTableSectionElement, JSX.IntrinsicElements['tbody']>(
  ({ className, ...props }, ref) => (
    <tbody className={fsx(`text-shade-dark-default bg-shade-white-default`, className)} ref={ref} {...props} />
  ),
);

export const TableHead = forwardRef<HTMLTableSectionElement, JSX.IntrinsicElements['thead']>(
  ({ className, ...props }, ref) => (
    <thead
      className={fsx(
        `bg-shade-light-default border-shade-light-default z-table sticky top-0 table-header-group border-b`,
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

export const TableRow = forwardRef<HTMLTableRowElement, JSX.IntrinsicElements['tr']>(({ className, ...props }, ref) => (
  <tr
    className={fsx(
      `table-row [&:first-of-type>td]:border-t-0 [&:first-of-type>th]:border-t-0 [thead>&:last-of-type>td]:border-b [thead>&:last-of-type>th]:border-b`,
      className,
    )}
    ref={ref}
    {...props}
  />
));

export type RowProps<T extends RowData> = {
  row: RowType<T>;
  selectable: boolean;
  onClick?: (e: MouseEvent<HTMLTableRowElement>, row: RowType<T>) => void;
  className?: string;
};

export const Row = <T extends RowData>({ row, selectable, onClick, className }: RowProps<T>) => (
  <TableRow
    key={row.id}
    className={fsx([
      `transition-[background] duration-100`,
      (selectable || onClick) && 'hover:bg-shade-light-default cursor-pointer',
      className,
    ])}
    onClick={(e) => onClick?.(e, row)}
  >
    {row.getVisibleCells().map((cell) => (
      <Fragment key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Fragment>
    ))}
  </TableRow>
);

export { createColumnHelper } from '@tanstack/react-table';
