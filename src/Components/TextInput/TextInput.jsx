import React from 'react'
import './TextInput.scss'

const TextInput = ({ type, placeholder, onChange }) => {
  return (
    <input className='text-input' type={type} placeholder={placeholder} onChange={onChange} />
  )
}

export default TextInput
