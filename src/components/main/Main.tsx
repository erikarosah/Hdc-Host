import React from 'react'
import { Container, PriceContainer, TitleContainer, Banner } from './style'

import { FaCheck } from 'react-icons/fa';
import { BtnEnter } from '../button/style';

const Main = () => {
  return (
    <Container>
        <TitleContainer>
            <h1>Plataforma de host completa para você ter qualquer site</h1>
            <h3>Hospedagem com até <span>73%</span> OFF</h3>
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
                <span>R$<h2>12,99</h2>/mês*</span>
            </PriceContainer>
            <BtnEnter buttonstyle='purple'>Aproveitar Oferta</BtnEnter>
        </TitleContainer>
        <Banner>
            <img alt='banner' src='https://heybizz.com/wp-content/uploads/2023/05/homepage-hero-2x.webp'/>
        </Banner>
    </Container>
  )
}

export default Main
