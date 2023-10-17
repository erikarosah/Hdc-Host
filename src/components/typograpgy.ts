import { styled, css } from 'styled-components';
import BaseTitle from './typography';

export const StyledTitle = styled(BaseTitle)`
   ${({color}) => {
        switch(color){
            case 'purple':
                return css`
                    color: #2f1c6a;
                `
            case 'purple2':
                return css`
                    color:#7345e6;
                 
                `
            case 'white':
                return css `
                    color: #FFF;
                `
            case 'gray':
                return css`
                    color: #8DA1C4;  
                `
        }
    }}

    ${({fontSize}) => {
        switch(fontSize){
            case 'title':
                return css`
                    font-size: 34px;
            `
            case 'subTitle':
                return css `
                    font-size: 24px;
                `
            case 'span':
                return css `
                    font-size: 14px;
                `
        }
    }}
`;