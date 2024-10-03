import React from 'react';
import s from "./colors.module.scss";
import clsx from "clsx";


type Props = {
    colors: Array<string>
    currentColor: string
    setCurrentColor: (color: string) => void;
    colorsImages: any
}

export const Colors = ({colors, setCurrentColor, currentColor, colorsImages}: Props) => {
    return (
        <div>
            Цвет: {currentColor}

            <div className={s.colors}>

                {colors.map((item, index) => {

                    const onClickHandler = () => {
                        setCurrentColor(item);
                    }

                    let imgClassname = clsx(item === currentColor ? s.colorActive : '', s.colorImg)

                    return (<img src={colorsImages[index]} onClick={onClickHandler} key={index}
                                 className={imgClassname}></img>)
                    // return (<span onClick={onClickHandler} key={index} style={{backgroundColor: item}} className={s.color}>1</span>)
                })}

            </div>
        </div>
    );
};