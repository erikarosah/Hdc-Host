import React from 'react'
import { CompanyContent, Container, Rates } from './style'
import { AiFillStar } from 'react-icons/ai'

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
            <CompanyContent key={company.name}>
                <h2>{company.name}</h2>
                <Rates>
                    <div>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </div>
                    <span>Nota: <span>{company.rate}</span> | <span>{company.opnions}</span> opniões</span>
                </Rates>
             </CompanyContent>
        ))}
    </Container>
  )
}

export default Rate
