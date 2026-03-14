import type { ContainerProps } from "../interface";

const Container:React.FC<ContainerProps> = (props) => {

    return(

        <>
            <div className="container_layout">
                <div className="containercstm">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Container;