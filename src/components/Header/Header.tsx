import { AuxiliaryParagraph } from 'components/Typography/Typography'
import logo from 'images/logo.svg'
import React from 'react'
import './header.sass'

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} className="header__logo" />
        <div className="header__info">
          <AuxiliaryParagraph>Иванов</AuxiliaryParagraph>
          <AuxiliaryParagraph color="grey">Иван Иванович</AuxiliaryParagraph>
        </div>
      </div>
      <div className="header__menu" />
    </header>
  )
}
