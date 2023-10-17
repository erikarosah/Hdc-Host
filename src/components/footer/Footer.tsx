import React from 'react'
import { BannerContainer, Container, TextContainer, FooterContainer, LogoContainer, Items } from './style'
import { FaCheck } from 'react-icons/fa'
import Logo from '../../assets/image.png'

const Footer = () => {
  return (
    <Container>
      <BannerContainer>
        <img alt='banner' src='https://www.hostinger.com/h-assets/images/pages/homepage-uplift/advanced-security-features-2x.png'/>
        <TextContainer>
            <h2>Segurança avançada</h2>
            <ul>
                <li>
                    <FaCheck/>
                    <span>Tenha certificados de segurança SSL ilimitados para criptografar o tráfego de seus sites.</span>
                </li>
                <li>
                    <FaCheck/>                
                    <span>Proteja seu site contra ataques DDoS com nameservers protegidos pela Cloudflare.</span>
                </li>
                <li>
                    <FaCheck/>
                    <span>Proteja seus arquivos com backups automáticos.</span>
                </li>
                <li>
                    <FaCheck/>
                    <span>Garantimos 99,9% de uptime para que seu site fique online e disponível.</span>
                </li>
            </ul>
        </TextContainer>
      </BannerContainer>
      <FooterContainer>
            <LogoContainer>
                <img alt='logo' src={Logo} />
                <p>Somos uma provedora de hospedagem de sites com a missão de promover o sucesso a todos que querem começar sua jornada online.
                Para isso, buscamos sempre melhorar a tecnologia dos nossos servidores, oferecer um suporte profissional e tornar a experiência dos 
                nossos clientes com a hospedagem de sites a melhor de todas.</p>
            </LogoContainer>
            <Items>
                <ul>
                    <li>Hospedagem</li>
                    <li>Hospedagem de Site</li>
                    <li>Hospedagem de Sites Profissionais</li>
                    <li>Servidor VPS</li>
                    <li>Host Minecraft</li>
                </ul>

                <ul>
                    <li>Ferramentas</li>
                    <li>Loja Virtual</li>
                    <li>Criador de Site</li>
                    <li>Criador de Sites com IA</li>
                    <li>Criador de Logo</li>
                </ul>  

                <ul>
                    <li>Sobre nós </li>
                    <li>Sobre a Hdc Host</li>
                    <li>Nossa tecnologia</li>
                    <li>Carreira</li>
                    <li>Fale conosco</li>
                </ul>
            </Items>
      </FooterContainer>
    </Container>
  )
}

export default Footer