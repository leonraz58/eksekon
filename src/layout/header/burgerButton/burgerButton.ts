import styled, {css} from "styled-components";

export const BurgerButton = styled.button<{isOpen: boolean}>`
    //position: fixed;
    //top: 70px;
    //left: -33px;
    width: 50px;
    //height: 2px;
    z-index: 999999999;
    transform: translate(-33px, 45px);
    

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: black;
        position: absolute;
        left: 40px;
        bottom: 50px;
        transition: 0.2s ease-in-out;
        
        ${props => props.isOpen && css<{isOpen: boolean}> `
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: black;
            position: absolute;
            transform: translateY(-10px);
            transition: 0.2s ease-in-out;

            ${props => props.isOpen && css<{isOpen: boolean}> `
                transform: rotate(-45deg) translateY(0);
            `}
        }
        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: black;
            position: absolute;
            transform: translateY(10px);
            transition: 0.2s ease-in-out;

            ${props => props.isOpen && css<{isOpen: boolean}> `
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`