import React, { useState, useContext } from 'react'
import { Context } from '../../context/context'
import ToDoForm from '../ToDoForm'
import ToDoList from '../ToDoList'

const ToDo: React.FC = () => {
  const initialTodo = useContext(Context)

  const [todos, setTodos] = useState(initialTodo)

  const addTask = (inputValue: string): void => {
    if (inputValue) {
      const newTodo = {
        id: Date.now(),
        task: inputValue,
        complete: false,
      }
      setTodos([...todos, newTodo])
    }
  }

  const removeTask = (id: number): void => {
    setTodos([...todos.filter((td) => td.id !== id)])
  }
  const completeTask = (id: number): void => {
    setTodos([...todos.map((td) => (td.id === id ? { ...td, complete: !td.complete } : td))])
  }
  return (
    <>
      <h2>To Do List</h2>
      <div>
        <ToDoForm addTask={addTask} />
      </div>
      <div>
        {todos.map((td) => (
          <ToDoList todo={td} key={td.id} removeTask={removeTask} completeTask={completeTask} />
        ))}
      </div>
    </>
  )
}

export default ToDo
