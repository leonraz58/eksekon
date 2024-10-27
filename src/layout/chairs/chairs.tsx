

import {Card} from "./card/card";
import s from './chairs.module.scss'
import {PageContainer} from "../../components/pageContainer/pageContainer";
import {Filters} from "./filters/filters";
import {chairs} from "../../utils/state";

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