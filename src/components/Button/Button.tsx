import React from 'react'
import './button.sass'

export default function Button(props: React.HTMLAttributes<HTMLButtonElement> & { disabled?: boolean }) {
  return (
    <button className="button" {...props}>
      <span className="button__text">{props.children}</span>
    </button>
  )
}
