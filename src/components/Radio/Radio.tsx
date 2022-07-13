import React, { useId, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './radio.sass'

export default function Radio<T>({
  options,
  defaultID,
  onChange,
}: {
  options: { id: T; text: string }[]
  onChange?: (id: T) => void
  defaultID?: T
}) {
  const [currentID, setCurrentID] = useState<T | undefined>(defaultID)

  const radioID = useId()

  const change = (id: T) => {
    if (onChange) onChange(id)
    setCurrentID(id)
  }

  return (
    <div className="radio">
      {options.map((option, index) => (
        <label key={`${option.id}`} className="radio__option" onClick={() => change(option.id)}>
          <input className="radio__option__input" type="radio" name={radioID} />
          <span className="radio__option__cell">
            <CSSTransition in={option.id == currentID} timeout={300} classNames="radio__option__cell-animation" unmountOnExit>
              <div className="radio__option__cell__center" />
            </CSSTransition>
          </span>
          <span className="radio__option__text">{option.text}</span>
        </label>
      ))}
    </div>
  )
}
