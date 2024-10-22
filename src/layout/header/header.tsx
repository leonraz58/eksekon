import s from './header.module.scss'
import logo from './../../assets/images/logo.png'
import {Contacts} from "./contacts/contacts";
import {DesktopMenu} from "./headerMenu/menu/desktopMenu/desktopMenu";
import {MobileMenu} from "./headerMenu/menu/mobileMenu/mobileMenu";
import {useEffect, useState} from "react";
import {Basket} from "../../assets/icons/basket";
import {Badge} from "../../components/badge/badge";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/store";
import {BasketItem} from "../../utils/basketReducer";
import {Link} from "react-router-dom";

export const Header = () => {

    const basket = useSelector<AppRootStateType, BasketItem[]>(state => state.basket)
    const basketNumber = basket.length

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768
    let isMobile = width < breakpoint

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    })

    return <header className={s.header}>
        <div className={s.headerWrapper}>
            {isMobile && <MobileMenu/>}
            <div className={s.logoWrapper}>
                <img src={logo} alt="logo" className={s.logo}/>
            </div>
            {!isMobile && <DesktopMenu/>}
            <div className={s.rightBlock}>
                <Link to={'/cart'}>
                    <Badge badgeContent={basketNumber}><Basket className={s.basket}/></Badge>
                </Link>
                <Contacts/>
            </div>
        </div>
    </header>
}