import React, { useState } from 'react'
import style from './ToDoForm.module.css'

interface PropsType {
  addTask: (newValue: string) => void
}

const ToDoForm: React.FC<PropsType> = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    return setInputValue(e.currentTarget.value)
  }

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    addTask(inputValue)
    setInputValue('')
  }

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }
  return (
    <div className={style.todoForm}>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          type='text'
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder='send todo'
        />
        <button>add todo</button>
      </form>
    </div>
  )
}

export default ToDoForm
