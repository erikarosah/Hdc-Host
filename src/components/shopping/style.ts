import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 834px){
        >h2{
            font-size: 24px;
        }
    }

    @media screen and (max-width: 414px){
        >h2{
            width: 90%;
        }  
    }
`;

export const PlansContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 884px){
        flex-direction: column;
        align-items: center;
    }
    
`;

export const Plan = styled.div`
    width: 300px;
    border: 2px solid #AFAAFF;
    border-radius: 8px;
    margin-top: 5rem;
    transition: 0.4s;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.01);
        box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.1);
    }

    @media screen and (max-width: 834px){
        margin-top: 3rem;
        border: 1px solid #AFAAFF;  
    }
`;

export const Infos = styled.div`
    padding: 2rem 0;
    max-height: 115px;
`;

export const Price = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Sale = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    >span{
        text-decoration: line-through;
    }

    >div {
        font-weight: bold;
        border-radius: 10px;
        font-size: 14px;
        padding: 0.5rem;
        text-transform: uppercase;
        background-color: #EBE4FF;
        color: #5025D1;
    }
`;

export const SaleInfo = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  
    >span:first-child{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    
    >span:last-child{
        margin: 0.5rem 0 2rem 0;
    }

    >p {
        width: 80%;
        font-size: 14px;
        text-align: center;
        color: #8DA1C4;
        margin-bottom: 2rem;
    }
`;

export const Divider = styled.div`
    width: 90%;
    border: 1px solid #d5dfff;
`;

export const Resource = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    >h4 {
        margin-top: 2rem;
    }

    >ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 0.5rem;
        line-height: 2rem;
    }

    >ul li {
        color: #2f1c6a;
        font-weight: 500;
    }

    >ul li:last-child {
        margin-bottom: 1rem;
    }

    >ul li svg {
        margin-right: 0.5rem;
        font-size: 14px;
        fill: #02B091;
    }
`;