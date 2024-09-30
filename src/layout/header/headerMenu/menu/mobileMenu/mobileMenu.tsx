import {Menu} from "../menu";
import {useState} from "react";
import {BurgerButton} from "../../../burgerButton/burgerButton";
import styled, {css} from "styled-components";

export const MobileMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    }
    return (
        <nav>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                <Menu/>
            </MobileMenuPopup>
        </nav>
    );
};

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    //right: 0;
    //bottom: 0;
    z-index: 10;
    width: 70%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-100%);
    transition: 0.2s ease-in-out;
    
    ul {
        display: flex;
        gap: 1px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 0.8s ease-in-out;
    }

    ${props => props.isOpen && css<{isOpen: boolean}> `
        transform: translateY(0);
        
        & ul {
            gap: 30px;
        }
    `}
`