import React from 'react'
import { Container, PriceContainer, TitleContainer, Banner } from './style'

import { FaCheck } from 'react-icons/fa';
import { BtnEnter } from '../button/style';
import { StyledTitle } from '../styled-title';
import Banner1 from '../../assets/banner-1.webp'

const Main = () => {
  return (
    <Container>
        <TitleContainer>
            <StyledTitle tag='h1' color='purple'>Plataforma de host completa para você ter qualquer site</StyledTitle>
            <StyledTitle tag='h3' color='purple'>Hospedagem com até
                <StyledTitle tag='span' color='purple2'> 73%</StyledTitle> OFF
            </StyledTitle>
            <PriceContainer>
                <ul>
                    <li>
                        <FaCheck/>
                        <span>Domínio grátis</span>
                    </li>
                    <li>
                        <FaCheck/>
                        <span>Migração de sites grátis</span>
                    </li>
                    <li>
                        <FaCheck/>
                        <span>Suporte ao cliente 24h</span>
                    </li>
                </ul>
                <StyledTitle tag='span' color='purple' fontSize='subTitle'>R$
                    <StyledTitle tag='h2' color='purple'>12,99</StyledTitle>/mês*
                </StyledTitle>
            </PriceContainer>
            <BtnEnter buttonstyle='purple'>Aproveitar Oferta</BtnEnter>
        </TitleContainer>
        <Banner>
            <img alt='banner' src={Banner1}/>
        </Banner>
    </Container>
  )
}

export default Main
