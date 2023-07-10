import React from 'react';
import { MdMoreVert, MdOutlineDelete, MdOutlineEdit } from 'react-icons/md';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Badge } from '../badge';
import { Button } from '../button';
import { Menu, MenuItem } from '../menu';
import { Select } from '../select';
import { Text } from '../text';
import { PersonData, StaticPersonData } from '../utils/makeData';
import { ColumnDef } from './ColumnDef';
import { Table, TableBody, TableFrame, TableHead, TableRow } from './Table';
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

export const WithTablePageCount: Story = () => (
  <Table<PersonData> columns={columns} data={StaticPersonData} pageSize={10} pageCount={2} />
);

export const WithClickRow: Story = () => (
  <Table<PersonData>
    columns={columns}
    data={StaticPersonData}
    disablePagination
    onRowClick={(_, row) => {
      console.info(row);
    }}
  />
);

export const WithoutReactTable: Story = () => (
  <TableFrame className="">
    <TableHead>
      <TableRow>
        <TableCell as="th">出版社</TableCell>
        <TableCell as="th">本</TableCell>
        <TableCell as="th">状態</TableCell>
        <TableCell as="th" aria-label="アクション"></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>東京大学出版会</TableCell>
        <TableCell>記号と再帰</TableCell>
        <TableCell className="w-64">
          <Select
            name="state"
            size="medium"
            options={[
              { label: '在庫あり', inputValue: 'available' },
              { label: '貸出中', inputValue: 'unavailable' },
            ]}
            defaultValue={{ label: '貸出中', inputValue: 'unavailable' }}
          />
        </TableCell>
        <TableCell className="w-4">
          <Menu
            TriggerComponent={
              <Button intention="shade" size="small" variant="text">
                <MdMoreVert />
              </Button>
            }
          >
            <MenuItem icon={<MdOutlineEdit />}>編集</MenuItem>
            <MenuItem icon={<MdOutlineDelete />} intention="negative">
              削除
            </MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell rowSpan={2}>技術評論社</TableCell>
        <TableCell>
          <Text className="flex gap-1">
            オブジェクト指向UIデザイン
            <Badge intention="primary" variant="outlined" label="必読" />
          </Text>
        </TableCell>
        <TableCell className="w-64">
          <Select
            name="state"
            size="medium"
            options={[
              { label: '在庫あり', inputValue: 'available' },
              { label: '貸出中', inputValue: 'unavailable' },
            ]}
            defaultValue={{ label: '貸出中', inputValue: 'unavailable' }}
          />
        </TableCell>
        <TableCell className="w-4">
          <Menu
            TriggerComponent={
              <Button intention="shade" size="small" variant="text">
                <MdMoreVert />
              </Button>
            }
          >
            <MenuItem icon={<MdOutlineEdit />}>編集</MenuItem>
            <MenuItem icon={<MdOutlineDelete />} intention="negative">
              削除
            </MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Webアプリケーションアクセシビリティ</TableCell>
        <TableCell className="w-64">
          <Select
            name="state"
            size="medium"
            options={[
              { label: '在庫あり', inputValue: 'available' },
              { label: '貸出中', inputValue: 'unavailable' },
            ]}
            defaultValue={{ label: '在庫あり', inputValue: 'available' }}
          />
        </TableCell>
        <TableCell className="w-4">
          <Menu
            TriggerComponent={
              <Button intention="shade" size="small" variant="text">
                <MdMoreVert />
              </Button>
            }
          >
            <MenuItem icon={<MdOutlineEdit />}>編集</MenuItem>
            <MenuItem icon={<MdOutlineDelete />} intention="negative">
              削除
            </MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
    </TableBody>
  </TableFrame>
);
