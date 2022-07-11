import React from 'react'
import './typography.sass'

export function H1(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className="headline headline-h1" {...props}>
      {props.children}
    </h1>
  )
}
export function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className="headline headline-h2" {...props}>
      {props.children}
    </h2>
  )
}
export function H3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className="headline headline-h3" {...props}>
      {props.children}
    </h3>
  )
}
export function H4(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className="headline headline-h4" {...props}>
      {props.children}
    </h4>
  )
}
export function LeadParagraph(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className="paragraph paragraph-lead" {...props}>
      {props.children}
    </p>
  )
}
export function BigParagraph(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className="paragraph paragraph-big" {...props}>
      {props.children}
    </p>
  )
}
export function Paragraph(props: { color?: 'grey' } & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`paragraph paragraph-simple paragraph-simple_${props.color}`} {...props}>
      {props.children}
    </p>
  )
}
export function AuxiliaryParagraph(props: { color?: 'grey' } & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`paragraph paragraph-auxiliary paragraph-auxiliary_${props.color} `} {...props}>
      {props.children}
    </p>
  )
}
