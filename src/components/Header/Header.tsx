import Logo from 'components/Logo/Logo'
import { AuxiliaryParagraph } from 'components/Typography/Typography'
import React from 'react'
import './header.sass'

export default function Header({ onClickMenu }: { onClickMenu: () => void }) {
  return (
    <header className="header">
      <div className="header__left">
        <Logo />
        <div className="header__info">
          <AuxiliaryParagraph>Иванов</AuxiliaryParagraph>
          <AuxiliaryParagraph color="grey">Иван Иванович</AuxiliaryParagraph>
        </div>
      </div>
      <div onClick={onClickMenu} className="header__menu" />
    </header>
  )
}
