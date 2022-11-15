import { Box, styled, TextField, Button, TextFieldProps } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { useAppDispatch } from 'states'
import { addNewNote, ITodoItem } from 'states/slices/todo'

const TodoWrapperSt = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
}))

const TextFieldSt = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    height: 49,
    backgroundColor: '#EBEFF2',
    color: '#888888',

    '.MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
}))

const Buttonst = styled(Button)(() => ({
  height: 49,
  backgroundColor: '#20EEB0',

  '&:hover': {
    backgroundColor: '#20EEB0',
  },
}))

export const TodoInput = () => {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState('')

  const onInputChange: TextFieldProps['onChange'] = (event) => {
    const { value } = event.target

    setTitle(value)
  }

  const onAddNote = () => {
    const newNote: ITodoItem = {
      title,
      createdAt: new Date().getTime(),
      isDone: false,
    }

    dispatch(addNewNote(newNote))
    setTitle('')
  }

  return (
    <TodoWrapperSt>
      <TextFieldSt
        size="small"
        placeholder="Note"
        onChange={onInputChange}
        value={title}
        fullWidth
      />
      <Buttonst variant="contained" onClick={onAddNote} disableElevation>
        <AddIcon />
      </Buttonst>
    </TodoWrapperSt>
  )
}
