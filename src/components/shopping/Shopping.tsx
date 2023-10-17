import React from 'react'
import { Container, Divider, Infos, Plan, PlansContainer, Price, Resource, Sale, SaleInfo } from './style'
import { BtnEnter } from '../button/style'
import { FaCheck } from 'react-icons/fa';
import { StyledTitle } from '../typograpgy';

const plans = [
    { id:'1', name:'Premium', about:'Perfeita para sites pessoais', price_withoud_sale:'47,99',
    sale:'43%', actual_price:'12,99,', next_price:'22,99', resource_1:'100 sites', 
    resource_2:"100 GB de Armazenamento SSD", resource_3:'SSL ilimitado Grátis', resource_4:'E-mail grátis',
    resource_5:"Largura de Banda ilimitada"},

    { id:'2', name:'Business', about:'Tenha mais poder e recursos numerados', price_withoud_sale:'64,99',
    sale:'72%', actual_price:'17,99,', next_price:'44,99', resource_1:'100 sites', 
    resource_2:"200 GB de Armazenamento NVMe", resource_3:'SSL ilimitado Grátis', resource_4:'CDN grátis',
    resource_5:"Largura de Banda ilimitada"},

    { id:'3', name:'Cloud Startap', about:'Aproveite o desempenho otimizado e os recursos dedicados', price_withoud_sale:'139,99',
    sale:'64%', actual_price:'44,99,', next_price:'99,99', resource_1:'300 sites', 
    resource_2:"200 GB de Armazenamento NVMe", resource_3:'Backups diários', resource_4:'CDN grátis',
    resource_5:"IP Dedicado"}
]   

const Shopping = () => {
  return (
    <Container>
        <StyledTitle tag='h2' color='purple' fontSize='title'>Escolha seu plano de hospedagem</StyledTitle>
        <PlansContainer>
            {plans.map((plan) => (
                <Plan key={plan.id} >
                    <Infos>
                        <StyledTitle tag='h4' color='purple' fontSize='subTitle'>{plan.name}</StyledTitle>
                        <StyledTitle tag='span' color='purple' fontSize='span'>{plan.about}</StyledTitle>
                    </Infos>
                    <Price>
                        <Sale>
                            <StyledTitle tag='span' color='gray' fontSize='span'>R${plan.price_withoud_sale}</StyledTitle>
                            <div>ECONOMIZE {plan.sale}</div>
                        </Sale>

                        <SaleInfo>
                            <StyledTitle tag='span' color='purple' fontSize='subTitle'>R$
                                <StyledTitle tag='h2' color='purple' fontSize='title'>{plan.actual_price}</StyledTitle>/mês*
                            </StyledTitle>
                            <p>*Estimativa de gasto mensal durante 48 meses.
                                Plano é pago de forma integral.
                            </p>
                            <BtnEnter buttonstyle='purple'>Adicionar ao Carrinho</BtnEnter>
                            <StyledTitle tag='span' color='gray' fontSize='span'>R${plan.next_price}/mês* ao renovar</StyledTitle>
                        </SaleInfo>

                        <Divider></Divider>
                        <Resource>
                            <StyledTitle tag='h4' color='purple'>Principais recursos</StyledTitle>
                            <ul>
                                <li>
                                    <FaCheck/>
                                    <span>{plan.resource_1}</span>
                                </li>
                                <li>
                                    <FaCheck/>
                                    <span>{plan.resource_2}</span>
                                </li>
                                <li>
                                    <FaCheck/>
                                    <span>{plan.resource_3}</span>
                                </li>
                                <li>
                                    <FaCheck/>
                                    <span>{plan.resource_4}</span>
                                </li>
                                <li>
                                    <FaCheck/>
                                    <span>{plan.resource_5}</span>
                                </li>
                            </ul>
                        </Resource>
                    </Price>
                </Plan>
            ))}
        </PlansContainer>
    </Container>
  )
}

export default Shopping
