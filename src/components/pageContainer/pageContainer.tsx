import s from './pageContainer.module.scss'
import {ComponentPropsWithoutRef} from "react";

type Props = ComponentPropsWithoutRef<'div'>

export const PageContainer = ({children}:Props) => {
    return <div className={s.container}>{children}</div>
}