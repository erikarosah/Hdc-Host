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