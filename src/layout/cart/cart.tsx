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

export const Cart = () => {

    useEffect(() => emailjs.init("Ar4Ps6eLj_E1qLW3_"), []);

    const basket = useSelector<AppRootStateType, BasketItem[]>(state => state.basket);

    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        emailjs.send("service_di6o1q2", "template_1en6x2g", {
            name: nameRef?.current?.value,
            email: emailRef?.current?.value,
            basket: JSON.stringify(basket)
        });
    }

    return (
        <section>
            <PageContainer>
                <h2 className={s.pageTitle}>Корзина</h2>

                <div className={s.wrapper}>

                    <div className={s.basket}>
                        {basket.map((item, index) => (
                            <CartItem key={index} item={item}/>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className={s.form}>
                        <Block>
                            <div className={s.formWrapper}>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <label htmlFor="name">Введите имя</label>
                                    <input type="text" name="name" id={"name"} ref={nameRef}/>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <label htmlFor="email">Введите email</label>
                                    <input type="text" name="email" id={"email"} ref={emailRef}/>
                                </div>
                                <Button variant={'primary'} fullWidth>Оформить заказ</Button>
                            </div>
                        </Block>
                    </form>

                </div>

            </PageContainer>
        </section>
    );
};