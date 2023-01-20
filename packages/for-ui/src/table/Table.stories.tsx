import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { PersonData, StaticPersonData } from '../utils/makeData';
import { ColumnDef } from './ColumnDef';
import { Table } from './Table';
import { TableCell } from './TableCell';
import { TableScroller } from './TableScroller';

export default {
  title: 'Data Display / Table',
  component: Table,
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: ColumnDef<PersonData, any>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
    cell: (cell) => <TableCell>{cell.renderValue()}</TableCell>,
  },
  {
    header: '名前',
    accessorKey: 'firstName',
    cell: (cell) => <TableCell>{cell.renderValue()}</TableCell>,
  },
  {
    header: '年齢',
    accessorKey: 'age',
    cell: (cell) => <TableCell>{cell.renderValue()}</TableCell>,
  },
  {
    header: '訪問',
    accessorKey: 'visits',
    cell: (cell) => <TableCell>{cell.renderValue()}</TableCell>,
  },
];

export const Base: Story = () => <Table<PersonData> columns={columns} data={StaticPersonData} />;

export const WithSelect: Story = () => (
  <Table<PersonData>
    columns={columns}
    data={StaticPersonData}
    getRowId={(row) => row.id.toString()}
    onSelectRow={(row) => console.info('Selected row: ', row)}
  />
);

export const WithSelectMultiple: Story = () => (
  <Table<PersonData>
    columns={columns}
    data={StaticPersonData}
    getRowId={(row) => row.id.toString()}
    onSelectRows={(rows) => console.info('Selected rows: ', rows)}
  />
);

export const WithDefaultSort: Story = () => (
  <Table<PersonData>
    columns={columns}
    data={StaticPersonData}
    defaultSortColumn={{
      id: 'id',
      desc: true,
    }}
  />
);

export const WithDisablePagination: Story = () => (
  <Table<PersonData> columns={columns} data={StaticPersonData} disablePagination />
);

export const WithTableScroller: Story = () => (
  <TableScroller height={500}>
    <Table<PersonData> columns={columns} data={StaticPersonData} disablePagination />
  </TableScroller>
);

export const WithTablePageSize: Story = () => (
  <Table<PersonData> columns={columns} data={StaticPersonData} pageSize={10} />
);

export const WithClickRow: Story = () => (
  <Table<PersonData> columns={columns} data={StaticPersonData} pageSize={10} onRowClick={(_, row) => { console.info(row) }} />
)
