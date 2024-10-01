import React from 'react';
import s from "./colors.module.scss";

const colors = [
    {
        cssColor: 'red'
    },
    {
        cssColor: 'blue'
    },
    {
        cssColor: 'green'
    }
]

export const Colors = () => {
    return (
        <div className={s.colors}>
            Цвет:
            {colors.map((item, index) => (
                <span key={index} style={{backgroundColor: item.cssColor}} className={s.color}>1</span>
            ))}
        </div>
    );
};