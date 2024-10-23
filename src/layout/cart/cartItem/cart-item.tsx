import React from 'react';
import {BasketItem} from "../../../utils/basketReducer";
import {chairs} from "../../chairs/chairs";
import s from './cart-item.module.scss'

type Props = {
    item: BasketItem
}

export const CartItem = ({item}: Props) => {

    const chair = chairs.find(chair => chair.id === item.id)

    return (
        <div className={s.wrapper}>
            <div>
                <img src={chair?.images[0]} alt="" className={s.cover}/>
            </div>

            <div className={s.info}>
                <span>{chair?.title}</span>
                <span>id - {chair?.id}</span>
                <span>Value - {item.value}</span>
            </div>
            <div>
                +
            </div>
        </div>
    );
};