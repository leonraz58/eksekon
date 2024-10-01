import React from 'react';
import s from "./colors.module.scss";

// const colors = [
//     {
//         cssColor: 'red'
//     },
//     {
//         cssColor: 'blue'
//     },
//     {
//         cssColor: 'green'
//     }
// ]

type Props = {
    colors: Array<string>
    setCurrentColor: (color: string) => void;
}

export const Colors = ({colors, setCurrentColor}:Props) => {
    return (
        <div className={s.colors}>
            Цвет:
            {colors.map((item, index) => {

                const onClickHandler = () => {
                    setCurrentColor(item);
                }

                return (<span onClick={onClickHandler} key={index} style={{backgroundColor: item}} className={s.color}>1</span>)
            })}
        </div>
    );
};