import React from 'react';
import s from './path.module.scss'
import {Link} from "react-router-dom";

export type PathItem = {
    text: string,
    href?: string,
}

type Props = {
    pathItems: PathItem[],
}




export const Path = ({pathItems}: Props) => {



    return (
        <div className={s.wrapper}>
            <Link to={'/'} className={s.link}>Главная</Link>
            {pathItems.map((item) => (
                item.href ? <>{' > '}<Link to={item.href} className={s.link}>{item.text}</Link></> : <span className={s.text}>{' > '}{item.text}</span>
            ))}
        </div>
    );
};

