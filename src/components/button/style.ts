import { styled, css } from 'styled-components';

interface IButton {
    buttonstyle: 'purple' | 'white'
  }

export const BtnEnter = styled.button<IButton>`
    cursor: pointer;
    border-radius: 8px;
    font-size: 16px;
    padding: 0.8rem 2rem;
    transition: 0.4s;
    border: 2px solid #6B27CC;

    &:hover {
        background-color: #6B27CC;
        color: #FFF;
    }

    ${({buttonstyle}) => {
        switch(buttonstyle){
            case 'purple':
                return css `
                    background: #673EE6;
                    color:#FFF
                `
            case 'white':
                return css `
                    background: #FFF
                `
        }
    }}

`;