import {Link} from "react-router-dom";
import s from './menu.module.scss'


const items = [
    {
        title: 'О нас',
        href: 'about'
    },
    {
        title: 'Стулья',
        href: 'chairs'
    },
    {
        title: 'Столы',
        href: 'tables'
    },
    {
        title: 'Контакты',
        href: 'contacts'
    },
    {
        title: 'Отзывы',
        href: 'responses'
    },
    {
        title: 'Заказать',
        href: 'order'
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