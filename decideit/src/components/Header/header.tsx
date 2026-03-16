import { useState } from "react";
import {Button_Primary_with_Icon } from "../button";
import Container from "../layout"
import "./header.css";

export const Header_Signup = () => {
    
    const[isLoggedin, setIsLoggedin] = useState(true);
    return(

        <>
            <Container layout_class="layout-header" container_class="container-header">
                <div className="header">
                    <div className="logo">
                        <a href="#" className="fw-700 h4 header-title">Decide<span className="header-title-it">IT</span></a>
                    </div>
                    <div className="header-details">
                        {isLoggedin ?
                        (<>
                            <a href="#" className="deco-none body-text header-link">Home</a>
                            <a href="#" className="deco-none body-text header-link">About</a>
                            <a href="#" className="deco-none body-text header-link">Voting</a>
                            <a href="#" className="deco-none body-text header-link">FAQ</a>
                        </>) :
                        
                        (<>
                            <a href="#" className="deco-none body-text header-link">Home</a>
                            <a href="#" className="deco-none body-text header-link">About</a>
                            <a href="#" className="deco-none body-text header-link">FAQ</a>
                        </>)
                    }
                        
                    </div>
                    <div className="header-register">
                        {
                            isLoggedin ? (
                                <>
                                
                                </>
                            ) :(
                            <>
                                <a href="#" className="deco-none body-text header-link">Register</a>
                                <Button_Primary_with_Icon label="Login" icon="fa-solid fa-user"/>
                            </>)
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}