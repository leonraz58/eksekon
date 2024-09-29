import s from './button.module.scss'

export const Button = () => {
    return <div id="container" className={s.wrapper}>
        <button className={s.learnmore}>
    <span className={s.circle} aria-hidden="true">
      <span className={`${s.icon} ${s.arrow}`}></span>
    </span>
            <span className={s.buttontext}>Подробнее</span>
        </button>
    </div>
}