import CHAIRS from "../assets/images/chairs/export";
import {info} from "./info";

export type ChairType = 'chair' | 'semi-bar-chair' | 'tabouret' | 'bench'
export type ChairModel = 'lines' | 'magnet' | 'alfa' | 'molecula' | 'all'

export type Chair = {
    id: string
    title: string
    description: string
    images: string[]
    subtype: ChairType
    model: ChairModel
    price: {
        current: number
        withoutDiscount: number
    }
}

export const chairs: Chair[] = [
    {
        id: 'benlines1',
        title: 'Дизайнерская лавка Lines (Сливочный+Манго 8 полос)',
        description: info.benlines.description,
        images: CHAIRS.benlines1,
        subtype: 'bench',
        model: 'lines',
        price: {
            current: 30000,
            withoutDiscount: 32000
        }
    },
    {
        id: 'benlines2',
        title: 'Дизайнерская лавка Lines (Графит 7 полос)',
        description: info.benlines.description,
        images: CHAIRS.benlines2,
        subtype: 'bench',
        model: 'lines',
        price: {
            current: 27000,
            withoutDiscount: 32000
        }
    },
    {
        id: 'chbm1',
        title: 'Дизайнерский стул в стиле Bold Moustache (Черный)',
        description: info.chbm.description,
        images: CHAIRS.chbm1,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 28000
        }
    },
    {
        id: 'chbm2',
        title: 'Дизайнерский стул в стиле Bold Moustache (Малахитовый)',
        description: info.chbm.description,
        images: CHAIRS.chbm2,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 22000
        }
    },
    {
        id: 'chbm3',
        title: 'Дизайнерский стул в стиле Bold Moustache (Корица)',
        description: info.chbm.description,
        images: CHAIRS.chbm3,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chbm4',
        title: 'Дизайнерский стул в стиле Bold Moustache (Манго)',
        description: info.chbm.description,
        images: CHAIRS.chbm4,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 26000
        }
    },
    {
        id: 'chbm5',
        title: 'Дизайнерский стул в стиле Bold Moustache (Нежно-розовый)',
        description: info.chbm.description,
        images: CHAIRS.chbm5,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 17500,
            withoutDiscount: 24000
        }
    },
    {
        id: 'chbm6',
        title: 'Дизайнерский стул в стиле Bold Moustache (Фуксия)',
        description: info.chbm.description,
        images: CHAIRS.chbm6,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 23000
        }
    },
    {
        id: 'chbm7',
        title: 'Дизайнерский стул в стиле Bold Moustache (Нежно-серый)',
        description: info.chbm.description,
        images: CHAIRS.chbm7,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chbm8',
        title: 'Дизайнерский стул в стиле Bold Moustache (Зеленый)',
        description: info.chbm.description,
        images: CHAIRS.chbm8,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chbm9',
        title: 'Дизайнерский стул в стиле Bold Moustache (Кофе с молоком 2)',
        description: info.chbm.description,
        images: CHAIRS.chbm9,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chbm10',
        title: 'Дизайнерский стул в стиле Bold Moustache (Пшеничный)',
        description: info.chbm.description,
        images: CHAIRS.chbm10,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chbm11',
        title: 'Дизайнерский стул в стиле Bold Moustache (Сливочный)',
        description: info.chbm.description,
        images: CHAIRS.chbm11,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 17500,
            withoutDiscount: 21000
        }
    },
    {
        id: 'chbm12',
        title: 'Дизайнерский стул в стиле Bold Moustache (Марсала 2)',
        description: info.chbm.description,
        images: CHAIRS.chbm12,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chbm13',
        title: 'Дизайнерский стул в стиле Bold Moustache (Электрик)',
        description: info.chbm.description,
        images: CHAIRS.chbm13,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chbm14',
        title: 'Дизайнерский стул в стиле Bold Moustache (Розовый букле)',
        description: info.chbm.description,
        images: CHAIRS.chbm14,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chbm15',
        title: 'Дизайнерский стул в стиле Bold Moustache (Темно-бирюзовый)',
        description: info.chbm.description,
        images: CHAIRS.chbm15,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chbm16',
        title: 'Дизайнерский стул в стиле Bold Moustache (Серый)',
        description: info.chbm.description,
        images: CHAIRS.chbm16,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chbm17',
        title: 'Дизайнерский стул в стиле Bold Moustache (Сиреневый)',
        description: info.chbm.description,
        images: CHAIRS.chbm17,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chbm18',
        title: 'Дизайнерский стул в стиле Bold Moustache (Мятный)',
        description: info.chbm.description,
        images: CHAIRS.chbm18,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chbm19',
        title: 'Дизайнерский стул в стиле Bold Moustache (Нежно-желтый)',
        description: info.chbm.description,
        images: CHAIRS.chbm19,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chbm20',
        title: 'Дизайнерский стул в стиле Bold Moustache (Дымчатый голубой)',
        description: info.chbm.description,
        images: CHAIRS.chbm20,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chbm21',
        title: 'Дизайнерский стул в стиле Bold Moustache (Стальной 2)',
        description: info.chbm.description,
        images: CHAIRS.chbm21,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chbm22',
        title: 'Дизайнерский стул в стиле Bold Moustache (Леопард коричневый)',
        description: info.chbm.description,
        images: CHAIRS.chbm22,
        subtype: 'chair',
        model: 'magnet',
        price: {
            current: 15000,
            withoutDiscount: 28000
        }
    },
    {
        id: 'chlines1',
        title: 'Дизайнерский стул Lines (Трава)',
        description: info.chlines.description,
        images: CHAIRS.chlines1,
        subtype: 'chair',
        model: "lines",
        price: {
            current: 15000,
            withoutDiscount: 28000
        }
    },
    {
        id: 'chlines2',
        title: 'Дизайнерский стул Lines (Манго)',
        description: info.chlines.description,
        images: CHAIRS.chlines2,
        subtype: 'chair',
        model: "lines",
        price: {
            current: 15000,
            withoutDiscount: 28000
        }
    },
    {
        id: 'chlines3',
        title: 'Дизайнерский стул Lines (Нежно-серый)',
        description: info.chlines.description,
        images: CHAIRS.chlines3,
        subtype: 'chair',
        model: "lines",
        price: {
            current: 15000,
            withoutDiscount: 28000
        }
    },
    {
        id: 'chlines4',
        title: 'Дизайнерский стул Lines (Сливочный)',
        description: info.chlines.description,
        images: CHAIRS.chlines4,
        subtype: 'chair',
        model: "lines",
        price: {
            current: 15000,
            withoutDiscount: 28000
        }
    },
    {
        id: 'chlines5',
        title: 'Дизайнерский стул Lines (Черный)',
        description: info.chlines.description,
        images: CHAIRS.chlines5,
        subtype: 'chair',
        model: "lines",
        price: {
            current: 15000,
            withoutDiscount: 28000
        }
    },
    {
        id: 'chmol2v1',
        title: 'Дизайнерский стул The Molecula Oxygen Синий (Version 2)',
        description: info.chmol.description,
        images: CHAIRS.chmol2v1,
        subtype: 'chair',
        model: 'molecula',
        price: {
            current: 23000,
            withoutDiscount: 35000
        }
    },
    {
        id: 'chmol2v2',
        title: 'Дизайнерский стул The Molecula Oxygen Серый (Version 2)',
        description: info.chmol.description,
        images: CHAIRS.chmol2v2,
        subtype: 'chair',
        model: 'molecula',
        price: {
            current: 23000,
            withoutDiscount: 35000
        }
    },
    {
        id: 'chmol2v3',
        title: 'Дизайнерский стул The Molecula Oxygen Красный (Version 2)',
        description: info.chmol.description,
        images: CHAIRS.chmol2v3,
        subtype: 'chair',
        model: 'molecula',
        price: {
            current: 23000,
            withoutDiscount: 35000
        }
    },
    {
        id: 'sbbm1',
        title: 'Дизайнерский полубарный стул 62см в стиле Bold Moustache (Сливочный букле)',
        description: info.sbbm.description,
        images: CHAIRS.sbbm1,
        subtype: 'semi-bar-chair',
        model: 'magnet',
        price: {
            current: 20000,
            withoutDiscount: 25000
        }
    },
    {
        id: 'sbbm2',
        title: 'Дизайнерский полубарный стул 62см в стиле Bold Moustache (Розовый букле)',
        description: info.sbbm.description,
        images: CHAIRS.sbbm2,
        subtype: 'semi-bar-chair',
        model: 'magnet',
        price: {
            current: 20000,
            withoutDiscount: 25000
        }
    },
    {
        id: 'sbbm3',
        title: 'Дизайнерский полубарный стул 62см в стиле Bold Moustache (Бирюзовый букле)',
        description: info.sbbm.description,
        images: CHAIRS.sbbm3,
        subtype: 'semi-bar-chair',
        model: 'magnet',
        price: {
            current: 20000,
            withoutDiscount: 25000
        }
    },
    {
        id: 'tabbm1',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Корица)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm1,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 12000,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tabbm2',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Пыльно-розовый)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm2,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 12000,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tabbm3',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Малахитовый)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm3,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 12000,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tabbm4',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Черный)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm4,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 12000,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tabbm5',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Зеленый)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm5,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 12000,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tabbm6',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Нежно-розовый)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm6,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 13500,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tabbm7',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Нежно-серый)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm7,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 12000,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tabbm8',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Фуксия)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm8,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 12000,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tabbm9',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Манго)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm9,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 12000,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tabbm10',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Пшеничный)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm10,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 12000,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tabbm11',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Марсала 2)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm11,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 12000,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tabbm12',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Розовая пудра)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm12,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 12000,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tabbm13',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Синий Электрик)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm13,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 12000,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tabbm14',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Серо-бирюзовый)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm14,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 12000,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tabbm15',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Белый букле)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm15,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 12000,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tabbm16',
        title: 'Дизайнерский табурет в стиле Bold Moustache (Леопард коричневый)',
        description: info.tabbm.description,
        images: CHAIRS.tabbm16,
        subtype: 'tabouret',
        model: 'magnet',
        price: {
            current: 12000,
            withoutDiscount: 14000
        }
    },
    {
        id: 'tablines1',
        title: 'Дизайнерский табурет Lines (Трава)',
        description: info.tablines.description,
        images: CHAIRS.tablines1,
        subtype: 'tabouret',
        model: 'lines',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'tablines2',
        title: 'Дизайнерский табурет Lines (Манго)',
        description: info.tablines.description,
        images: CHAIRS.tablines2,
        subtype: 'tabouret',
        model: 'lines',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'tablines3',
        title: 'Дизайнерский табурет Lines (Нежно-серый)',
        description: info.tablines.description,
        images: CHAIRS.tablines3,
        subtype: 'tabouret',
        model: 'lines',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'tablines4',
        title: 'Дизайнерский табурет Lines (Нежно-серый + серый)',
        description: info.tablines.description,
        images: CHAIRS.tablines4,
        subtype: 'tabouret',
        model: 'lines',
        price: {
            current: 17000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'tablines5',
        title: 'Дизайнерский табурет Lines (Темно-бирюзовый)',
        description: info.tablines.description,
        images: CHAIRS.tablines5,
        subtype: 'tabouret',
        model: 'lines',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'tablines6',
        title: 'Дизайнерский табурет Lines (Стальной 2)',
        description: info.tablines.description,
        images: CHAIRS.tablines6,
        subtype: 'tabouret',
        model: 'lines',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'tablines7',
        title: 'Дизайнерский табурет Lines (Серый букле)',
        description: info.tablines.description,
        images: CHAIRS.tablines7,
        subtype: 'tabouret',
        model: 'lines',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'tablines8',
        title: 'Дизайнерский табурет Lines (Электрик)',
        description: info.tablines.description,
        images: CHAIRS.tablines8,
        subtype: 'tabouret',
        model: 'lines',
        price: {
            current: 15000,
            withoutDiscount: 18000
        }
    },
    {
        id: 'chalfa4',
        title: 'Деревянный дизайнерский стул "Alfa" (Белый)',
        description: info.chalfa.description,
        images: CHAIRS.chalfa4,
        subtype: 'chair',
        model: 'alfa',
        price: {
            current: 55000,
            withoutDiscount: 74000
        }
    }
]