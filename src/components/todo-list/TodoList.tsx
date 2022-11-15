import { List, styled } from '@mui/material'
import { useAppSelector } from 'states'
import { TodoListItem } from './TodoListItem'

const ListSt = styled(List)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}))

export const TodoList = () => {
  const { todos } = useAppSelector((state) => state.todo)

  return (
    <ListSt>
      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todoItem={todo} />
      })}
    </ListSt>
  )
}
