import React from 'react'
import './App.css'
import ToDo from './components/Todo'
import { Context } from './context/context'

const App: React.FC = () => {
  return (
    <Context.Provider value={[]}>
      <div className='App'>
        <ToDo />
      </div>
    </Context.Provider>
  )
}

export default App
