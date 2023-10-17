import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 8rem;
    background-color: #673DE6;
`;

export const BannerContainer = styled.div`
    padding-top: 5rem;
    display: flex;
    justify-content: space-around;

    >img {
        width: 50%;
    }
`;

export const TextContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: #FFF;

    >h2 {
        font-size: 35px;
    }

    >ul {
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 50px;
        margin-top: 2rem;
        text-align: left;
    }

    >ul li  svg{
        margin-right: 1rem;
        font-size: 14px;
    }
`;

export const FooterContainer = styled.div`
    background-color: #F4F5FF;
    display: flex;
    padding: 5rem 0 2rem 2rem;
    color: #2F1C6A;

    >div ul li:first-child{
        text-transform: uppercase;
        font-weight: bold;
        cursor: auto;

        &:hover {
            color: #2F1C6A;
        }
    }

    >div ul li {
        cursor: pointer;
        
        &:hover {
            color: #7345e6;
        }
    }

    >div ul {
        line-height: 2rem;
    }

`;
export const Items = styled.div`
    flex: 1;
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


export const LogoContainer = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-size: 14px;
    color: #45296f;

    >img {
        width: 100px;
    }
`;
