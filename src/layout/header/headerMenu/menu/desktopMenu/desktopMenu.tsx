import {Menu} from "../menu";
import s from './desktopMenu.module.scss'

export const DesktopMenu = () => {
    return <nav className={s.desktopMenu}>
        <Menu/>
    </nav>
}