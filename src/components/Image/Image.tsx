import React from 'react'
import './image.sass'

export default function Image(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img className="image" {...props} />
}
