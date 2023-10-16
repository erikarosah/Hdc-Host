import React from 'react'
import Logo from '../../assets/image.png'
import { Container, Item, ItemsContainer, LogoContainer } from './style'
import { BtnEnter } from '../button/style'

const Header = () => {
  return (
    <Container>
        <LogoContainer>
           <img alt='logo' src={Logo} />
        </LogoContainer>
        <ItemsContainer>
          <Item>WordPress</Item>
          <Item>Criador de Sites</Item>
          <Item>Hospedagem</Item>
          <Item>Pro</Item>
          <Item>Domínios</Item>
          <BtnEnter buttonstyle='white'>Entrar</BtnEnter>
        </ItemsContainer>
    </Container>
  )
}

export default Header
