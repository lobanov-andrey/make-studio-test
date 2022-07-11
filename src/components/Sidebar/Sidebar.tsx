import Space from 'components/Space/Space'
import React from 'react'
import './sidebar.sass'

export default function Sidebar() {
  return (
    <div className="sidebar">
      {[
        { name: 'Напутственное слово', anchor: 'welcome' },
        { name: 'Сетка', anchor: 'grid' },
        { name: 'Типографика', anchor: 'typography' },
        { name: 'UI', anchor: 'ui' },
      ].map(link => (
        <>
          <a href={`#${link.anchor}`} className="sidebar__link">
            {link.name}
          </a>
          <Space indent={2} />
        </>
      ))}
      <Space indent={6} />
    </div>
  )
}
