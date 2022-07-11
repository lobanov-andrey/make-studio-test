import { Paragraph } from 'components/Typography/Typography'
import React, { useState } from 'react'
import './tabs.sass'

export default function Tabs({ tabs }: { tabs: { name: string; children: JSX.Element }[] }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  return (
    <div className="tabs">
      <div className="tabs__head">
        {tabs.map((tab, index) => (
          <div
            onClick={() => setCurrentTabIndex(index)}
            key={index}
            className={`tabs__tab tabs__tab_${index == currentTabIndex && 'active'}`}
          >
            <Paragraph color={index !== currentTabIndex ? 'grey' : undefined}>{tab.name}</Paragraph>
          </div>
        ))}
      </div>
      <div className="tabs__children">
        {tabs.reduce<undefined | JSX.Element>((accumulator, tab, index) => {
          if (currentTabIndex == index) accumulator = tab.children
          return accumulator
        }, undefined)}
      </div>
    </div>
  )
}
