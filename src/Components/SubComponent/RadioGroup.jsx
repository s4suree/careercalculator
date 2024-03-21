import React from 'react'
import RadioButton from './RadioButton'

function RadioGroup({ options, value, setValue }) {
  return (
    <div>
      {options.map((option) => (
        <RadioButton
          key={option}
          value={option}
          checked={option === value}
          onChange={() => setValue(option)}
        >
          {option}
        </RadioButton>
      ))}
    </div>
  )
}

export default RadioGroup