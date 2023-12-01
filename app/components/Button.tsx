'use client'

import { Icon } from '@mui/material';
import { IconType } from 'react-icons'

interface ButtonProps {
    label: string;
    disable?: boolean;
    outline?: boolean
    small?: boolean;
    custom?: string;
    icon?: IconType
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
    label, disable, outline, small, custom, icon: Icon, onClick
}) => {
    return (
        <button onClick={onClick} disabled={disable} className={`disabled:opacity-70  disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-full border-slate-700 flex items-center justify-center gap-2 
        ${small ? 'text-sm font-light' : 'text-md font-semibold'}
        ${small ? 'py-1 px-2 border-[1px]' : 'py-3 px-4 border-2'}
        ${custom ? custom : ''}
        ${outline ? "bg-slate-700" : 'bg-white'}
        ${outline ? "bg-white" : 'bg-slate-700'}`} >
            {Icon && <Icon size={25} />}
            {label}
        </button>)
}

export default Button