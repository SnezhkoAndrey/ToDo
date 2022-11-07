import React, { createContext, useState } from 'react'

export const GlobalContext = createContext({
  value: [] as initialType[],
  setValue: (value: initialType[]) => {
    // change context
  },
})

export interface initialType {
  id: number
  task: string
  complete: boolean
}

interface Props {
  children?: React.ReactNode
}

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [value, setValue] = useState([] as initialType[])

  const changeHandler = (value: initialType[]): void => {
    setValue(value)
    localStorage.setItem('todos', JSON.stringify(value))
  }

  const providerValue = {
    value,
    setValue: changeHandler,
  }
  return <GlobalContext.Provider value={providerValue}> {children} </GlobalContext.Provider>
}
