import {Card} from "./card/card";
import s from './chairs.module.scss'
import {PageContainer} from "../../components/pageContainer/pageContainer";
import {Filters} from "./filters/filters";

export const Chairs = () => {
    return (
        <section className={s.section}>
            <PageContainer>
                <Filters/>
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