import React, { useContext } from 'react'
import Logo from '../../assets/image.png'
import { Container, LogoContainer, MenuIcon, DropdowMenu } from './style'
import { BtnEnter } from '../button/style'
import { FaBars, FaAngleDown } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { MenuContext } from '../../context/openMenu'

const Header = () => {
  const { openMenu, setOpenMenu } =useContext(MenuContext);

  return (
    <Container>
      <DropdowMenu openmenu={openMenu}>
          <div>
              <img alt='logo' src={Logo} />
              <div onClick={() => setOpenMenu(!openMenu)}>
                <GrClose/>
              </div>
          </div>
          <ul>
            <li>Hospedagem <FaAngleDown/></li>
            <li>WordPress</li>
            <li>Ferramentas</li>
            <li>Pro</li>
            <li>Domínios <FaAngleDown/></li>
            <li>Informações</li>
            <li>Sobre nós</li>
            <BtnEnter buttonstyle='white'>Entrar</BtnEnter>
          </ul>
      </DropdowMenu>

      <LogoContainer>
          <img alt='logo' src={Logo} />
      </LogoContainer>

      <MenuIcon onClick={() => setOpenMenu(!openMenu)}>
        <FaBars/>
      </MenuIcon>
     
      <ul>
        <li>WordPress</li>
        <li>Criador de Sites</li>
        <li>Hospedagem</li>
        <li>Pro</li>
        <li>Domínios</li>
        <BtnEnter buttonstyle='white'>Entrar</BtnEnter>
      </ul>
    </Container>
  )
}

export default Header
