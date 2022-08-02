import React, { Fragment, useEffect, useState } from 'react'
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md'
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
  PluginHook,
  useSortBy,
  UseSortByState,
} from 'react-table'
import tw, { TwStyle } from 'twin.macro'
import { Checkbox } from '../checkbox'
import { Radio } from '../radio'
import { TableCell } from './TableCell'

import { TablePagination } from './TablePagination'

export type TableProps<T extends object> = TableOptions<T> & {
  onSelectRow?: ((row: IdType<T> | undefined) => void) | undefined
  onSelectRows?: ((rows: IdType<T>[]) => void) | undefined
  disablePagination?: boolean | undefined
  sortBy?: UseSortByState<T>['sortBy']
  twin?: TwStyle
}

export const Table = <T extends object>(props: TableProps<T>) => {
  const {
    columns,
    data,
    onSelectRow,
    onSelectRows,
    disablePagination = false,
    twin,
  } = props
  const [initialState, _] = useState({
    sortBy: props.sortBy || [],
    pageIndex: 0,
  })

  if (onSelectRow && onSelectRows) {
    throw new Error(
      'You cannot specify both onSelectRow and onSelectRows at the same time.'
    )
  }

  const useRowSelectHook = (hooks: Hooks<T>) => {
    hooks.allColumns.push((columns) => [
      {
        id: '_selector',
        disableGroupBy: true,
        minWidth: 20,
        width: 20,
        maxWidth: 20,
        Header: ({ getToggleAllRowsSelectedProps }: HeaderProps<T>) => (
          <Fragment>
            {!!onSelectRows && (
              <Checkbox
                nopadding
                size="small"
                value="required"
                {...getToggleAllRowsSelectedProps()}
              />
            )}
          </Fragment>
        ),
        Cell: ({ row, cell }: CellProps<T>) => (
          <TableCell
            {...cell.getCellProps({
              style: {
                minWidth: cell.column.minWidth,
                width: cell.column.width,
                maxWidth: cell.column.maxWidth,
              },
            })}
          >
            {!!onSelectRows && (
              <Checkbox
                nopadding
                size="small"
                value="required"
                {...row.getToggleRowSelectedProps()}
              />
            )}

            {!!onSelectRow && (
              <Radio
                nopadding
                size="small"
                value="required"
                {...row.getToggleRowSelectedProps()}
              />
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

  let hooks: PluginHook<T>[] = []
  if (props.sortBy) hooks = [...hooks, useSortBy]
  if (!disablePagination) {
    hooks = [...hooks, usePagination]
  }

  if (onSelectRow || onSelectRows) {
    hooks = [...hooks, useRowSelect, useRowSelectHook]
  }

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
    rows,
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
        css={[
          tw`border-b border-shade-medium-default transform transition duration-300 ease-in-out hover:bg-shade-light-default`,
          (onSelectRow || onSelectRows) && tw`cursor-pointer`,
        ]}
        onClick={() => {
          if (onSelectRow || onSelectRows) row.toggleRowSelected()
        }}
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
      <table {...getTableProps()} css={[tw`w-full`, twin]}>
        <thead tw="table-header-group bg-shade-white-default">
          {headerGroups.map((headerGroup, i) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={i}
              tw="border-b border-shade-medium-default table-row align-middle"
            >
              {headerGroup.headers.map((column, j) => (
                <th
                  tw="p-3 text-base text-shade-dark-default text-left whitespace-nowrap bg-shade-white-default z-30"
                  scope="col"
                  {...column.getHeaderProps({
                    style: {
                      minWidth: column.minWidth,
                      width: column.width,
                      maxWidth: column.maxWidth,
                    },
                    ...(column.getSortByToggleProps
                      ? column.getSortByToggleProps()
                      : {}),
                  })}
                  key={j}
                >
                  {column.canSort
                    ? (() => {
                        return (
                          <div tw="flex items-center ">
                            {column.render('Header')}
                            <div>
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <MdArrowDownward tw="ml-1" />
                                ) : (
                                  <MdArrowUpward tw="ml-1" />
                                )
                              ) : null}
                            </div>
                          </div>
                        )
                      })()
                    : column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          tw="bg-shade-white-default text-shade-dark-default"
        >
          {disablePagination ? (
            <>{rows.map((row: Row<T>) => rowGenerate(row))}</>
          ) : (
            <>{page.map((row: Row<T>) => rowGenerate(row))}</>
          )}
        </tbody>
      </table>

      {!disablePagination && <TablePagination instance={instance} />}
    </>
  )
}
