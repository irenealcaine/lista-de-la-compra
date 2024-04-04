import React from 'react'
import './Checkbox.scss'

const Checkbox = ({ isChecked }) => {
  return (
    <input type="checkbox" checked={isChecked} />
  )
}

export default Checkbox
