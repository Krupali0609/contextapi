import React, {useContext}from 'react'
import { UserAuthContex } from '../context/UserAuthContext'

const ComponentA = () => {
  const user=useContext(UserAuthContex)
  return (
    <div>
      <h1>ComponentA</h1>
      <h2> Name:{user.name }</h2>
    </div>
  )
}

export default ComponentA
