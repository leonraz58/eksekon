import {ComponentPropsWithRef} from 'react'

type Props = ComponentPropsWithRef<'svg'>

export const Basket = ({className, onClick, ...rest}: Props) => {
    return (
        <svg
            className={className}
            fill={'currentColor'}
            height={'32'}
            onClick={onClick}
            viewBox={'0 0 16 16'}
            width={'32'}
            xmlns={'http://www.w3.org/2000/svg'}
            {...rest}
        >
            <path fill="#444444"
                  d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z">
            </path>
        </svg>
    )
}