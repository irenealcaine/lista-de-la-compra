import React from 'react'
import './Select.scss'

const Select = ({ options }) => {
  return (
    <select>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}

    </select>
  )
}

export default Select
