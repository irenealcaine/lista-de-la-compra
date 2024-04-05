import React from 'react'
import './TextInput.scss'

const TextInput = ({ type, placeholder }) => {
  return (
    <input className='text-input' type={type} placeholder={placeholder} />
  )
}

export default TextInput
