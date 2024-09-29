import {Link} from "react-router-dom";
import s from './menu.module.scss'


const items = [
    {
        title: 'Главная',
        href: '/'
    },
    // {
    //     title: 'О нас',
    //     href: '#'
    // },
    {
        title: 'Стулья',
        href: 'chairs'
    },
    {
        title: 'Страница3',
        href: '#'
    },
    {
        title: 'Страница4',
        href: '#'
    },
    {
        title: 'Страница5',
        href: '#'
    }
]

export const Menu = () => {
    return <nav >
        <ul className={s.menu}>
            {items.map((item, i) => {
                return <li key={i}>
                    <Link
                        to={item.href}
                    >
                        {item.title}
                    </Link>
                </li>
            })}
        </ul>
    </nav>
}