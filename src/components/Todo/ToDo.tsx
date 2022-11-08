import React, { useContext, useEffect } from 'react'
import { GlobalContext, initialType } from '../../context/GlobalContext'
import ToDoForm from '../ToDoForm'
import ToDoList from '../ToDoList'

const ToDo: React.FC = () => {
  const { value: todos, setValue: setTodos } = useContext(GlobalContext)

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

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos') as string) as initialType[]
    if (todos) {
      setTodos(todos)
    }
  }, [])

  return (
    <>
      <h2>To Do List</h2>
      <ToDoForm addTask={addTask} />
      {todos.map((td) => (
        <ToDoList todo={td} key={td.id} removeTask={removeTask} completeTask={completeTask} />
      ))}
    </>
  )
}

export default ToDo
