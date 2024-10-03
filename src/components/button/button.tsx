import React, { FC } from 'react'

interface ButtonProps {
    className: string
    text: string,

    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    disabled?: boolean,
}

const Button: FC<ButtonProps> = ({ className, text, onClick, disabled }) => {
    return (
        <button disabled={disabled} onClick={onClick} className={className}>
            {text}
        </button>
    )
}

export default Button;