import React from 'react';
import s from './categoryCard.module.scss'
import {Link} from "react-router-dom";

type Props = {
    image: string
    text: string
    href: string
}

export const CategoryCard = ({image, text, href}: Props) => {
    return (
        <div className={s.wrapper}>
            <Link to={href}>
            <div className={s.imageWrapper}>
                <img src={image} alt="" className={s.image}/>
            </div>
            <h2 className={s.text}>{text}</h2>
            </Link>
        </div>
    );
};