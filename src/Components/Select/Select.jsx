import React from 'react'
import './Select.scss'

const Select = ({ options, onChange, value }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      required
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
