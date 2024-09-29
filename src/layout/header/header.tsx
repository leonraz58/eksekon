import s from './header.module.scss'
import logo from './../../assets/images/logo.png'
import {Contacts} from "./contacts/contacts";
import {DesktopMenu} from "./headerMenu/menu/desktopMenu/desktopMenu";
import {MobileMenu} from "./headerMenu/menu/mobileMenu/mobileMenu";
import {useEffect, useState} from "react";

export const Header = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768
    let isMobile = width < breakpoint

    useEffect(()=>{
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    })

    return <header className={s.header}>
        {isMobile && <MobileMenu/>}
        <div className={s.logoWrapper}>
            <img src={logo} alt="logo" className={s.logo}/>
        </div>
        {!isMobile && <DesktopMenu/>}

        <Contacts/>
    </header>
}