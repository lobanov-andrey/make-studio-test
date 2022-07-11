import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './checkbox.sass'

export default function Checkbox({
  onChange,
  text,
  defaultValue,
}: {
  onChange?: (value: boolean) => void
  text: string
  defaultValue?: boolean
}) {
  const [value, setValue] = useState(!!defaultValue)

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event.target.checked)
    setValue(event.target.checked)
  }
  return (
    <label className="checkbox">
      <input onChange={change} className="checkbox__input" type="checkbox" />
      <span className="checkbox__square">
        <CSSTransition in={value} timeout={300} classNames="checkbox__square-animation">
          <svg
            className="checkbox__square__icon"
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.15789 7.14286L12.5263 0L14 1.42857L5.15789 10L0 5L1.47368 3.57143L5.15789 7.14286Z"
              fill="white"
            />
          </svg>
        </CSSTransition>
      </span>
      <span className="checkbox__text">{text}</span>
    </label>
  )
}
