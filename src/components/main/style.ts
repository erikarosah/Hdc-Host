import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 3rem;
    display: flex;
    justify-content: space-around;
`;

export const TitleContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    >h1{
        text-align: left;
        color: #2f1c6a;
    }

    >h3{
        font-weight: 600;
        color: #2f1c6a;
    
        >span{
            color:#7345e6;
        }
    }

`;

export const PriceContainer = styled.div`
    margin-top: 2rem;

    >ul li svg{
        margin-right: 1rem;
        font-size: 12px;
        fill: #03b191;
    }

    >span{
        margin: 2rem 0 1rem 0;
        display: flex;
        align-items: center;
        font-size: 24px;
        color: #2f1c6a;
    }
`;

export const Banner = styled.div`
    display: flex;
    justify-content: right;

    >img{
        width: 70%;
    }
`;