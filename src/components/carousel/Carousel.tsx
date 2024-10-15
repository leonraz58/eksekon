import React, {useRef, useState} from 'react';
import s from "./carousel.module.scss";
import AliceCarousel, {AnimationType, AutoPlayStrategy} from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './aliceCarousel.css'
import clsx from "clsx";


//type animationType = 'slide' | 'fadeout'

type Props = {
    variant?: 'mainBigSlider' | 'mainPageBlock'
    text?: string[]
    images?: string[]
    //play: boolean
}

export const Carousel = (props: Props) => {

    const carousel = useRef<AliceCarousel>(null);

    const {variant, images, text} = props

    //const [isAutoPlayOn, setIsAutoPlayOn] = useState<boolean>(true)
    //const [isDotsControlsOn, setIsDotsControlsOn] = useState<boolean>(false)

    let animationType: AnimationType = variant === 'mainBigSlider' ? AnimationType.FADEOUT : AnimationType.SLIDE
    let autoHeight = false
    let isAutoPlayOn = variant === 'mainBigSlider'
    let isButtonsControlsOn = variant === 'mainBigSlider'
    let imageVariantProps = variant === 'mainBigSlider' ? s.imageBigSlider : ''
    let isDotsControlsOn = variant === 'mainPageBlock'
    let autoPlayStrategy = variant === 'mainBigSlider' ? AutoPlayStrategy.ALL : AutoPlayStrategy.NONE
    let autoPlayInterval = variant === 'mainPageBlock' ? 500 : 3000

    const onMouseEnterHandler = () => {
        carousel?.current?._handlePlayPauseToggle()
    }
    const onMouseLeaveHandler = () => {
        carousel?.current?._handlePlayPauseToggle()
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
        <div className={s.wrapper} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            <AliceCarousel animationType={animationType}
                           disableDotsControls={!isDotsControlsOn}
                           disableButtonsControls={!isButtonsControlsOn}
                           items={items}
                           autoHeight={autoHeight}
                           autoPlay={isAutoPlayOn}
                           autoPlayInterval={autoPlayInterval}
                           autoPlayStrategy={autoPlayStrategy}
                           //renderKey={isAutoPlayOn ? 100 : 0}
                           ref={carousel}
                           infinite
                //renderPrevButton={() => (<div>{'<'}</div>)}
            />
            {/*<div className={s.imgWrapper}><img className={s.image} src={images[0]} alt=""></img></div>,*/}
        </div>
    );
};
