import Resize from 'components/Resize/Resize'
import React, { ReactNode, useState } from 'react'
import './accordion.sass'

export default function Accordion({ title, children }: { title: string; children?: ReactNode }) {
  const [childrenHeight, setChildrenHeight] = useState(0)
  const [childrenIsOpen, setChildrenIsOpen] = useState(false)

  return (
    <div className="accordion">
      <div onClick={() => setChildrenIsOpen(!childrenIsOpen)} className="accordion__head">
        <div className={`accordion__title ${childrenIsOpen ? 'accordion__title_active' : ''}`}>{title}</div>
        <div style={{ transform: `rotate(${childrenIsOpen ? 180 : 0}deg)` }} className="accordion__right">
          <svg
            className="accordion__arrow"
            width="9"
            height="6"
            viewBox="0 0 9 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3L7.5 0L9 1.5L4.5 6L0 1.5L1.5 0L4.5 3Z" fill="#3E29E3" />
          </svg>
        </div>
      </div>
      <div style={{ height: `${childrenIsOpen ? childrenHeight : 0}px` }} className="accordion__resizer">
        <Resize onChangeHeight={(height: number) => setChildrenHeight(height)}>
          <div className="accordion__children">{children}</div>
        </Resize>
      </div>
      <div className={`accordion__line ${childrenIsOpen ? 'accordion__line_active' : ''}`}></div>
    </div>
  )
}
