import React, {useEffect, useRef} from 'react';
import {PageContainer} from "../../components/pageContainer/pageContainer";
import {Block} from "../../components/block/block";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/store";
import {BasketItem} from "../../utils/basketReducer";
import {CartItem} from "./cartItem/cart-item";
import s from './cart.module.scss'
import emailjs from '@emailjs/browser';
import {Button} from "../../components/button/button";
import {motion} from "framer-motion"
import EmptyBasket from "./empty-basket/empty-basket";
import {chairs} from "../../utils/state";
import {Order} from "./order/order";

export const Cart = () => {

    const [orderOpen, setOrderOpen] = React.useState<boolean>(false);
    console.log(orderOpen)

    const basket = useSelector<AppRootStateType, BasketItem[]>(state => state.basket);

    let basketCount = 0
    let basketSum = 0
    for (let basketItem of basket) {
        basketCount = basketCount + basketItem.value;
        let item = chairs.find(item => item.id === basketItem.id);
        basketSum = item?.price.current ? basketSum + item.price.current * basketItem.value : basketSum
    }
    let tovar = 'товаров'
    if (basketCount >= 2 && basketCount <= 4) {
        tovar = 'товара'
    } else {
        if (basketCount === 1) {
            tovar = 'товар'
        }
    }

    return (
        <section>
            <Order orderSum={basketSum} open={orderOpen} onOpenChange={setOrderOpen} title={'Оформление заказа'}/>
            <PageContainer>
                <h2 className={s.pageTitle}>Корзина</h2>

                {basket.length === 0 && <EmptyBasket/>}

                {basket.length !== 0 && <div className={s.wrapper}>

                    <div className={s.basket}>
                        {basket.map((item, index) => (
                            <motion.div initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}} layout
                                        key={item.id}
                            >
                                <CartItem key={item.id} item={item}/>

                            </motion.div>))}
                    </div>


                    <div className={s.form}>
                        <Block>
                            <div className={s.formWrapper}>
                                Итого:
                                <div className={s.totalPrice}>
                                    <span>{basketCount + ' ' + tovar}</span><span>{basketSum.toLocaleString('ru-RU')} ₽</span>
                                </div>
                                <Button type={'button'} onClick={() => setOrderOpen(true)}>Перейти к оформлению</Button>
                            </div>
                        </Block>
                    </div>

                </div>}


            </PageContainer>
        </section>
    );
};