import React, {useRef, useState} from 'react';
import {PageContainer} from "../../../components/pageContainer/pageContainer";
import s from './chairPage.module.scss'
import AliceCarousel from "react-alice-carousel";
import {Button} from "../../../components/button/button";
import {Link, useParams} from "react-router-dom";
import {Block} from "../../../components/block/block";
import logo from '../../../assets/images/logo.png'
import {Path} from "../../../components/path/path";
import {basketActions, BasketItem} from "../../../utils/basketReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../utils/store";
import {chairs} from "../../../utils/state";


export const ChairPage = () => {

    const dispatch = useDispatch()
    const basket = useSelector<AppRootStateType, BasketItem[]>(state => state.basket);

    const {chairId} = useParams()

    let InBasketInit = basket.find(elem => elem.id === chairId)

    const [inBasket, setInBasket] = useState<boolean>(!!InBasketInit)

    const chair = chairs.find(chair => chair.id === chairId);

    const carousel = useRef<AliceCarousel>(null);
    const carousel2 = useRef<AliceCarousel>(null);

    let items
    let items2
    if (chair) {
        items = chair.images.map((item: string, i: number) => (
            <img key={i} src={item} alt="" className={s.cover}/>
        ))

        items2 = chair.images.map((item: string, i: number) => (
            <img key={i} onClick={() => {
                carousel?.current?.slideTo(i)
                carousel2?.current?.slideTo(i)
            }} src={item} alt="" className={s.cover2}/>

        ))
    }

    let chairTitle = chair?.title ?? 'error'

    const onAddItemToBasket = () => {
        if (chairId) {
            dispatch(basketActions.addItemToBasket({id: chairId, value: 1}));
            setInBasket(true)
        }
    }

    return (
        <section>
            <PageContainer>
                <Path pathItems={[{text: 'Стулья', href: '/chairs'}, {text: chairTitle}]}/>
                <Block>
                    <div className={s.wrapper}>
                        <div className={s.galleryWrapper}>
                            <div className={s.carouselWrapper}>
                                {/*{items[0]}*/}
                                <AliceCarousel items={items} mouseTracking disableDotsControls={true} ref={carousel}/>
                            </div>
                            <div className={s.previewWrapper}>
                                <AliceCarousel items={items2} mouseTracking disableDotsControls={true} autoHeight={true} responsive={{0: {items: 5}}} ref={carousel2} autoWidth={true}/>
                            </div>

                        </div>
                        <div className={s.infoWrapper}>
                            <div className={s.info_body}>
                                <img src={logo} alt="" className={s.logo}/>
                                <h3 className={s.title}>Дизайнерский стул The Molecula Oxygen</h3>
                                <div className={s.description}>Модель: Molecula</div>
                                <div className={s.description}>SKU: Molecula Oxygen 1 VERS 2</div>
                                <div className={s.description}>Цвет стула может быть выбран из нашего каталога тканей, в
                                    наличии более 15 оттенков. Для уточнения информации, свяжитесь с нами удобным для
                                    Вас способом.
                                </div>
                            </div>
                            <div className={s.info_footer}>
                                <div className={s.priceWrapper}>
                                    <span className={s.price1}>15 000 р. </span>
                                    <span className={s.price2}>26 000 р.</span>
                                </div>
                                {!inBasket && <Button variant={"primary"} fullWidth onClick={onAddItemToBasket}>Добавить в корзину</Button>}
                                {inBasket && <Button to={'/cart'} as={Link} variant={"secondary"} fullWidth>В корзине</Button>}
                            </div>

                        </div>
                    </div>
                </Block>
            </PageContainer>
        </section>
    );
};