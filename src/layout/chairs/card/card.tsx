import s from './card.module.scss'
import image from './../../../assets/images/main.jpeg'
import {Button} from "../../../components/button/button";
import {Colors} from "./colors/colors";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './aliceCarousel.css'
import {useState} from "react";

type Props = {
    chair?: any
    images?: any
}

export const Card = ({chair, images}: Props) => {

    let colors = Object.keys(images)

    const [currentColor, setCurrentColor] = useState<string>(colors[0])


    const items = images[currentColor].map((item: string) => (
        <img src={item ?? image} alt="" className={s.cover}/>
    ))


    return (
        <div className={s.card}>
            {/*<div>*/}
            {/*    <img src={images['1']['yellow'][0] ?? image} alt="" className={s.cover}/>*/}
            {/*</div>*/}
            <AliceCarousel items={items} disableButtonsControls mouseTracking>

            </AliceCarousel>
            {/*Цвет: {currentColor}*/}
            <Colors colors={colors} setCurrentColor={setCurrentColor} currentColor={currentColor}/>

            <h3 className={s.title}>{chair.title ?? '???'}</h3>

            <p className={s.description}>Цвет стула может быть выбран из нашего каталога тканей, в наличии более 15
                оттенков. Для уточнения
                информации, свяжитесь с нами удобным для Вас способом.</p>
            <div className={s.priceWrapper}>
                <span className={s.price1}>15 000 р. </span>
                <span className={s.price2}>26 000 р.</span>
            </div>
            <div className={s.buttonsWrapper}>
                <Button variant={'primary'}>Подробнее</Button>
                <Button variant={'secondary'}>Купить</Button>
            </div>
        </div>

    )
}