import Columns, { Column } from 'components/Columns/Columns'
import Logo from 'components/Logo/Logo'
import Space from 'components/Space/Space'
import { AuxiliaryParagraph, H1, Paragraph } from 'components/Typography/Typography'
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './card-window.sass'

export default function Select({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <CSSTransition in={open} timeout={300} classNames="card-window__open-animation" unmountOnExit>
      <div className="card-window">
        <div className="card-window__blank">
          <div className="card-window__blank__top">
            <Columns vertical="center">
              <Column desktop={2} mobile={1} tablet={1}>
                <Logo />
              </Column>
              <Column desktop={10} mobile={2} tablet={6}>
                <AuxiliaryParagraph color="grey">Completed the task</AuxiliaryParagraph>
              </Column>
              <Column horizontal="end" desktop={7} mobile={1} tablet={1}>
                <div onClick={onClose} className="card-window__blank__close"></div>
              </Column>
            </Columns>
            <Columns>
              <Column desktop={2} tablet={1}></Column>
              <Column desktop={10} tablet={7}>
                <Space indent={8} />
                <H1>Lobanov Andrey</H1>
                <Space indent={3} />
                <Paragraph>React Typescript Frontend Developer</Paragraph>
                <Space indent={4} />
                <a className="card-window__phone" href="tel:89234754964">
                  +7 (923) 475-49-64
                </a>
              </Column>
            </Columns>
          </div>

          <Columns>
            <Column desktop={2} tablet={1}></Column>
            <Column desktop={10} tablet={7}>
              <a className="card-window__link" href="https://telegram.me/lobanov_dev">
                <span className="card-window__link__icon">
                  <svg
                    className="card-window__link__icon__picture"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 0V6H14V2H10V0H16Z" fill="#3E29E3" />
                    <path d="M14 14H2L2 2H8V4H4V12H12V8H14V14Z" fill="#3E29E3" />
                  </svg>
                </span>
                <span className="card-window__link__text">Link to Telegram</span>
              </a>
            </Column>
          </Columns>
        </div>
        <div onClick={onClose} className="card-window__close"></div>
      </div>
    </CSSTransition>
  )
}
