import React, {ChangeEvent} from 'react';
import s from './counter.module.scss'
import {Button} from "../../../components/button/button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../utils/store";
import {basketActions, BasketItem} from "../../../utils/basketReducer";


type Props = {
    item: BasketItem;
}

export const Counter = ({item}: Props) => {

    const dispatch = useDispatch();
    const basket = useSelector<AppRootStateType, BasketItem[]>(state => state.basket);
    const basketItem = basket.find(elem => elem.id === item.id);

    const onDecreaseHandler = () => {
        if (item.value === 1) {
            dispatch(basketActions.removeItemFromBasket(item.id));
        } else {
            dispatch(basketActions.addItemToBasket({id: item.id, value: item.value-1}))
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(basketActions.addItemToBasket({id: item.id, value: +e.currentTarget.value}));
    }


    return (
        <div className={s.wrapper}>
            <Button onClick={onDecreaseHandler} variant={'secondary'} className={s.counterButton}>-</Button>
            <input value={basketItem?.value} className={s.input} onChange={onChangeHandler}/>
            <Button onClick={()=>dispatch(basketActions.addItemToBasket({id: item.id, value: item.value+1}))} variant={'secondary'} className={s.counterButton}>+</Button>
        </div>
    );
};