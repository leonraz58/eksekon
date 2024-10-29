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

export const Cart = () => {

    useEffect(() => emailjs.init("Ar4Ps6eLj_E1qLW3_"), []);

    const basket = useSelector<AppRootStateType, BasketItem[]>(state => state.basket);

    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const townRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        emailjs.send("service_di6o1q2", "template_1en6x2g", {
            name: nameRef?.current?.value,
            email: emailRef?.current?.value,
            phone: phoneRef?.current?.value,
            town: townRef?.current?.value,
            basket: JSON.stringify(basket)
        });
    }


    return (
        <section>
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

                    <form onSubmit={handleSubmit} className={s.form}>
                        <Block>
                            <div className={s.formWrapper}>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <label htmlFor="name">Ваше имя</label>
                                    <input type="text" name="name" id={"name"} ref={nameRef} className={s.input}
                                           required/>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <label htmlFor="email">Ваш email</label>
                                    <input type="email" name="email" id={"email"} ref={emailRef} className={s.input}
                                           required/>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <label htmlFor="name">Ваш телефон</label>
                                    <input type="text" name="phone" id={"phone"} ref={phoneRef} className={s.input}
                                           required/>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <label htmlFor="name">Город получения</label>
                                    <input type="text" name="town" id={"town"} ref={townRef} className={s.input}
                                           required/>
                                </div>
                                <Button variant={'primary'} fullWidth>Оформить заказ</Button>
                            </div>
                        </Block>
                    </form>

                </div>}


            </PageContainer>
        </section>
    );
};