import React from 'react'
import { TodoProvider } from '../context/TodoContext'
import useTodo from '../context/TodoContext'

function TodoForm() {
  const [todo, setTodo] = React.useState('')
  const {addTodo} = useTodo()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!todo) return

    addTodo({todo, completed: false})
    setTodo('')
  }

  return (
    <TodoProvider value={{}}>
    
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 md:flex-row justify-center '>
        <input 
        type="text"
        className='md:w-[80%] w-full h-12 rounded-md font-semibold text-lg pl-4 text-gray-900 outline-none border-2 border-gray-300 '
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Add a new task'
        />
        <button type='submit' className='bg-[#590C69] p-2 pr-8 text-white pl-8 rounded-md text-bold text-xl '>Add</button>
    </form>
    </TodoProvider>
  )
}

export default TodoForm
