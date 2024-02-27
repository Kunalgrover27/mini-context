import React from 'react'
import UserContext from '../context/UserContext'
import { useState } from 'react'
import {useContext} from "react"

function Input() {
    const [password,setPassword]=useState("")
    const [username,setUsername]=useState("")

    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <>
      <input type="text"
      placeholder='UserName'
      value={username}
      onChange={(e)=>
        setUsername(e.target.value)
      }
      />
       <input type="text"
      placeholder='password'
      value={password}
      onChange={(e)=>
        setPassword(e.target.value)
      }
      />
       <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Input
