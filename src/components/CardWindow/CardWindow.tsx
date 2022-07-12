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
          <div>
            <Columns vertical="center">
              <Column desktop={3}>
                <Logo />
              </Column>
              <Column desktop={7}>
                <AuxiliaryParagraph color="grey">Задание выполнил</AuxiliaryParagraph>
              </Column>
            </Columns>
            <Columns>
              <Column desktop={3}></Column>
              <Column desktop={7}>
                <Space indent={8} />
                <H1>
                  Иванов
                  <br />
                  Иван Иванович
                </H1>
                <Space indent={3} />
                <Paragraph>
                  Краткое описание. Например, студент 4 курса специальности «Прикладная информатика» в КузГТУ
                </Paragraph>
                <Space indent={4} />
                <a className="card-window__phone" href="tel:88005553535">
                  +7 (800) 555-35-35
                </a>
              </Column>
            </Columns>
          </div>

          <Columns>
            <Column desktop={3}></Column>
            <Column desktop={7}>
              <a className="card-window__link" href="https://google.com">
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
                <span className="card-window__link__text">Ссылка на соцсеть/мессенджер</span>
              </a>
            </Column>
          </Columns>
        </div>
        <div onClick={onClose} className="card-window__close"></div>
      </div>
    </CSSTransition>
  )
}
