import { ActionButton } from "./Button.styled"

export const Button = ({title, onClick, ...props}) => {
    return (
        <ActionButton type="submit" onClick={onClick} {...props}>{title}</ActionButton>
    )
}