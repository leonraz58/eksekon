import s from './main.module.scss'
import AliceCarousel from "react-alice-carousel";
import image from './../../assets/images/main.jpeg'
import imageSlider from './../../assets/images/mainSlider.jpeg'
import imageSlider2 from './../../assets/images/mainSlider2.jpeg'
import "react-alice-carousel/lib/alice-carousel.css";
//import './../../styles/aliceCarousel.css'
import {PageContainer} from "../../components/pageContainer/pageContainer";
import {Carousel} from "../../components/carousel/Carousel";

export const Main = () => {

    const items = [
        <div className={s.imgWrapper}><img className={s.image} src={imageSlider} alt=""></img><h2>slide1</h2></div>,
        <div className={s.imgWrapper}><img className={s.image} src={imageSlider2} alt=""></img><h2>slide2</h2></div>,
        <div className={s.imgWrapper}><img className={s.image} src={imageSlider} alt=""></img><h2>slide3</h2></div>,
    ]

    return <section>
        <div className={s.sectionMain}>
            <PageContainer>
                {/*<div className={s.mainDiv}><img className={s.image} src={image} alt=""/></div>*/}
                {/*<div className={s.mainDiv}>*/}
                {/*    <AliceCarousel animationType={'fadeout'}*/}
                {/*                   disableDotsControls={true}*/}
                {/*                   items={items}*/}
                {/*        //renderPrevButton={() => (<div>{'<'}</div>)}*/}
                {/*    />*/}
                {/*</div>*/}
                <Carousel variant={'mainBigSlider'} images={[imageSlider, imageSlider2, image]} text={['slide1', 'slide2', 'slide3']} />
            </PageContainer>
        </div>

    </section>
}