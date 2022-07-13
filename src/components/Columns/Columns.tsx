import React from 'react'
import './columns.sass'

export default function Columns(
  props: React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode
    vertical?: 'center' | 'end'
    horizontal?: 'center' | 'end' | 'stretch'
  }
) {
  const { children, vertical, horizontal } = props
  return (
    <div {...props} className={`columns columns_vertical-${vertical} columns_horizontal-${horizontal}`}>
      {children}
    </div>
  )
}

type DesktopColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type TabletColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type MobileColumn = 1 | 2 | 3 | 4

export function Column({
  children,
  desktop,
  tablet,
  mobile,
  vertical,
  horizontal,
}: {
  children?: React.ReactNode
  desktop?: DesktopColumn
  tablet?: TabletColumn
  mobile?: MobileColumn
  vertical?: 'center' | 'end'
  horizontal?: 'center' | 'end'
}) {
  return (
    <div
      className={`columns__column columns__column_desktop-${desktop} columns__column_tablet-${tablet} columns__column_mobile-${mobile} columns__column_vertical-${vertical} columns__column_horizontal-${horizontal}`}
    >
      {children}
    </div>
  )
}
