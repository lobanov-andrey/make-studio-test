import React from 'react'
import './typography.sass'

type HeadlineProps = React.HTMLAttributes<HTMLHeadingElement> & { anchor?: string }

export function H1(props: HeadlineProps) {
  return (
    <h1 className="headline headline-h1" {...props}>
      {props.anchor ? <span className="headline__anchor" id={props.anchor}></span> : null}
      {props.children}
    </h1>
  )
}
export function H2(props: HeadlineProps) {
  return (
    <h2 className="headline headline-h2" {...props}>
      {props.anchor ? <span className="headline__anchor" id={props.anchor}></span> : null}
      {props.children}
    </h2>
  )
}
export function H3(props: HeadlineProps) {
  return (
    <h3 className="headline headline-h3" {...props}>
      {props.anchor ? <span className="headline__anchor" id={props.anchor}></span> : null}
      {props.children}
    </h3>
  )
}
export function H4(props: HeadlineProps) {
  return (
    <h4 className="headline headline-h4" {...props}>
      {props.anchor ? <span className="headline__anchor" id={props.anchor}></span> : null}
      {props.children}
    </h4>
  )
}

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & { anchor?: string; color?: 'grey' }

export function LeadParagraph(props: ParagraphProps) {
  return (
    <p className="paragraph paragraph_${props.color} paragraph-lead" {...props}>
      {props.anchor ? <span className="paragraph__anchor" id={props.anchor}></span> : null}
      {props.children}
    </p>
  )
}
export function BigParagraph(props: ParagraphProps) {
  return (
    <p className="paragraph paragraph_${props.color} paragraph-big" {...props}>
      {props.anchor ? <span className="paragraph__anchor" id={props.anchor}></span> : null}
      {props.children}
    </p>
  )
}
export function Paragraph(props: ParagraphProps) {
  return (
    <p className={`paragraph paragraph_${props.color} paragraph-simple`} {...props}>
      {props.anchor ? <span className="paragraph__anchor" id={props.anchor}></span> : null}
      {props.children}
    </p>
  )
}
export function AuxiliaryParagraph(props: ParagraphProps) {
  return (
    <p className={`paragraph paragraph_${props.color} paragraph-auxiliary `} {...props}>
      {props.anchor ? <span className="paragraph__anchor" id={props.anchor}></span> : null}
      {props.children}
    </p>
  )
}
