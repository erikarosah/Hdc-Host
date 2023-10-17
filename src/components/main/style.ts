import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 3rem;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 800px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const TitleContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    >h1{
        text-align: left;
    }

    >h3{
        font-weight: 600;
    }

    @media screen and (max-width: 1024px){
       width: 70%;
    }

    @media screen and (max-width: 834px){
       width: 90%;
    }

    @media screen and (max-width: 800px){
        width: 100%;
        justify-content: center;
        align-items: center ;

        >h1{
            width: 90%;
            text-align: center;
            font-weight: 500;
        }
        >button{
            width: 40%;
        }
    }

    @media screen and (max-width: 414px){
        text-align: center;
        
       >h1{
            font-size: 24px;
            font-weight: bold;
       }
       
       >button{
        width: 90%;
       }
    }

`;

export const PriceContainer = styled.div`
    margin-top: 2rem;

    >ul li {
        color: #2F1C6A;
    }

    >ul li svg{
        margin-right: 1rem;
        font-size: 14px;
        fill: #02B091;
    }

    >span{
        margin: 2rem 0 1rem 0;
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: 414px){
       text-align: left;
    }
`;

export const Banner = styled.div`
    display: flex;
    justify-content: right;

    >img{
        width: 70%;
    }

    @media screen and (max-width: 1024px){
       >img{
            width: 90%;
       }
    }

    @media screen and (max-width: 834px){
        align-items: end;

       >img{
           height: 70%;
       }
    }

    @media screen and (max-width: 800px){
        justify-content: center;
        align-items: center;
      

        >img {
            padding-top: 2rem;
            width: 90%;
        }
    }

    @media screen and (max-width: 414px){
       >img {
             width: 100%;
       }
    }
`;