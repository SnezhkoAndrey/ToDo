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

const ToDoList: React.FC<PropsType> = (props) => {
  const addComplete = (className: string): string => {
    const theme = props.todo.complete ? ` ${style.complete}` : ''

    return className + theme
  }

  return (
    <div key={props.todo.id} className={style.todoList}>
      <div
        title={props.todo.complete ? 'click if not complete' : 'click if complete'}
        className={addComplete(style.task)}
        onClick={() => {
          props.completeTask(props.todo.id)
        }}
      >
        {props.todo.task}
      </div>
      <div
        className={addComplete(style.deleteButton)}
        title='delete'
        onClick={() => {
          props.removeTask(props.todo.id)
        }}
      >
        X
      </div>
    </div>
  )
}

export default ToDoList
