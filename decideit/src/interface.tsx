export interface ContainerProps {

    children: React.ReactNode;
    layout_class ?: string;
    layout_style ?: React.CSSProperties;
    container_class ?: string;
    container_style ?: React.CSSProperties;
}

export interface ButtonProps {

    label?:string;
    icon?:string;
    route ?: string;
    class?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;

}