import s from './card.module.scss'
import image from './../../../assets/images/main.jpeg'
import {Button} from "../../../components/button/button";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {useRef, useState} from "react";
import {Link} from "react-router-dom";
import {Chair} from "../chairs";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../utils/store";
import {basketActions, BasketItem} from "../../../utils/basketReducer";

type Props = {
    chair: Chair
}

export const Card = ({chair}: Props) => {

    const carousel = useRef<AliceCarousel>(null);

    const dispatch = useDispatch()
    const basket = useSelector<AppRootStateType, BasketItem[]>(state => state.basket);

    let InBasketInit = basket.find(elem => elem.id === chair.id)

    const [inBasket, setInBasket] = useState<boolean>(!!InBasketInit)

    const onAddItemToBasket = () => {
        if (chair.id) {
            dispatch(basketActions.addItemToBasket({id: chair.id, value: 1}));
            setInBasket(true)
        }
    }

    const onRemoveItemFromBasket = () => {
        if (chair.id) {
            dispatch(basketActions.removeItemFromBasket(chair.id));
            setInBasket(false)
        }
    }

    const items = chair.images.map((item: string) => (
        <div onMouseEnter={() => carousel?.current?._handlePlayPauseToggle()}
             onMouseLeave={() => carousel?.current?._handlePlayPauseToggle()}>
            <img src={item ?? image} alt="" className={s.cover}/></div>
    ))

    return (
        <div className={s.wrapper}>
            <div className={s.card}>
                {/*<div>*/}
                {/*    <img src={images['1']['yellow'][0] ?? image} alt="" className={s.cover}/>*/}
                {/*</div>*/}
                <AliceCarousel items={items} disableDotsControls={true}
                               autoPlay={false} ref={carousel}/>
                {/*<button onClick={()=>setCurrentIndex(1)}>g</button>*/}


                <h3 className={s.title}>{chair.title ?? '???'}</h3>

                <p className={s.description}>Цвет стула может быть выбран из нашего каталога тканей, в наличии более 15
                    оттенков. Для уточнения
                    информации, свяжитесь с нами удобным для Вас способом.</p>
                <div className={s.priceWrapper}>
                    <span className={s.price1}>15 000 р. </span>
                    <span className={s.price2}>26 000 р.</span>
                </div>
                <div className={s.buttonsWrapper}>
                    <Button to={`/chairs/${chair.id}`} as={Link} variant={'secondary'}>Подробнее</Button>
                    {!inBasket && <Button variant={'primary'} onClick={onAddItemToBasket}>Купить</Button>}
                    {inBasket &&
                        <Button variant={'secondary'} onClick={onRemoveItemFromBasket}>В корзине</Button>}
                </div>
            </div>
        </div>
    )
}