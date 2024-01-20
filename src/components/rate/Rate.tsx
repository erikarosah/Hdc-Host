import React from 'react'
import { Container, Rates } from './style'
import { AiFillStar } from 'react-icons/ai'
import { companys } from '../../../utils/companys'
import { StyledTitle } from '../styled-title'

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
