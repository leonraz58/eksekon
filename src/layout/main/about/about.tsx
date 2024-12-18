import React from 'react';
import s from './about.module.scss'

export const About = () => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Сделайте свой дом уникальным</h2>
            <p className={s.text}>
                Компания <span className={s.eksekon}>Eksekon</span> - это мастерская в городе Пенза, специализирующаяся на создании уютных и стильных
                стульев и столов из натуральных материалов. Здесь каждая деталь продумывается с особым вниманием к
                качеству и дизайну, чтобы удовлетворить потребности самых взыскательных клиентов. Продукция Eksekon
                отличается прочностью, экологичностью и элегантным исполнением, добавляя шарм и тепло вашему интерьеру.
                На каждый товар с сайта мы даем гарантию 10 лет на целостность геометрии изделия.
            </p>
        </div>

    )
};