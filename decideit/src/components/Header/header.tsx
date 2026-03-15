import { Button_Primary } from "../button";
import Container from "../layout"
import "./header.css";

export const Header_Signup = () => {
    
    return(

        <>
            <Container layout_class="layout-header" container_class="container-header">
                <div className="header">
                    <div className="logo">
                        <a href="#" className="fw-700 h4 header-title">Decide<span className="header-title-it">IT</span></a>
                    </div>
                    <div className="header-details">
                        <a href="#" className="deco-none body-text header-link">Home</a>
                        <a href="#" className="deco-none body-text header-link">About</a>
                        <a href="#" className="deco-none body-text header-link">FAQ</a>
                    </div>
                    <div className="header-register">
                        <a href="#" className="deco-none body-text header-link">Register</a>
                        <Button_Primary />
                    </div>
                </div>
            </Container>
        </>
    )
}