import s from './header.module.scss'
import logo from './../../assets/images/logo.png'
import {Menu} from "./menu/menu";

export const Header = () => {
    return <header className={s.header}>
        <div><img src={logo} alt="logo" className={s.logo}/></div>
        <Menu/>
    </header>
}