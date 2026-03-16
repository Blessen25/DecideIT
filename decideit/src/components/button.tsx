import type { ButtonProps } from '../interface';
import './styles.css';

export const Button_Primary:React.FC<ButtonProps> = (props) => {

    return(

        <>
            <a href={`${props.route ? props.route : "#"}`} className={`button body-text button-primary fw-700 deco-none ${props.class ? props.class : ""}`} style={props.style} onClick={props.onClick}>
                {props.label}
            </a>
        </>
    )
}

