import { VFC } from 'react'
import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip'

export type TagProps = MuiChipProps

export const Tag: VFC<TagProps> = ({ label, onDelete, ...rest }) => {
  return (
    <MuiChip variant="outlined" label={label} onDelete={onDelete} {...rest} />
  )
}
