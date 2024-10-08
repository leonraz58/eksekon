import React from 'react';
import image1 from './../../assets/images/mainSlider.jpeg'
import image2 from './../../assets/images/mainSlider2.jpeg'
import s from "./carousel.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './aliceCarousel.css'
import image from './../../assets/images/main.jpeg'

export const Carousel = () => {

    const items = [
        <div className={s.imgWrapper}><img className={s.image} src={image} alt=""></img><h2>slide1</h2></div>,
        <div className={s.imgWrapper}><img className={s.image} src={image} alt=""></img><h2>slide2</h2></div>,
        <div className={s.imgWrapper}><img className={s.image} src={image} alt=""></img><h2>slide3</h2></div>,
    ]
    return (
        <div className={s.wrapper}>
            <AliceCarousel animationType={'fadeout'}
                           disableDotsControls={true}
                           items={items} autoHeight={false}
                //renderPrevButton={() => (<div>{'<'}</div>)}
            />
            {/*<div className={s.imgWrapper}><img className={s.image} src={image} alt=""></img><h2>slide1</h2></div>,*/}
        </div>
    );
};
