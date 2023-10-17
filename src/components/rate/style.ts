import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-top: 5rem;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 834px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        text-align: center !important; 
        gap: 2rem;
    }

    @media screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
    }

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