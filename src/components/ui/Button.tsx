import { ButtonProps } from "@/types/ButtonProps"

export const Button = ({ type, children, className, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`w-full bg-(--btn-1) hover:bg-(--btn-1)/80 hover:scale-101 transition-all duration-200 cursor-pointer p-4 rounded-lg text-white font-semibold ${className}`}
            type={type}
        >
            {children}
        </button>
    )
}
