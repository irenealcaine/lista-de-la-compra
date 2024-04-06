import React from 'react'
import './Select.scss'

const Select = ({ options, onChange }) => {
  return (
    <select
      onChange={onChange}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          hidden={option.hidden}
        >
          {option.label}
        </option>
      ))}

    </select>
  )
}

export default Select
