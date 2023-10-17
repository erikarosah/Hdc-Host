import React from 'react'
import { Container, Rates } from './style'
import { AiFillStar } from 'react-icons/ai'
import { StyledTitle } from '../typograpgy'

const companys = [
    {name:'Trustpilot', rate: '4.6', opnions: '20.588'},
    {name:'Google', rate: '4.8/5', opnions: '5.608'},
    {name:'hostadvice', rate: '4.5/5', opnions: '2.416'},
    {name:'wpbeginner', rate: '4.7', opnions: '874'},
]
const Rate = () => {
  return (
    <Container>
        {companys.map((company) => (
            <div key={company.name}>
                <StyledTitle tag='h2' color='purple'>{company.name}</StyledTitle>
                <Rates>
                    <div>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </div>
                    <StyledTitle tag='span' color='purple'>Nota: 
                        <StyledTitle tag='span' color='purple'> {company.rate}</StyledTitle> | 
                        <StyledTitle tag='span' color='purple'> {company.opnions}</StyledTitle> opniões
                    </StyledTitle>
                </Rates>
             </div>
        ))}
    </Container>
  )
}

export default Rate
