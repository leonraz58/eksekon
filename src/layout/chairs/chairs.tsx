

import {Card} from "./card/card";
import s from './chairs.module.scss'
import {PageContainer} from "../../components/pageContainer/pageContainer";
import {Filters} from "./filters/filters";
import {ChairModel, chairs, ChairType} from "../../utils/state";
import {useState} from "react";

export const Chairs = () => {

    const [subtypeFilter, setSubtypeFilter] = useState<ChairType | 'all'>('all')
    const [modelFilter, setModelFilter] = useState<ChairModel | 'all'>('all')

    console.log(subtypeFilter)

    let filteredChairs = chairs
    if (subtypeFilter !== 'all') {
        filteredChairs = chairs.filter(chair => chair.subtype === subtypeFilter)
    }
    if (modelFilter !== 'all') {
        filteredChairs = chairs.filter(chair => chair.model === modelFilter)
    }

    return (
        <section className={s.section}>
            <PageContainer>
                <Filters subtypeFilter={subtypeFilter} setSubtypeFilter={setSubtypeFilter} modelFilter={modelFilter} setModelFilter={setModelFilter} />
                <div className={s.cardWrapper}>
                    {filteredChairs.map(chair => {
                        return (<Card key={chair.id} chair={chair}/>)
                    })}
                </div>
            </PageContainer>
        </section>
    )
}