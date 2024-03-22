import React from 'react'

const Button = ({color, bgColor, text, size, borderRadius}) => {
  return (
    <button
    type='button'
    style={{background:bgColor, color:color, borderRadius}}
    className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}

    </button>

      )
}

export default Button