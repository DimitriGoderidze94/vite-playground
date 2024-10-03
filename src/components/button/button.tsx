import React, { FC } from 'react';
import style from "./button.module.scss";

interface ButtonProps {
    className: string
    text: string,

    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    disabled?: boolean,
}

const Button: FC<ButtonProps> = ({ className, text, onClick, disabled }) => {
    return (
        <button disabled={disabled} onClick={onClick} className={`${style.btn} ${style[className]}`}>
            {text}
        </button>
    )
}

export default Button;