import React from 'react'
import './columns.sass'

export default function Columns({ children }: { children?: React.ReactNode }) {
  return <div className="columns">{children}</div>
}

type DesktopColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type TabletColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type MobileColumn = 1 | 2 | 3 | 4

export function Column({
  children,
  desktop,
  tablet,
  mobile,
}: {
  children?: React.ReactNode
  desktop?: DesktopColumn
  tablet?: TabletColumn
  mobile?: MobileColumn
}) {
  return (
    <div
      className={`columns__column columns__column_desktop-${desktop} columns__column_tablet-${tablet} columns__column_mobile-${mobile}`}
    >
      {children}
    </div>
  )
}
