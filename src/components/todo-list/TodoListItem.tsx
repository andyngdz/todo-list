import styled from '@emotion/styled'
import {
  Box,
  Checkbox,
  CheckboxProps,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import TrashCanIcon from 'assets/trash-can-icon.svg'

import { format } from 'date-fns'
import { useAppDispatch } from 'states'
import { deleteNote, ITodoItem, makeNoteDone } from 'states/slices/todo'

export interface ITodoListItemProps {
  todoItem: ITodoItem
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

export const TodoListItem = ({ todoItem }: ITodoListItemProps) => {
  const dispatch = useAppDispatch()
  const { id, title, createdAt, isDone } = todoItem

  const atDay = format(createdAt, 'EEEE')
  const atTime = format(createdAt, 'H:m a')
  const textDecoration = isDone ? 'line-through' : 'unset'
  const textOpacity = isDone ? 0.5 : 1

  const onCheckboxChange: CheckboxProps['onChange'] = (_, checked) => {
    if (id) {
      dispatch(
        makeNoteDone({
          id,
          isDone: checked,
        })
      )
    }
  }

  const onDeleteNote = () => {
    if (id) {
      dispatch(deleteNote(id))
    }
  }

  return (
    <ListItemSt
      secondaryAction={
        <TodoActionsWrapperSt>
          <CheckboxSt value={isDone} onChange={onCheckboxChange} />
          <TrashCanIconSt src={TrashCanIcon} onClick={onDeleteNote} />
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
              textDecoration,
              opacity: textOpacity,
            }}
          >
            {title}
          </Typography>
        }
        secondary={
          <Typography
            sx={{
              color: '#888888',
              textDecoration,
              opacity: textOpacity,
            }}
            variant="body2"
          >
            {atDay} at {atTime}
          </Typography>
        }
        disableTypography
      />
    </ListItemSt>
  )
}
