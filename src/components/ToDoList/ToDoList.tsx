import React from 'react'
import style from './ToDoList.module.css'

interface PropsType {
  todo: {
    id: number
    task: string
    complete: boolean
  }
  removeTask: (newId: number) => void
  completeTask: (newId: number) => void
}

const ToDoList: React.FC<PropsType> = ({ todo, removeTask, completeTask }) => {
  const addComplete = (className: string): string => {
    const theme = todo.complete ? ` ${style.complete}` : ''

    return className + theme
  }

  return (
    <div key={todo.id} className={style.todoList}>
      <div
        title={todo.complete ? 'click if not complete' : 'click if complete'}
        className={addComplete(style.task)}
        onClick={() => {
          completeTask(todo.id)
        }}
      >
        {todo.task}
      </div>
      <div
        className={addComplete(style.deleteButton)}
        title='delete'
        onClick={() => {
          removeTask(todo.id)
        }}
      >
        X
      </div>
    </div>
  )
}

export default ToDoList
