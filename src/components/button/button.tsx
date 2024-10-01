import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T
    children: ReactNode
    className?: string
    disabled?: boolean
    fullWidth?: boolean
    variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
    const {
        as: Component = 'button',
        className,
        disabled,
        fullWidth,
        variant = 'primary',
        ...rest
    } = props

    return (
        <Component
            className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} 
      ${disabled ? s.disabled : ''} ${className}`}
            disabled={disabled}
            {...rest}
        />
    )
}
