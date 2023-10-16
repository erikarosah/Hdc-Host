import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1700px;
    height: 5rem;
    background-color: #FFF;
    display: flex;
    position: sticky;
    top: 0;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    z-index: 1;
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