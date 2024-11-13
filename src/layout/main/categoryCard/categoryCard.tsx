import React from 'react';
import s from './categoryCard.module.scss'

type Props = {
    image: string
    text: string
}

export const CategoryCard = ({image, text}: Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.imageWrapper}>
                <img src={image} alt="" className={s.image}/>
            </div>
            <h2 className={s.text}>{text}</h2>
        </div>
    );
};