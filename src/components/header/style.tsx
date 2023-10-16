import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1700px;
    height: 5rem;
    display: flex;
`;

export const LogoContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;

    >img {
        width: 150px;
        height: auto;
    }
`;


export const ItemsContainer = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Item = styled.li`
    cursor: pointer;

    &:hover {
        filter: brightness(1.9);
    }

    color: #333;
`;


export const BtnEnter = styled.button`
    cursor: pointer;
    border-radius: 8px;
    font-size: 16px;
    padding: 1rem 2rem;
    transition: 0.4s;
    border: 2px solid #6B27CC;
    background-color: #FFF;

    &:hover {
        background-color: #6B27CC;
        color: #FFF;
    }

`;