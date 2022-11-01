import React, { createContext, useState } from 'react'

/* eslint-disable-next-line */
export const GlobalContext = createContext({} as contextType)

interface initialType {
  id: number
  task: string
  complete: boolean
}

interface contextType {
  value: initialType[]
  setValue: React.Dispatch<React.SetStateAction<initialType[]>>
}

interface Props {
  children?: React.ReactNode
}

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [value, setValue] = useState([] as initialType[])

  const providerValue = {
    value,
    setValue,
  }
  return <GlobalContext.Provider value={providerValue}> {children} </GlobalContext.Provider>
}
