import { List, styled } from '@mui/material'
import { TodoListItem } from './TodoListItem'

const ListSt = styled(List)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}))

export const TodoList = () => {
  return (
    <ListSt>
      <TodoListItem title="Dinner" date="Today at 8:00 PM" />
      <TodoListItem title="Walk with Coby" date="Today at 3:30 PM" />
      <TodoListItem title="Buy Groceries" date="Today at 10:00 AM" />
      <TodoListItem title="Go to repair shop" date="Today at 9:00 AM" />
    </ListSt>
  )
}
