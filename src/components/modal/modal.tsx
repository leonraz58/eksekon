import { ComponentPropsWithoutRef, ReactNode } from 'react'

//import Close from '@/assets/icons/Close'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import s from './modal.module.scss'
import clsx from "clsx";

export type ModalProps = {
    children?: ReactNode
    onOpenChange?: (open: boolean) => void
    open?: boolean
    title?: string
    trigger?: ReactNode
    className?: string
} & ComponentPropsWithoutRef<typeof DialogPrimitive.Root>
export const Modal = ({ children, title, trigger, className, ...props }: ModalProps) => {
    return (
        <DialogPrimitive.Root {...props}>
            <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
            <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay className={s.overlay} />
                <DialogPrimitive.Content className={clsx(s.content, className)}>
                    <div className={s.header}>
                        <DialogPrimitive.Title asChild>
                                <div>{title}</div>
                        </DialogPrimitive.Title>
                        {/*<DialogPrimitive.Close className={s.closeButton}>*/}
                        {/*    <div>{" ← Назад"}</div>*/}
                        {/*</DialogPrimitive.Close>*/}
                        <DialogPrimitive.Close className={s.closeButton}>
                            X{/*x<Close height={24} width={24} />*/}
                        </DialogPrimitive.Close>
                    </div>
                    {children}
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
    )
}
