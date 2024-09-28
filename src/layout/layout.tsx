import {Header} from "./header/header";
import {Outlet} from "react-router-dom";
import s from './layout.module.scss'

export const Layout = () => {
    return <div>
        <Header/>
        <div className={s.main}>
            <Outlet/>
        </div>

    </div>
}