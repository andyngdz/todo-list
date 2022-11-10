import { Box, styled, TextField, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

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
  return (
    <TodoWrapperSt>
      <TextFieldSt size="small" placeholder="Note" fullWidth />
      <Buttonst variant="contained" disableElevation>
        <AddIcon />
      </Buttonst>
    </TodoWrapperSt>
  )
}
