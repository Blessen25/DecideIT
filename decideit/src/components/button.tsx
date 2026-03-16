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

export const Button_Secondary:React.FC<ButtonProps> = (props) => {

    return(

        <>
            <a href={`${props.route ? props.route : "#"}`} className={`button body-text button-secondary fw-700 deco-none ${props.class ? props.class : ""}`} style={props.style} onClick={props.onClick}>
                {props.label}
            </a>
        </>
    )
}

export const Button_Primary_with_Icon:React.FC<ButtonProps> = (props) => {

    return(

        <>
            <a href={`${props.route ? props.route : "#"}`} className={`button button-icon body-text button-primary fw-700 deco-none ${props.class ? props.class : ""}`} style={props.style} onClick={props.onClick}>  
                <i className={`body-small ${props.icon ? props.icon : "" }`}></i>
                {props.label}
            </a>
        </>
    )
}

export const Button_Secondary_with_Icon:React.FC<ButtonProps> = (props) => {

    return(

        <>
            <a href={`${props.route ? props.route : "#"}`} className={`button button-icon body-text button-secondary fw-700 deco-none ${props.class ? props.class : ""}`} style={props.style} onClick={props.onClick}>  
                <i className={`body-small ${props.icon ? props.icon : "" }`}></i>
                {props.label}
            </a>
        </>
    )
}