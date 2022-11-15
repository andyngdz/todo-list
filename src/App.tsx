import { Box, styled, ThemeProvider } from '@mui/material'
import { Header } from 'components/header'
import { TodoInput } from 'components/todo-input'
import { TodoList } from 'components/todo-list'
import { appTheme } from 'styles/theme'
import { Provider } from 'react-redux'
import { store } from 'states'

const AppWrapperSt = styled(Box)(() => ({
  padding: '16px',
}))

const TodoWrapperSt = styled(Box)(() => ({
  backgroundColor: '#FFFFFF',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  padding: '23px 28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '36px',
}))

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <AppWrapperSt>
          <Header />
          <TodoWrapperSt>
            <TodoInput />
            <TodoList />
          </TodoWrapperSt>
        </AppWrapperSt>
      </ThemeProvider>
    </Provider>
  )
}

export default App
