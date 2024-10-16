import React, {ComponentPropsWithoutRef} from 'react';
import s from './block.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

export const Block = ({children}:Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                {children}
            </div>
        </div>
    );
};