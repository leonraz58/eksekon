import React from 'react';
import {PageContainer} from "../../../components/pageContainer/pageContainer";
import {Block} from "../../../components/block/block";
import s from './empty-basket.module.scss'
import cart from './shopping-cart.png'

const EmptyBasket = () => {
    return (
            <Block>
                <div className={s.emptyBasket}>
                    <img src={cart} alt="" className={s.image}/>
                    <span className={s.text1}>Пока пусто</span>
                    <span className={s.text2}>Воспользуйтесь каталогом для добавления товаров.</span>
                </div>
            </Block>
    );
};

export default EmptyBasket;