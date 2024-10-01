import {Card} from "./card/card";
import s from './chairs.module.scss'
import {PageContainer} from "../../components/pageContainer/pageContainer";
import {Filters} from "./filters/filters";

import image1 from './images/44131302.jpg'
import image2 from './images/97718796.jpg'
import image3 from './images/56613951.jpg'

const chairs = [
    {id: '1', title: 'Дизайнерский стул The Molecula Oxygen Красный (Version 2)', description: 'Цвет стула может быть выбран из нашего каталога тканей, в наличии более 15 оттенков. Для уточнения информации, свяжитесь с нами удобным для Вас способом.', colors: ['yellow']},
]

const images = {
    '1': {
        'yellow': [image1, image2, image3]
    }
}

export const Chairs = () => {
    return (
        <section className={s.section}>
            <PageContainer>
                <Filters/>
                <div className={s.cardWrapper}>
                    <Card chair={chairs[0]} images={images['1']} />
                    <Card chair={chairs[0]} images={images['1']} />
                    <Card chair={chairs[0]} images={images['1']} />
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                </div>
            </PageContainer>
        </section>
    )
}