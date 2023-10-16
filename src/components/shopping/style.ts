import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >h2 {
        font-size: 35px;
        color: #2f1c6a;
    }
`;

export const PlansContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    
`;

export const Plan = styled.div`
    width: 300px;
    border: 2px solid #AFAAFF;
    border-radius: 8px;
    margin-top: 5rem;
    transition: 0.4s;
    
    &:hover {
        transform: scale(1.01);
        box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.1);
    }
`;

export const Infos = styled.div`
    padding: 2rem 0;
    max-height: 115px;

    >h4{
        font-size: 24px;
        color: #2f1c6a;
    }

    >span{
        font-size: 14px;
    }
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
        font-size: 14px;
        color: #8DA1C4;
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
        font-size: 20px;
        color: #2f1c6a;
    }

    
    >span:last-child{
        margin: 0.5rem 0 2rem 0;
        font-size: 14px;
        color: #8DA1C4;
    }

    >span h2{
        font-size: 35px;
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
        color: #2f1c6a;
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