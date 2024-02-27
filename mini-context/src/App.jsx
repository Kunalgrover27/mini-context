import { useState } from 'react'

import './App.css'

import UserContextProvider from './context/UserContextProvider'
import Input from './components/Input.jsx'
import Profile from './components/Profile.jsx'

function App() {


  return (
    <UserContextProvider>
    <h1>Use context API</h1>
    <Input />
    <Profile />
  </UserContextProvider>
  )
}

export default App
