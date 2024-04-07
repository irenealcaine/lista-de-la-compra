import React from 'react'
import './TextInput.scss'

const TextInput = ({ type, placeholder, onChange, value }) => {
  return (
    <input className='text-input'
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  )
}

export default TextInput
