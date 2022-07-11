import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './input.sass'

export default function Input(
  props: React.HTMLAttributes<HTMLInputElement> & { errors?: { error: string; validReqex?: RegExp }[] }
) {
  const { errors } = props
  const [value, setValue] = useState(props.defaultValue || '')
  const [error, setError] = useState('')

  useEffect(() => {
    if (errors) {
      if (value) {
        for (let index = 0; index < errors.length; index++) {
          const error = errors[index]
          setError(error.validReqex ? (error.validReqex.test(`${value}`) ? '' : error.error) : '')
        }
      } else {
        setError('')
      }
    }
  }, [value])

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(event)
    setValue(event.target.value)
  }

  return (
    <div className="input">
      <div className="input__top-indent"></div>
      <div className="input__shell">
        <span
          className={`input__placeholder ${value ? 'input__placeholder_top' : ''} ${error ? 'input__placeholder_error' : ''}`}
        >
          {props.placeholder}
        </span>
        <CSSTransition in={!!error} timeout={300} classNames="input__error-animation">
          <span className="input__error">{error}</span>
        </CSSTransition>
        <input onChange={change} className="input__field" type="email" {...props} placeholder="" />
        <div className={`input__line ${error ? 'input__line_error' : ''}`} />
      </div>
      <div className="input__bottom-indent"></div>
    </div>
  )
}
