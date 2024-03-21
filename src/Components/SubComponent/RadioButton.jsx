import React from 'react'

function RadioButton({ value, checked, onChange, children }) {
  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  )
}

export default RadioButton