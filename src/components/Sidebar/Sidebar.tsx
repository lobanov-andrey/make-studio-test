import Space from 'components/Space/Space'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import './sidebar.sass'

type Anchor = 'welcome' | 'grid' | 'typography' | 'ui'
type AnchorPosition = { top: number; anchor: Anchor }

const links: { name: string; anchor: Anchor }[] = [
  { name: 'Напутственное слово', anchor: 'welcome' },
  { name: 'Сетка', anchor: 'grid' },
  { name: 'Типографика', anchor: 'typography' },
  { name: 'UI', anchor: 'ui' },
]

export default function Sidebar() {
  const [currentAnchor, setCurrentAnchor] = useState<Anchor | undefined>()
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | undefined>()

  useEffect(() => {
    window.addEventListener('scroll', scrollOptimizer)
    return () => window.removeEventListener('scroll', scrollOptimizer)
  }, [])

  const scrollOptimizer = useCallback(() => {
    clearTimeout(scrollTimeout.current)

    scrollTimeout.current = setTimeout(() => {
      scrollHandler()
    }, 15)
  }, [])

  const scrollHandler = useCallback(() => {
    const anchorPositions: AnchorPosition[] = links
      .reduce<AnchorPosition[]>((anchorPositions, link) => {
        const linkNode = document.querySelector(`#${link.anchor}`)
        if (linkNode) anchorPositions.push({ anchor: link.anchor, top: linkNode.getBoundingClientRect().top })
        return anchorPositions
      }, [])
      .sort((a, b) => a.top - b.top)

    const negativePositionIsExist = anchorPositions.find(position => position.top < 1)
    if (negativePositionIsExist) {
      for (let index = 0; index < anchorPositions.length; index++) {
        const position = anchorPositions[index]
        const nextPosition = anchorPositions[index + 1]
        if (nextPosition) {
          if (position.top < 1 && nextPosition.top > 1) {
            setCurrentAnchor(position.anchor)
            break
          }
        } else {
          setCurrentAnchor(position.anchor)
        }
      }
    } else {
      setCurrentAnchor(undefined)
    }
  }, [])

  return (
    <div className="sidebar">
      {links.map(link => (
        <>
          <a
            onClick={() => setCurrentAnchor(link.anchor)}
            key={link.anchor}
            href={`#${link.anchor}`}
            className={`sidebar__link sidebar__link_${link.anchor == currentAnchor ? 'active' : ''}`}
          >
            {link.name}
          </a>
          <Space indent={2} />
        </>
      ))}
      <Space indent={6} />
    </div>
  )
}
