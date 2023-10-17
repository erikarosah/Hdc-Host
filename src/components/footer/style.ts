import styled from 'styled-components';

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

    @media screen and (max-width: 834px){
        flex-direction: column-reverse ;
        align-items: end;

        >img {
            width: 80%;
        }
    }

`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: #FFF;

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

    @media screen and (max-width: 1024px){
       >ul{
        padding: 2rem 0;
        margin-top: 0;
       } 
    }

    @media screen and (max-width: 834px){
        align-items: flex-start;
        padding: 0 3rem;

        >ul {
            gap: 20px;
            width: 90%;
        }
    }

    @media screen and (max-width: 414px){
        >h2{
            font-size: 24px;
        }
    }
`;

export const FooterContainer = styled.div`
    background-color: #F4F5FF;
    display: flex;
    padding: 2rem;
    color: #2F1C6A;

    @media screen and (max-width: 1024px){
       display: flex;
       flex-direction: column;
    }
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
        width: 50px;
    }

    >p {
        font-size: 14px;
        color: #2F1C6A;
    }

    @media screen and (max-width: 1024px){
        align-items: flex-start;
        width: 100%;
       
       >p{
            width: 95%;
            text-align: left;
       }
    
    }
`;

export const Items = styled.div`
    flex: 1;
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    >ul li:first-child{
        text-transform: uppercase;
        font-weight: bold;
        cursor: auto;

        &:hover {
            color: #2F1C6A;
        }
    }

    >ul li {
        cursor: pointer;
        
        &:hover {
            color: #7345e6;
        }
    }

    >ul {
        line-height: 2rem;
    }

    @media screen and (max-width: 1024px){
        margin-top: 1rem;
        justify-content: space-between;
        width: 95%;
    
    }

    @media screen and (max-width: 600px){
       >ul li{
            font-size:12px ;
       }
    
    }

    @media screen and (max-width: 426px){
       display: none;
    }
`;

export const Options = styled.div`
    display: none;

    @media screen and (max-width: 426px){
       display: flex;
       margin-top: 1rem;
       line-height: 1.5rem;
       text-transform: uppercase;
       font-weight: bold;
       color: #2F1C6A;

       >ul{
            width: 100%;
       }

       >ul li {
            display: flex;
            justify-content: space-between;
            cursor: pointer;

            &:hover {
            color: #7345e6;
        }
       }
    }
`;