import { Link } from "react-router-dom";
import "./style.css"

export interface IButton {
    text: string;
    onClick(): void;
    to: string;
    disabled: boolean;
}

export const Button = ({text, onClick, to, disabled}: IButton) => {
    return (
        <Link to={to} className="link">
            <button disabled={disabled} className={disabled ? "btn red": "btn blue"} onClick={onClick}>
                {text}    
            </button>
        </Link>
    )
}