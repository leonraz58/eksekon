import {Card} from "./card/card";
import s from './chairs.module.scss'
import {PageContainer} from "../../components/pageContainer/pageContainer";
import {Filters} from "./filters/filters";

import image1 from './images/yellow/44131302.jpg'
import image2 from './images/yellow/97718796.jpg'
import image3 from './images/yellow/56613951.jpg'

import green1 from './images/green/19226639.jpg'
import green2 from './images/green/82777417.jpg'
import green3 from './images/green/71886955.jpg'
import green4 from './images/green/93328930.jpg'

export type Chair = {
    id: string
    title: string
    description: string
    colors: string[]
    images: string[]
}

export const chairs: Chair[] = [
    {
        id: '1',
        title: 'Дизайнерский стул The Molecula Oxygen',
        description: 'Цвет стула может быть выбран из нашего каталога тканей, в наличии более 15 оттенков. Для уточнения информации, свяжитесь с нами удобным для Вас способом.',
        colors: ['yellow'],
        images: [image1, image2, image3]
    },
    {
        id: '2',
        title: 'Дизайнерский стул The Molecula Oxygen',
        description: 'Цвет стула может быть выбран из нашего каталога тканей, в наличии более 15 оттенков. Для уточнения информации, свяжитесь с нами удобным для Вас способом.',
        colors: ['yellow'],
        images: [green4, green3, green2, green1]
    },
    {
        id: '3',
        title: 'Дизайнерский стул The Molecula Oxygen',
        description: 'Цвет стула может быть выбран из нашего каталога тканей, в наличии более 15 оттенков. Для уточнения информации, свяжитесь с нами удобным для Вас способом.',
        colors: ['yellow'],
        images: [image1, image2, image3]
    },
]

type Images = {
    [id: string] : string[]
}

export const images: Images = {
    '1': [image1, image2, image3],
    '2': [green4, green3, green2, green1],
    '3': [green4, green3, green2, green1]
}

export const Chairs = () => {

    return (
        <section className={s.section}>
            <PageContainer>
                <Filters/>
                <div className={s.cardWrapper}>
                    {chairs.map(chair => {
                        return (<Card key={chair.id} chair={chair}/>)
                    })}
                </div>
            </PageContainer>
        </section>
    )
}