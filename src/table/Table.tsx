import React, { PropsWithChildren, useState } from 'react'
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md'
import {
  useTable,
  usePagination,
  TableOptions,
  Row,
  useSortBy,
} from 'react-table'
import 'twin.macro'

import { TablePagination } from './TablePagination'

const hooks = [useSortBy, usePagination]

export function Table<T extends object>(
  props: PropsWithChildren<TableOptions<T>>
) {
  const { columns, data } = props
  const [initialState, _] = useState({
    sortBy: props.initialState?.sortBy || [],
    pageIndex: 0,
  })
  const instance = useTable<T>(
    {
      ...props,
      columns,
      data,
      initialState: initialState,
    },
    ...hooks
  )

  const { headerGroups, page, getTableProps, getTableBodyProps, prepareRow } =
    instance

  const rowGenerate = (row: Row<T>) => {
    prepareRow(row)
    return (
      <tr
        {...row.getRowProps()}
        tw="border-b-2 border-low transform transition duration-300 ease-in-out hover:bg-gray-bg"
      >
        {row.cells.map((cell) => (
          <>{cell.render('Cell')}</>
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
              tw="border-b-2 border-low table-row align-middle"
            >
              {headerGroup.headers.map((column, j) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={j}
                  tw="p-3 font-bold text-base text-high text-left table-cell whitespace-nowrap"
                  scope="col"
                >
                  <div tw="flex items-center ">
                    {column.render('Header')}
                    {column.canSort &&
                      (() => {
                        return (
                          <div>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <MdArrowDownward />
                              ) : (
                                <MdArrowUpward />
                              )
                            ) : (
                              ''
                            )}
                          </div>
                        )
                      })()}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} tw="bg-white text-high table-row-group">
          {page.map((row: Row<T>) => rowGenerate(row))}
        </tbody>
      </table>

      <TablePagination instance={instance} />
    </>
  )
}
