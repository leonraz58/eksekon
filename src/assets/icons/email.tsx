import {ComponentPropsWithRef} from 'react'

type Props = ComponentPropsWithRef<'svg'>

export const Email = ({className, onClick, ...rest}: Props) => {
    return (
        <svg
            className={className}
            fill={'currentColor'}
            height={'30'}
            onClick={onClick}
            viewBox={'0 0 100 100'}
            width={'30'}
            xmlns={'http://www.w3.org/2000/svg'}
            {...rest}
        >
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM51.8276 49.2076L74.191 33.6901C73.4347 32.6649 72.2183 32 70.8466 32H29.1534C27.8336 32 26.6576 32.6156 25.8968 33.5752L47.5881 49.172C48.8512 50.0802 50.5494 50.0945 51.8276 49.2076ZM75 63.6709V37.6286L53.4668 52.57C51.1883 54.151 48.1611 54.1256 45.9095 52.5066L25 37.4719V63.6709C25 65.9648 26.8595 67.8243 29.1534 67.8243H70.8466C73.1405 67.8243 75 65.9648 75 63.6709Z"
                  fill="#000000"></path>
        </svg>
    )
}



