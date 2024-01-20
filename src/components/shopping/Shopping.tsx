import React from 'react'
import { Container, Divider, Infos, Plan, PlansContainer, Price, Resource, Sale, SaleInfo } from './style'
import { BtnEnter } from '../button/style'
import { FaCheck } from 'react-icons/fa';
import { plans } from '../../../utils/plans';
import { StyledTitle } from '../styled-title';

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
