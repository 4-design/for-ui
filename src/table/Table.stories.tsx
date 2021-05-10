import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import tw from 'twin.macro'

import { Table } from './Table'
import { PersonData } from '../utils/makeData'
import { CellProps, Column } from 'react-table'
import { IconButton } from '../icon'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { TableCell } from './TableCell'
import makeData from '../utils/makeData'

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
          <MoreVertIcon />
        </IconButton>
      </TableCell>
    ),
  },
]

export const basic: Story = () => (
  <Table<PersonData> columns={basicColumns} data={makeData(1000)} />
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
          <MoreVertIcon />
        </IconButton>
      </TableCell>
    ),
  },
]

export const withImage: Story = () => (
  <Table<PersonData> columns={withImageColumns} data={makeData(1000)} />
)
