import React, {Fragment} from 'react';
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
            {pathItems.map((item, i) => (
                item.href ? <Fragment key={i}>{' > '}<Link to={item.href} className={s.link}>{item.text}</Link></Fragment> : <span key={i} className={s.text}>{' > '}{item.text}</span>
            ))}
        </div>
    );
};

