import s from './main.module.scss'
import image from './../../assets/images/main.jpeg'
import imageSlider from './../../assets/images/mainSlider.jpeg'
import imageSlider2 from './../../assets/images/mainSlider2.jpeg'
import "react-alice-carousel/lib/alice-carousel.css";
import {PageContainer} from "../../components/pageContainer/pageContainer";
import {Carousel} from "../../components/carousel/Carousel";
import {CategoryCard} from "./categoryCard/categoryCard";

export const Main = () => {

    return <section>
        <div className={s.sectionMain}>
            <PageContainer>
                <Carousel variant={'mainBigSlider'} images={[imageSlider, imageSlider2]}
                          text={['slide1', 'slide2', 'slide3']}
                />

                {/*<div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: '100%', height: '400px', marginTop: '10px'}}>*/}
                {/*    <div style={{width: '40%', height: '100%', paddingRight: '5px'}}>*/}
                {/*        <Carousel variant={'mainPageBlock'}*/}
                {/*                  images={[imageSlider, imageSlider2, imageSlider, imageSlider2]}/>*/}
                {/*    </div>*/}
                {/*    <div style={{width: '60%', height: '100%', paddingLeft: '5px'}}>*/}
                {/*        <Carousel variant={'mainPageBlock'}*/}
                {/*                  images={[imageSlider, imageSlider2, imageSlider, imageSlider2]}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    alignItems: "center",
                    width: '100%',
                    height: '400px',
                    marginTop: '10px'
                }}>
                    <CategoryCard image={imageSlider} text={'text text text'}/>
                    <CategoryCard image={imageSlider} text={'text text text'}/>
                    <CategoryCard image={imageSlider} text={'text text text'}/>
                    <CategoryCard image={imageSlider} text={'text text text'}/>
                    <CategoryCard image={imageSlider} text={'text text text'}/>
                    <CategoryCard image={imageSlider} text={'text text text'}/>
                </div>
            </PageContainer>
        </div>

    </section>
}