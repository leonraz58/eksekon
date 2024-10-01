import s from './card.module.scss'
import image from './../../../assets/images/main.jpeg'
import {ButtonCart, ButtonInfo} from "./buttons/buttonInfo";
import {Button} from "../../../components/button/button";

export const Card = () => {
    return (
        <div className={s.card}>
            <div><img src={image} alt="" className={s.cover}/></div>
            <h3 className={s.title}>Дизайнерский стул The Molecula Oxygen Красный (Version 2)</h3>
            <p className={s.description}>Цвет стула может быть выбран из нашего каталога тканей, в наличии более 15
                оттенков. Для уточнения
                информации, свяжитесь с нами удобным для Вас способом.</p>
            <div className={s.priceWrapper}>
                <span className={s.price1}>15 000 р. </span>
                <span className={s.price2}>26 000 р.</span>
            </div>
            {/*<Button/>*/}
            <div className={s.buttonsWrapper}>
                <Button variant={'primary'}>Подробнее</Button>
                <Button variant={'secondary'}>Купить</Button>
                {/*<ButtonInfo/>*/}
                {/*<ButtonCart/>*/}
            </div>
        </div>

    )
}