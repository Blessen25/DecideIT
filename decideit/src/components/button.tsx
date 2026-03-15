import type { ButtonProps } from '../interface';
import './styles.css';

export const Button_Primary:React.FC<ButtonProps> = (props) => {

    return(

        <>
            <a href="#" className="button body-text button-primary fw-700 deco-none">
                {props.label}
            </a>
        </>
    )
}

