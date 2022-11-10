import styled from '@emotion/styled'
import {
  Box,
  Checkbox,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import TrashCanIcon from 'assets/trash-can-icon.svg'

export interface ITodoListItemProps {
  title: string
  date: string
}

const TodoActionsWrapperSt = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}))

const CheckboxSt = styled(Checkbox)(() => ({
  color: '#20EEB0',

  '&.Mui-checked': {
    color: '#20EEB0',
  },
}))

const ListItemSt = styled(ListItem)(() => ({
  '& .MuiListItemSecondaryAction-root': {
    right: 0,
  },
}))

const TrashCanIconSt = styled('img')(() => ({
  paddingLeft: '5px',
}))

export const TodoListItem = ({ title, date }: ITodoListItemProps) => {
  return (
    <ListItemSt
      secondaryAction={
        <TodoActionsWrapperSt>
          <CheckboxSt />
          <TrashCanIconSt src={TrashCanIcon} />
        </TodoActionsWrapperSt>
      }
      disablePadding
    >
      <ListItemText
        primary={
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 500,
              color: '#0D0D0D',
            }}
          >
            {title}
          </Typography>
        }
        secondary={
          <Typography
            sx={{
              color: '#888888',
            }}
            variant="body2"
          >
            {date}
          </Typography>
        }
        disableTypography
      />
    </ListItemSt>
  )
}
