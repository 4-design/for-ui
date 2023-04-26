import { MdMoreVert, MdOutlineAdd, MdOutlineCheck, MdOutlineFileDownload } from 'react-icons/md';
import { Button, Chip, Dropzone, Menu, MenuItem, Text } from '@4design/for-ui';

const IndexPage = () => (
  <div className="flex flex-col gap-4 p-4">
    <Text size="xl" weight="bold">
      For UI Example Site with Next.js
    </Text>
    <Chip label="yuzuna.kanda.pdf" onClick={() => void 0} icon={<MdOutlineFileDownload />} />
    <div className="flex items-center gap-2">
      <Text>ファイルは3つまで添付できます</Text>
      <Button>
        <MdOutlineAdd />
        追加
      </Button>
      <Menu
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        TriggerComponent={
          <Button variant="text" size="medium">
            <MdMoreVert />
          </Button>
        }
      >
        <MenuItem>オプション A</MenuItem>
        <MenuItem>オプション B</MenuItem>
      </Menu>
    </div>
    <Dropzone files={[]} onDrop={() => void 0} onRemove={() => void 0} />
    <Button variant="filled" intention="primary">
      <MdOutlineCheck />
      完了
    </Button>
  </div>
);

export default IndexPage;
