import s from './main.module.scss'

export const Main = () => {
    return <section className={s.sectionMain}>
            <div className={s.wrapper}>
                <div>
                    <h1 className={s.title1}>Eksekon</h1>
                    <h2 className={s.title2}>Новый взгляд на дизайн мебели</h2>
                </div>
                <div className={s.form1}><span>Форма</span></div>
            </div>
    </section>
}