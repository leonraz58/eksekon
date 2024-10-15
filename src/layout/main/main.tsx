import s from './main.module.scss'
import image from './../../assets/images/main.jpeg'
import imageSlider from './../../assets/images/mainSlider.jpeg'
import imageSlider2 from './../../assets/images/mainSlider2.jpeg'
import "react-alice-carousel/lib/alice-carousel.css";
import {PageContainer} from "../../components/pageContainer/pageContainer";
import {Carousel} from "../../components/carousel/Carousel";

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

                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: '100%', height: '400px', marginTop: '10px'}}>
                    <div style={{width: '40%', height: '100%', paddingRight: '5px'}}>
                        <Carousel variant={'mainPageBlock'}
                                  images={[imageSlider, imageSlider2, imageSlider, imageSlider2]}/>
                    </div>
                    <div style={{width: '60%', height: '100%', paddingLeft: '5px'}}>
                        <Carousel variant={'mainPageBlock'}
                                  images={[imageSlider, imageSlider2, imageSlider, imageSlider2]}/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: '100%', gap: '10px', height: '400px', marginTop: '10px'}}>
                    <div style={{
                        marginTop: '5px',
                        marginBottom: '5px',
                        width: '60%',
                        height: '100%',
                        overflow: 'hidden',
                        position: 'relative'
                    }} className={s.hoveredDiv}>
                        <img src={imageSlider} alt="" className={s.hoveredImage}/>
                        <h2 className={s.hoveredText}>Text Text Text</h2>
                    </div>
                    <div style={{
                        width: '40%',
                        overflow: 'hidden',
                        position: 'relative',
                        height: '100%',
                        backgroundColor: 'red',
                    }} className={s.hoveredDiv}>
                        <img src={imageSlider} alt="" className={s.hoveredImage}/>
                        <h2 className={s.hoveredText}>Text Text Text</h2>
                    </div>
                </div>
            </PageContainer>
        </div>

    </section>
}