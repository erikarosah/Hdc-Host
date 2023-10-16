import React from 'react'
import { Container, Divider, Infos, Plan, PlansContainer, Price, Resource, Sale, SaleInfo } from './style'
import { BtnEnter } from '../button/style'
import { FaCheck } from 'react-icons/fa';

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
        <h2>Escolha seu plano de hospedagem</h2>
        <PlansContainer>
            {plans.map((plan) => (
                <Plan key={plan.id} >
                    <Infos>
                        <h4>{plan.name}</h4>
                        <span>{plan.about}</span>
                    </Infos>
                    <Price>
                        <Sale>
                            <span>R${plan.price_withoud_sale}</span>
                            <div>ECONOMIZE {plan.sale}</div>
                        </Sale>

                        <SaleInfo>
                            <span>R$<h2>{plan.actual_price}</h2>/mês*</span>
                            <p>*Estimativa de gasto mensal durante 48 meses.
                                Plano é pago de forma integral.
                            </p>
                            <BtnEnter buttonstyle='purple'>Adicionar ao Carrinho</BtnEnter>
                            <span>R${plan.next_price}/mês* ao renovar</span>
                        </SaleInfo>

                        <Divider></Divider>
                        <Resource>
                            <h4>Principais recursos</h4>
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
