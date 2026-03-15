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
                        <a href="#">Home</a>
                        <a href="#">About</a>
                    </div>
                    <div className="header-register">
                        <a href="#">Register</a>
                        
                    </div>
                </div>
            </Container>
        </>
    )
}