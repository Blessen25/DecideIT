import type { ContainerProps } from "../interface";

const Container:React.FC<ContainerProps> = (props) => {

    return(

        <>
            <div className={`container_layout ${props.layout_class ? props.layout_class : ""}`} style={props.layout_style ? JSON.parse(props.layout_style) : {}}>
                <div className={`containercstm ${props.container_class ? props.container_class : ""}`} style={props.container_style ? JSON.parse(props.container_style) : {}}>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Container;