import React from 'react'

const Text = ({label, type, value}) => {
  return (
    <div>
      <label>
        <span>{label}</span>
        <input type={type} value={value} />
      </label>
    </div>
  )
}

export default Text