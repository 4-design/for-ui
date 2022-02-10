import React, { Fragment, useEffect, useState } from 'react'
import {
  useTable,
  usePagination,
  useRowSelect,
  TableOptions,
  Row,
  Hooks,
  CellProps,
  HeaderProps,
  IdType,
} from 'react-table'
import 'twin.macro'
import { Checkbox } from '../checkbox'
import { Radio } from '../radio'
import { TableCell } from './TableCell'

import { TablePagination } from './TablePagination'

export const Table = <T extends object>(
  props: TableOptions<T> & {
    onSelectRow?: (row: IdType<T> | undefined) => void
    onSelectRows?: (rows: IdType<T>[]) => void
  }
) => {
  const { columns, data, onSelectRow, onSelectRows } = props
  const [initialState, _] = useState({ pageIndex: 0 })

  if (onSelectRow && onSelectRows) {
    throw new Error(
      'You cannot specify both onSelectRow and onSelectRows at the same time.'
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const useRowSelectHook = (hooks: Hooks<any>) => {
    hooks.allColumns.push((columns) => [
      // Let's make a column for selection
      {
        id: '_selector',
        disableResizing: true,
        disableGroupBy: true,
        minWidth: 45,
        width: 45,
        maxWidth: 45,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Header: ({ getToggleAllRowsSelectedProps }: HeaderProps<any>) => (
          <>
            {!!onSelectRows && (
              <Checkbox value="required" {...getToggleAllRowsSelectedProps()} />
            )}
          </>
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Cell: ({ row, cell: { getCellProps } }: CellProps<any>) => (
          <TableCell {...getCellProps()}>
            {!!onSelectRows && (
              <Checkbox value="required" {...row.getToggleRowSelectedProps()} />
            )}

            {!!onSelectRow && (
              <Radio value="required" {...row.getToggleRowSelectedProps()} />
            )}
          </TableCell>
        ),
      },
      ...columns,
    ])
    hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
      // fix the parent group of the selection button to not be resizable
      const selectionGroupHeader = headerGroups[0].headers[0]
      selectionGroupHeader.canResize = false
    })
  }

  const hooks =
    onSelectRow || onSelectRows
      ? [usePagination, useRowSelect, useRowSelectHook]
      : [usePagination, useRowSelect]

  const instance = useTable<T>(
    {
      ...props,
      columns,
      data,
      stateReducer: (newState, action) => {
        if (!!onSelectRow && action.type === 'toggleRowSelected') {
          newState.selectedRowIds = {
            [action.id]: true,
          } as Record<IdType<T>, boolean>
        }

        return newState
      },

      initialState: initialState,
    },
    ...hooks
  )

  const {
    headerGroups,
    page,
    getTableProps,
    getTableBodyProps,
    prepareRow,
    state: { selectedRowIds },
  } = instance

  useEffect(() => {
    if (onSelectRow) {
      const keys = Object.keys(selectedRowIds)
      onSelectRow(keys.length > 0 ? keys[0] : undefined)
    }

    if (onSelectRows) {
      onSelectRows(Object.keys(selectedRowIds))
    }
  }, [onSelectRow, onSelectRows, selectedRowIds])

  const rowGenerate = (row: Row<T>) => {
    prepareRow(row)
    return (
      <tr
        {...row.getRowProps()}
        tw="border-b border-shade-medium-default transform transition duration-300 ease-in-out hover:bg-shade-light-default"
      >
        {row.cells.map((cell) => (
          <Fragment key={cell.getCellProps().key}>
            {cell.render('Cell')}
          </Fragment>
        ))}
      </tr>
    )
  }

  return (
    <>
      <table {...getTableProps()} tw="w-full">
        <thead tw="table-header-group">
          {headerGroups.map((headerGroup, i) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={i}
              tw="border-b border-shade-medium-default table-row align-middle"
            >
              {headerGroup.headers.map((column, j) => (
                <th
                  key={j}
                  tw="p-3 text-base text-shade-dark-default text-left table-cell whitespace-nowrap"
                  scope="col"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          tw="bg-shade-white-default text-shade-dark-default table-row-group"
        >
          {page.map((row: Row<T>) => rowGenerate(row))}
        </tbody>
      </table>

      <TablePagination instance={instance} />
    </>
  )
}
