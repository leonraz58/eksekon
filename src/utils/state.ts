import image1 from "../layout/chairs/images/yellow/44131302.jpg";
import image2 from "../layout/chairs/images/yellow/97718796.jpg";
import image3 from "../layout/chairs/images/yellow/56613951.jpg";
import green4 from "../layout/chairs/images/green/93328930.jpg";
import green3 from "../layout/chairs/images/green/71886955.jpg";
import green2 from "../layout/chairs/images/green/82777417.jpg";
import green1 from "../layout/chairs/images/green/19226639.jpg";
import CHAIRS from "../assets/images/chairs/export";
import {info} from "./info";

export type Chair = {
    id: string
    title: string
    description: string
    images: string[]
}

export const chairs: Chair[] = [
    {
        id: 'chbm1',
        title: 'Дизайнерский стул в стиле Bold Moustache (Черный)',
        description: info.chbm.description,
        images: CHAIRS.chbm1
    },
    {
        id: 'benlines1',
        title: 'Дизайнерская лавка Lines (Сливочный+Манго 8 полос)',
        description: info.benlines.description,
        images: CHAIRS.benlines1
    },
    {
        id: 'benlines2',
        title: 'Дизайнерская лавка Lines (Графит 7 полос)',
        description: info.benlines.description,
        images: CHAIRS.benlines2
    },
]