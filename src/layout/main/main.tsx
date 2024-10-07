import s from './main.module.scss'
import AliceCarousel from "react-alice-carousel";
import image from './../../assets/images/main.jpeg'
import imageSlider from './../../assets/images/mainSlider.jpeg'
import './../../styles/aliceCarousel.css'

export const Main = () => {

    const items = [
        <div className={s.imgWrapper}><img className={s.image} src={imageSlider} alt=""></img><h2>slide1</h2></div>,
        <div className={s.imgWrapper}><img className={s.image} src={imageSlider} alt=""></img><h2>slide2</h2></div>,
        <div className={s.imgWrapper}><img className={s.image} src={imageSlider} alt=""></img><h2>slide3</h2></div>,
    ]

    return <section className={s.sectionMain}>
        {/*<div className={s.mainDiv}><img className={s.image} src={image} alt=""/></div>*/}
        <div className={s.mainDiv}><AliceCarousel disableDotsControls={true} items={items}/></div>


    </section>
}