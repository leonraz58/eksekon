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
    currentColor: string
    setCurrentColor: (color: string) => void;
}

export const Colors = ({colors, setCurrentColor, currentColor}:Props) => {
    return (
        <div className={s.colors}>
            Цвет: {currentColor}
            {colors.map((item, index) => {

                const onClickHandler = () => {
                    setCurrentColor(item);
                }

                return (<span onClick={onClickHandler} key={index} style={{backgroundColor: item}} className={s.color}>1</span>)
            })}
        </div>
    );
};