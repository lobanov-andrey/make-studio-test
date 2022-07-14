import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './select.sass'

export default function Select<T>({
  placeholder,
  options,
  onSelected,
  defaultID,
}: {
  defaultID?: T
  placeholder?: string
  options: { text: string; id: T }[]
  onSelected?: (id: T) => void
}) {
  const [currentOptionID, setCurrentOptionID] = useState(defaultID)
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('click', windowClickHandler)
    return () => {
      window.removeEventListener('click', windowClickHandler)
    }
  }, [])

  const windowClickHandler = () => {
    setDropDownIsOpen(false)
  }

  const clickOption = (id: T) => {
    setCurrentOptionID(id)
    setDropDownIsOpen(false)
  }

  return (
    <div onClick={event => event.stopPropagation()} className="select">
      <div className="select__indent"></div>

      <div onClick={() => setDropDownIsOpen(!dropDownIsOpen)} className="select__shell">
        <div className={`select__placeholder ${currentOptionID ? 'select__placeholder_top' : ''}`}>
          {placeholder ? placeholder : 'Select'}
        </div>

        <div className="select__selected">{options.find(option => option.id == currentOptionID)?.text}</div>

        <div style={{ transform: `rotate(${dropDownIsOpen ? 180 : 0}deg)` }} className="select__right">
          <svg className="select__arrow" width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.5 3L7.5 0L9 1.5L4.5 6L0 1.5L1.5 0L4.5 3Z" fill="#3E29E3" />
          </svg>
        </div>

        <div className="select__line"></div>
      </div>

      <CSSTransition in={dropDownIsOpen} timeout={300} classNames="select__drop-down-animation" unmountOnExit>
        <div className="select__drop-down">
          {options.map(option => (
            <div
              key={`${option.id}`}
              onClick={() => clickOption(option.id)}
              className={`select__drop-down__option ${
                option.id == currentOptionID ? 'select__drop-down__option_selected' : ''
              }`}
            >
              {option.text}
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  )
}
