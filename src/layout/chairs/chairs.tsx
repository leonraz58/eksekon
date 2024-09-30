import {Card} from "./card/card";
import s from './chairs.module.scss'
import {PageContainer} from "../../components/pageContainer/pageContainer";

export const Chairs = () => {
    return (
        <section className={s.section}>
            <PageContainer>
                <div className={s.filters}>
                    <div className={s.filter}>Фильтр1</div>
                    <div className={s.filter}>Фильтр2</div>
                    <div className={s.filter}>Фильтр3</div>

                </div>
                <div className={s.cardWrapper}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </PageContainer>
        </section>
    )
}