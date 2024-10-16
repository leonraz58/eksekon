import React, {useRef} from 'react';
import {PageContainer} from "../../../components/pageContainer/pageContainer";
import s from './chairPage.module.scss'
import AliceCarousel from "react-alice-carousel";
import {Button} from "../../../components/button/button";
import {chairs} from "../chairs";
import {useParams} from "react-router-dom";
import {Block} from "../../../components/block/block";
import logo from '../../../assets/images/logo.png'


export const ChairPage = () => {

    const {chairId} = useParams()

    const chair = chairs.find(chair => chair.id === chairId);

    const carousel = useRef<AliceCarousel>(null);

    let items
    let items2
    if (chair) {
        items = chair.images.map((item: string) => (
            <img src={item} alt="" className={s.cover}/>
        ))

        items2 = chair.images.map((item: string, i: number) => (
            <div><img key={i} onClick={() => carousel?.current?.slideTo(i)} src={item} alt="" className={s.cover2}/>
            </div>
        ))
    }


    return (
        <section>
            <PageContainer>
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
                                <Button variant={"secondary"}>Добавить в корзину</Button>
                            </div>

                        </div>
                    </div>
                </Block>
            </PageContainer>
        </section>
    );
};