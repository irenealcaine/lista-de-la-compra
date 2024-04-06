import React from 'react'
import './Checkbox.scss'

const Checkbox = ({ isChecked, onChange }) => {
  return (
    <input type="checkbox" checked={isChecked} onChange={onChange} />
  )
}

export default Checkbox
