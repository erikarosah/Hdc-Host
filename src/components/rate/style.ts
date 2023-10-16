import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 10rem;
    display: flex;
    justify-content: space-around;
`;

export const CompanyContent = styled.div`
    
`;

export const Rates = styled.div`
    font-size: 14px;

    >div svg{
        font-size: 25px;
        margin-left: 0.5rem;
        fill: #00B090;
        margin: 0.5rem 0;
    }

    >div svg:first-child {
        margin-left: 0;
    }

    >span span{
        font-weight: bold;
    }
`;