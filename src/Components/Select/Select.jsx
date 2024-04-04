import React from 'react'

const Select = ({ options }) => {
  return (
    <select>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}

    </select>
  )
}

export default Select
