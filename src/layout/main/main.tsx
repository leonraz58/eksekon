import s from './main.module.scss'
import AliceCarousel from "react-alice-carousel";
import image from './../../assets/images/main.jpeg'
import imageSlider from './../../assets/images/mainSlider.jpeg'
import imageSlider2 from './../../assets/images/mainSlider2.jpeg'
import "react-alice-carousel/lib/alice-carousel.css";
import {PageContainer} from "../../components/pageContainer/pageContainer";
import {Carousel} from "../../components/carousel/Carousel";
import {useState} from "react";
import {Carousel2} from "../../components/carousel2/Carousel2";

export const Main = () => {

    // const items = [
    //     <div className={s.imgWrapper}><img className={s.image} src={imageSlider} alt=""></img></div>,
    //     <div className={s.imgWrapper}><img className={s.image} src={imageSlider2} alt=""></img></div>,
    //     <div className={s.imgWrapper}><img className={s.image} src={imageSlider} alt=""></img></div>,
    // ]

    // const [play, setPlay] = useState(false);
    // console.log(play)

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
                <Carousel variant={'mainBigSlider'} images={[imageSlider, imageSlider2]}
                         text={['slide1', 'slide2', 'slide3']}
                />

                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: '100%', }}>
                    <div style={{marginTop: '10px', marginBottom: '10px', width: '50%', paddingRight: '5px'}}>
                        <Carousel variant={'mainPageBlock'}
                                  images={[imageSlider, imageSlider2, imageSlider, imageSlider2]}/>
                    </div>
                    <div style={{marginTop: '10px', marginBottom: '10px', width: '50%', paddingLeft: '5px'}}>
                        <Carousel variant={'mainPageBlock'}
                                  images={[imageSlider, imageSlider2, imageSlider, imageSlider2]}/>
                    </div>
                </div>
            </PageContainer>
        </div>

    </section>
}