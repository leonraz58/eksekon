import React from 'react';
import {basketActions, BasketItem} from "../../../utils/basketReducer";
import s from './cart-item.module.scss'
import {Counter} from "../counter/counter";
import {Delete} from "../../../assets/icons/delete";
import {Button} from "../../../components/button/button";
import {useDispatch} from "react-redux";
import {Block} from "../../../components/block/block";
import {chairs} from "../../../utils/state";

type Props = {
    item: BasketItem
}

export const CartItem = ({item}: Props) => {

    const chair = chairs.find(chair => chair.id === item.id)
    const dispatch = useDispatch()



    return (
        <Block>
            <div className={s.wrapper}>
                <div className={s.infoWithImage}>
                    <div>
                        <img src={chair?.images[0]} alt="" className={s.cover}/>
                    </div>

                    <div className={s.info}>
                        <span className={s.description1}>{chair?.title}</span>
                        <span className={s.description2}>SKU: {chair?.id}</span>
                        <Counter item={item}/>
                    </div>
                </div>
                <div className={s.col3}>
                    <Button className={s.iconButton}
                            onClick={() => dispatch(basketActions.removeItemFromBasket(item.id))}><Delete/></Button>
                    {chair?.price.current &&
                        <span className={s.price1}>{(chair?.price.current * item.value).toLocaleString('ru-RU')} р. </span>}
                </div>
            </div>
        </Block>
    );
};