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
                        <span>{chair?.title}</span>
                        <span>id: {chair?.id}</span>
                        <Counter item={item}/>
                    </div>
                </div>
                <div style={{alignSelf: 'center'}}>

                </div>
                <div>
                    <Button className={s.iconButton}
                            onClick={() => dispatch(basketActions.removeItemFromBasket(item.id))}><Delete/></Button>
                </div>
            </div>
        </Block>
    );
};