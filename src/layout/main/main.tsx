import s from './main.module.scss'
import image from './../../assets/images/main.jpeg'
import imageSlider from './../../assets/images/mainSlider.jpeg'
import imageSlider2 from './../../assets/images/mainSlider2.jpeg'
import "react-alice-carousel/lib/alice-carousel.css";
import {PageContainer} from "../../components/pageContainer/pageContainer";
import {Carousel} from "../../components/carousel/Carousel";
import {CategoryCard} from "./categoryCard/categoryCard";

import lines from './images/lines.jpg'
import magnet from './images/magnet.jpg'
import molecula from './images/molecula.jpg'
import alfa from './images/alfa.jpg'
import {About} from "./about/about";

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
                <About/>
                <h2 className={s.title}>Каталог Eksekon</h2>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    alignItems: "center",
                    width: '100%',
                    height: '400px',
                    marginTop: '10px'
                }}>
                    <CategoryCard image={lines} text={'Коллекция Lines'} href={'/chairs?modelFilter=lines'}/>
                    <CategoryCard image={magnet} text={'Коллекция Magnet'} href={'/chairs?modelFilter=magnet'}/>
                    <CategoryCard image={molecula} text={'Коллекция Molecula'} href={'/chairs?modelFilter=molecula'}/>
                    <CategoryCard image={alfa} text={'Коллекция Alfa'} href={'/chairs?modelFilter=alfa'}/>
                </div>
            </PageContainer>
        </div>

    </section>
}