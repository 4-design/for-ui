import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { MdMoreVert } from 'react-icons/md'
import { CellProps, Column } from 'react-table'
import tw from 'twin.macro'

import { IconButton } from '../icon'
import { PersonData, StaticPersonData } from '../utils/makeData'
import { Table } from './Table'
import { TableCell } from './TableCell'

export default {
  title: 'Atom/Table',
  component: Table,
} as Meta

const basicColumns: Array<Column<PersonData>> = [
  {
    Header: 'ID',
    Cell: ({ cell: { row, getCellProps } }: CellProps<PersonData>) => (
      <TableCell {...getCellProps()} component="th">
        {row.id}
      </TableCell>
    ),
  },
  {
    Header: '名前',
    accessor: 'firstName',
    Cell: ({ cell: { value, getCellProps } }: CellProps<PersonData>) => (
      <TableCell {...getCellProps()}>{value}</TableCell>
    ),
  },
  {
    Header: '年齢',
    accessor: 'age',
    Cell: ({ cell: { value, getCellProps } }: CellProps<PersonData>) => (
      <TableCell {...getCellProps()}>{value}</TableCell>
    ),
  },
  {
    Header: '訪問',
    accessor: 'visits',
    Cell: ({ cell: { value, getCellProps } }: CellProps<PersonData>) => (
      <TableCell {...getCellProps()}>{value}</TableCell>
    ),
  },
  {
    Header: '',
    accessor: 'status',
    Cell: ({ cell: { getCellProps } }) => (
      <TableCell {...getCellProps()} twin={tw`px-0 text-center`}>
        <IconButton>
          <MdMoreVert />
        </IconButton>
      </TableCell>
    ),
  },
]

export const Base: Story = () => (
  <Table<PersonData> columns={basicColumns} data={StaticPersonData} />
)

const withImageColumns: Array<Column<PersonData>> = [
  {
    Header: '画像',
    accessor: 'image',
    Cell: ({ cell: { value, getCellProps } }: CellProps<PersonData>) => (
      <TableCell {...getCellProps()} component="th">
        <img height="68" tw="my-8 shadow-image" src={value} alt="logo" />
      </TableCell>
    ),
  },
  {
    Header: '苗字',
    accessor: 'lastName',
    Cell: ({ cell: { value, getCellProps } }: CellProps<PersonData>) => (
      <TableCell {...getCellProps()}>{value}</TableCell>
    ),
  },
  {
    Header: '名前',
    accessor: 'firstName',
    Cell: ({ cell: { value, getCellProps } }: CellProps<PersonData>) => (
      <TableCell {...getCellProps()}>{value}</TableCell>
    ),
  },
  {
    Header: '年齢',
    accessor: 'age',
    Cell: ({ cell: { value, getCellProps } }: CellProps<PersonData>) => (
      <TableCell {...getCellProps()}>{value}</TableCell>
    ),
  },
  {
    Header: '訪問',
    accessor: 'visits',
    Cell: ({ cell: { value, getCellProps } }: CellProps<PersonData>) => (
      <TableCell {...getCellProps()}>{value}</TableCell>
    ),
  },
  {
    Header: '',
    accessor: 'status',
    width: 50,
    Cell: ({ cell: { getCellProps } }) => (
      <TableCell {...getCellProps()} twin={tw`px-0`}>
        <IconButton>
          <MdMoreVert />
        </IconButton>
      </TableCell>
    ),
  },
]

export const WithImage: Story = () => (
  <Table<PersonData> columns={withImageColumns} data={StaticPersonData} />
)

const withSelectColumns: Array<Column<PersonData>> = [
  {
    id: 'id',
    Header: 'id',
    accessor: 'id',
    Cell: ({ cell: { value, getCellProps } }: CellProps<PersonData>) => (
      <TableCell {...getCellProps()}>{value}</TableCell>
    ),
  },
  {
    Header: '苗字',
    accessor: 'lastName',
    Cell: ({ cell: { value, getCellProps } }: CellProps<PersonData>) => (
      <TableCell {...getCellProps()}>{value}</TableCell>
    ),
  },
  {
    Header: '名前',
    accessor: 'firstName',
    Cell: ({ cell: { value, getCellProps } }: CellProps<PersonData>) => (
      <TableCell {...getCellProps()}>{value}</TableCell>
    ),
  },
  {
    Header: '年齢',
    accessor: 'age',
    Cell: ({ cell: { value, getCellProps } }: CellProps<PersonData>) => (
      <TableCell {...getCellProps()}>{value}</TableCell>
    ),
  },
  {
    Header: '訪問',
    accessor: 'visits',
    Cell: ({ cell: { value, getCellProps } }: CellProps<PersonData>) => (
      <TableCell {...getCellProps()}>{value}</TableCell>
    ),
  },
  {
    Header: '',
    accessor: 'status',
    width: 50,
    Cell: ({ cell: { getCellProps } }) => (
      <TableCell {...getCellProps()} twin={tw`px-0`}>
        <IconButton>
          <MdMoreVert />
        </IconButton>
      </TableCell>
    ),
  },
]

export const WithSelect: Story = () => (
  <Table<PersonData>
    columns={withSelectColumns}
    data={StaticPersonData}
    getRowId={(row) => row.id.toString()}
    onSelectRow={(rows) => console.info('rows', rows)}
  />
)

export const WithSelectMultiple: Story = () => (
  <Table<PersonData>
    columns={withSelectColumns}
    data={StaticPersonData}
    getRowId={(row) => row.id.toString()}
    onSelectRows={(rows) => console.info('rows', rows)}
  />
)
