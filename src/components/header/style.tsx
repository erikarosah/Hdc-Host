import styled from 'styled-components';

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

    >ul {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    >ul li {
        cursor: pointer;
        color: #333;

        &:hover {
            filter: brightness(1.9);
        }
    }

    
    @media screen and (max-width: 834px){
        >ul button{
            display: none;
        }
    }

    @media screen and (max-width: 600px){
        >ul{
            display: none;
        }
    }
`;

export const LogoContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    padding: 0 2rem;

    >img {
        width: 50px;
        height: auto;
    }
`;

export const MenuIcon = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 2rem;
    display: none;
    
    >svg{
       font-size: 20px;
       cursor: pointer;
       fill: #2f1c6a;
    }

    @media screen and (max-width: 600px){
       display: flex;
    }
`;

export const DropdowMenu = styled.div<{openmenu:boolean}>`
    min-width: 95%;
    min-height: 100vh;
    background-color: #FFF;
    display: ${({openmenu}) => openmenu? 'flex':'none'};
    flex-direction: column;
    border-right: 1px solid #AFAAFF;
    border-bottom: 1px solid #AFAAFF;

    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
    }

    >div img{
        width: 50px;
    }

    >div div svg{
        font-size: 20px;
        cursor: pointer;
        color: #2F1C6A;
    }

    >ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 0 2rem;
    }

    >ul li {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        font-weight: bold;
        color: #2F1C6A;


        &:hover {
        color: #7345e6;
        }
    }
`;
