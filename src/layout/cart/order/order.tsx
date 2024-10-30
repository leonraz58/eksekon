import React, {useEffect, useRef, useState} from 'react';
import {Modal, ModalProps} from "../../../components/modal/modal";
import s from "./order.module.scss";
import {Button} from "../../../components/button/button";
import emailjs from "@emailjs/browser";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../utils/store";
import {BasketItem} from "../../../utils/basketReducer";
import {Loader} from "../../../components/loader/loader";

type deliveryType = "СДЭК" | "Почта России" | 'ПЭК' | 'Деловые линии' | 'Самовывоз (г. Пенза, ул. Дружбы 6, технопарк Яблочков)' | undefined

type deliveryItemType = {
    value: number
    label: deliveryType
}

type Props = {
    orderSum: number
} & ModalProps

export const Order = ({orderSum, ...modalProps}: Props) => {

    const [deliveryChosen, setDeliveryChosen] = useState<deliveryType>(undefined)
    const [isOrderDone, setIsOrderDone] = useState(false)
    const [isOrderLoading, setIsOrderLoading] = useState(false)

    const delivery: deliveryItemType[] = [
        {
            value: 900,
            label: 'СДЭК'
        },
        {
            value: 1200,
            label: 'Почта России'
        },
        {
            value: 1300,
            label: 'ПЭК'
        },
        {
            value: 1800,
            label: 'Деловые линии'
        },
        {
            value: 0,
            label: 'Самовывоз (г. Пенза, ул. Дружбы 6, технопарк Яблочков)'
        },

    ]

    const deliveryValue = delivery.find(item => item.label === deliveryChosen)?.value


    useEffect(() => emailjs.init("Ar4Ps6eLj_E1qLW3_"), []);
    const basket = useSelector<AppRootStateType, BasketItem[]>(state => state.basket);

    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const townRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsOrderLoading(true)
        emailjs.send("service_di6o1q2", "template_1en6x2g", {
            name: nameRef?.current?.value,
            email: emailRef?.current?.value,
            phone: phoneRef?.current?.value,
            town: townRef?.current?.value,
            basket: JSON.stringify(basket),
            delivery: deliveryChosen
        }).then(res => {
            if (res.status === 200) {
                setIsOrderDone(true)
                setIsOrderLoading(false)
            }
        }).catch(e => {
                console.log(e)
            }
        )

    }



    return (
        <Modal className={s.modal} {...modalProps}>
            {isOrderDone && <div className={s.wrapper}>Ваша заявка принята. Наш менеджер свяжется с вами в самое ближайшее время.</div>}
            {isOrderLoading && <div className={s.loader}><Loader/><span>Отправляем вашу заявку</span></div>}
            {!isOrderDone && !isOrderLoading && <div className={s.wrapper}>
                <div>После оформления заказа , мы обязательно свяжемся с вами для уточнения всех деталей оплаты и доставки.</div>
                <div className={s.sumWrapper}>
                    <span className={s.sum}>Сумма заказа: {orderSum.toLocaleString('ru-RU')} ₽</span>
                    {!!deliveryValue &&
                        <span className={s.sum}>{deliveryChosen}: {deliveryValue.toLocaleString('ru-RU')} ₽</span>}
                    {!!deliveryValue && <span
                        className={s.finalSum}>Итого: {(orderSum + deliveryValue).toLocaleString('ru-RU')} ₽</span>}
                </div>
                <form onSubmit={handleSubmit} className={s.form}>

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

                    <fieldset id="group1" style={{display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="group1">Способ получения:</label>
                        {delivery.map((item, index) =>
                            (<div key={index}>
                                <input id={item.label} type="radio" name="group1" required value={item.value}
                                       onChange={() => setDeliveryChosen(item.label)}/>
                                <label htmlFor={item.label}>{item.label}</label>
                            </div>)
                        )}
                    </fieldset>
                    <Button variant={'primary'} fullWidth>{isOrderLoading ? 'Loading' : 'Оформить заказ'}</Button>
                </form>
            </div>}
        </Modal>
    );
};