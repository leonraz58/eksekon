import React, {useRef, useState} from 'react';
import {PageContainer} from "../../../components/pageContainer/pageContainer";
import s from './chairPage.module.scss'
import AliceCarousel from "react-alice-carousel";
import {Button} from "../../../components/button/button";
import {chairs} from "../chairs";
import {useParams} from "react-router-dom";
import {Block} from "../../../components/block/block";
import logo from '../../../assets/images/logo.png'
import {Path} from "../../../components/path/path";
import {basketActions, BasketItem} from "../../../utils/basketReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../utils/store";


export const ChairPage = () => {

    const dispatch = useDispatch()
    const basket = useSelector<AppRootStateType, BasketItem[]>(state => state.basket);

    const {chairId} = useParams()

    let isInBasket = basket.find(elem => elem.id === chairId)

    const chair = chairs.find(chair => chair.id === chairId);

    // let initInBasket = false
    // if (chair?.id) {
    //     let localStorageData = localStorage.getItem('id')
    //     if (localStorageData) {
    //         let ids = JSON.parse(localStorageData)
    //         initInBasket = !!ids.includes(chair.id)
    //     }
    // }

    const [inBasket, setInBasket] = useState<boolean>(!!isInBasket)

    const carousel = useRef<AliceCarousel>(null);

    let items
    let items2
    if (chair) {
        items = chair.images.map((item: string, i: number) => (
            <img key={i} src={item} alt="" className={s.cover}/>
        ))

        items2 = chair.images.map((item: string, i: number) => (
            <div key={i}><img onClick={() => carousel?.current?.slideTo(i)} src={item} alt="" className={s.cover2}/>
            </div>
        ))
    }

    let chairTitle = chair?.title ?? 'error'

    const onAddItemToBasket = () => {
        if (chairId) {
            dispatch(basketActions.addItemToBasket({id: chairId, value: 1}));
            setInBasket(true)
        }
    }

    const onRemoveItemFromBasket = () => {
        if (chairId) {
            dispatch(basketActions.removeItemFromBasket(chairId));
            setInBasket(false)
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
                                {items2}
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
                                {!inBasket && <Button variant={"secondary"} fullWidth onClick={onAddItemToBasket}>Добавить в корзину</Button>}
                                {inBasket && <Button variant={"secondary"} fullWidth onClick={onRemoveItemFromBasket}>Удалить из
                                    корзины</Button>}
                            </div>

                        </div>
                    </div>
                </Block>
            </PageContainer>
        </section>
    );
};