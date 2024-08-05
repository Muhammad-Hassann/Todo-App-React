import { useEffect, useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import { TodoForm, TodoList } from './components'

function App() {

  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])  
  }

const updateTodo = (id, todo) => {
  setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
}

const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
}

const toggleComplete = (id) => {
  setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
}
  
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length > 0) {
    setTodos(todos)
  }
}, [])

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      
      <div className='w-screen   pt-8 md:pt-16 pb-12 flex justify-center'>
        <div className='md:w-2/4 h-full bg-white rounded-lg p-4'>
          <h1 className='md:text-3xl text-2xl font-bold text-center mb-4'>Manage Your Todos</h1>
          <div className='w-full'>
            <TodoForm />
          </div>
          <div>
            {todos.map((todo) => (
            <div className='w-full' key={todo.id}>

              <TodoList todo={todo} />
            </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )

}

export default App
