import {ReactNode} from "react";
import s from './badge.module.scss'
import {Slot} from "@radix-ui/react-slot";
import clsx from "clsx";

type BadgeProps = {
    badgeContent: number
    children: ReactNode
    className?: string
}

export const Badge = (props: BadgeProps) => {
    const { badgeContent, children, className } = props

    const Component = Slot

    return (
        <div className={s.boxWrap}>
            <Component className={s.icon}>{children}</Component>
            {badgeContent > 0 && (
                <div className={clsx(s.indicator, className)}>{badgeContent}</div>
            )}
        </div>
    )
}