import React from 'react';
import image1 from './../../assets/images/mainSlider.jpeg'
import image2 from './../../assets/images/mainSlider2.jpeg'
import s from "./carousel.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './aliceCarousel.css'
import image from './../../assets/images/main.jpeg'
import clsx from "clsx";

type animationType = 'slide' | 'fadeout'

type Props = {
    variant?: 'mainBigSlider' | 'square'
    text?: string[]
    images?: string[]

}

export const Carousel = (props: Props) => {

    const {variant, images, text} = props

    let disableDotsControls = true
    let animationType: animationType = 'slide'
    let imageVariantProps = ``
    let autoHeight = false
    let autoPlay = false

    switch(variant) {
        case 'mainBigSlider': {
            animationType = 'fadeout'
            imageVariantProps = s.imageBigSlider
            autoPlay = true
            break
        }

    }

    // const items = [
    //     <div className={s.imgWrapper}><img className={clsx(s.image, imageVariantProps)} src={image} alt=""></img><h2>slide1</h2></div>,
    //     <div className={s.imgWrapper}><img className={clsx(s.image, imageVariantProps)} alt=""></img><h2>slide2</h2></div>,
    //     <div className={s.imgWrapper}><img className={clsx(s.image, imageVariantProps)} alt=""></img><h2>slide3</h2></div>,
    // ]

    const items = images?.map((image: string, i: number) => {
        return (
            <div className={s.imgWrapper}>
                <img className={clsx(s.image, imageVariantProps)} src={image} alt=""/>
                <h2>{text ? text[i] : ''}</h2></div>
        )
    })

    return (
        <div className={s.wrapper}>
            <AliceCarousel animationType={animationType}
                           disableDotsControls={disableDotsControls}
                           items={items} autoHeight={autoHeight} autoPlay={autoPlay}
                //renderPrevButton={() => (<div>{'<'}</div>)}
            />
            {/*<div className={s.imgWrapper}><img className={s.image} src={image} alt=""></img><h2>slide1</h2></div>,*/}
        </div>
    );
};
