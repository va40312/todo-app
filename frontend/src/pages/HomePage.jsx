import { Navigate  } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'
// import TodoList from '../components/todos/TodoList'
import TodosPage from './TodosPage'
import AppNavBar from '../components/navbar/AppNavBar'

const HomePage = () => {
  const { isAuth } = useAuth()
  return isAuth ? (
    // <span>Welcome, {user.login}</span>\
    <>
    <AppNavBar/>
    <TodosPage/>
    </>
  ) : <Navigate to="/login" />
}

export default HomePage