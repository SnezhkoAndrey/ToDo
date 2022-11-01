import React from 'react'
import './App.css'
import ToDo from './components/Todo'
import { GlobalContextProvider } from './context/GlobalContext'

const App: React.FC = () => {
  return (
    <GlobalContextProvider>
      <div className='App'>
        <ToDo />
      </div>
    </GlobalContextProvider>
  )
}

export default App
