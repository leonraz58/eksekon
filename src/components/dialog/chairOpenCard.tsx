import React, {useRef, useState} from 'react';
import {Modal, ModalProps} from "../modal/modal";
import s from './chairOpenCard.module.scss'
import AliceCarousel from "react-alice-carousel";
import {Colors} from "../../layout/chairs/card/colors/colors";
import {Button} from "../button/button";

export type DialogProps = {
    images: any
} & ModalProps

export const ChairOpenCard = ({images, ...modalProps}: DialogProps) => {

    const carousel = useRef<AliceCarousel>(null);

    let colors = Object.keys(images)
    let colorsImages = colors.map(color => images[color][0]);

    const [currentColor, setCurrentColor] = useState<string>(colors[0])

    const items = images[currentColor].map((item: string) => (
        <img src={item} alt="" className={s.cover}/>
    ))

    const items2 = images[currentColor].map((item: string, i: number) => (
        <div><img key={i} onClick={() => carousel?.current?.slideTo(i)} src={item} alt="" className={s.cover2}/></div>
    ))

    return (
        <Modal {...modalProps}>
            <div className={s.wrapper}>
                <div className={s.galleryWrapper}>
                    <div style={{width: '100%'}}>
                        {/*{items[0]}*/}
                        <AliceCarousel items={items} mouseTracking disableDotsControls={true} ref={carousel}/>
                    </div>
                    <div className={s.previewWrapper}>
                        {items2}
                    </div>

                </div>
                <div className={s.infoWrapper}>
                    <h3 className={s.title}>Дизайнерский стул The Molecula Oxygen</h3>
                    <div className={s.description}>Модель: Molecula</div>
                    <div className={s.description}>SKU: Molecula Oxygen 1 VERS 2</div>
                    <Colors colorsImages={colorsImages} colors={colors} setCurrentColor={setCurrentColor}
                            currentColor={currentColor}/>
                    <div className={s.description}>Цвет стула может быть выбран из нашего каталога тканей, в наличии более 15 оттенков. Для уточнения информации, свяжитесь с нами удобным для Вас способом.</div>
                    <div className={s.priceWrapper}>
                        <span className={s.price1}>15 000 р. </span>
                        <span className={s.price2}>26 000 р.</span>
                    </div>
                    <Button variant={"primary"}>Добавить в корзину</Button>
                </div>
            </div>
        </Modal>
    );
};

