import React from 'react'

type Indent = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export default function Space({ indent }: { indent: Indent }) {
  return <div style={{ height: `${indent * 8}px` }}></div>
}
