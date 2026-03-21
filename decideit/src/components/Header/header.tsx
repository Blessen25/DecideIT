import { use, useState } from "react";
import {Button_Primary_with_Icon } from "../button";
import Container from "../layout"
import "./header.css";

export const Header_Signup = () => {
    
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [profilepic, setProfilePic] = useState('');
    const [userOpen, setUserOpen] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);

    const GetSidebarActive = () => {

        setSidebarActive(!sidebarActive);
    }

    const GetUserClicked = () => {

        setUserOpen(!userOpen);
    }

    const GetLoggedOut = () => {

        setIsLoggedin(!isLoggedin);
    }
    return(

        <>
            <div className="header-cstm-main">

            <Container layout_class="layout-header" container_class="container-header">
                <div className="header">
                    <div className="logo">
                        <div className="header-line-resp h4 fw-700">
                            <i className={`fa-solid fa-align-left header-line fw-700 ${sidebarActive ? "header-line-active" : ""}`} onClick={GetSidebarActive}></i>
                        </div>
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
                                    <div className="islogged">
                                        <div className="name_profile">
                                        <a href="#" className="user" onClick={GetUserClicked}>
                                            {profilepic ? (<>
                                            
                                            </>) : (<>
                                                <i className="fa-solid fa-user body-text"></i>
                                            </>)
                                            
                                        }
                                        </a>
                                        <p className="body-text fw-600">Anna</p>
                                        </div>
                                            <div className={`userdetailsopened ${userOpen && !sidebarActive ? "open" : ""}`}>
                                                <a href="#" className="deco-none body-text header-link flex-link "><span><i className="fa-solid fa-gear"></i></span>Profile</a>
                                                <a href="#" className="deco-none body-text header-link flex-link "><span><i className="fa-solid fa-user-group"></i></span>Friends</a>
                                                <a href="#" className="deco-none body-text header-link flex-link " onClick={GetLoggedOut}><span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>Logout</a>
                                            </div>
                                    </div>
                                </>

                            ) :(
                            <>
                                <a href="/signup" className="deco-none body-text header-link register-link">Register</a>
                                <Button_Primary_with_Icon label="Login" icon="fa-solid fa-user"/>
                            </>)
                        }
                    </div>
                </div>
            </Container>
                <div className={`outlay ${sidebarActive ? "open" : ""}`}></div>
                    <div className={`sidebar ${sidebarActive ? "open" : ""}`}>
                        {isLoggedin ?
                        (<>

                            <a href="#" className="deco-none sidebar-link body-text fw-600 sidebar-link-active"><span><i className="fa-solid fa-house"></i></span>Home</a>
                            <a href="#" className="deco-none sidebar-link body-text fw-600"><span><i className="fa-solid fa-circle-info"></i></span>About</a>
                            <a href="#" className="deco-none sidebar-link body-text fw-600"><span><i className="fa-solid fa-square-poll-horizontal"></i></span>Voting</a>
                            <a href="#" className="deco-none sidebar-link body-text fw-600"><span><i className="fa-solid fa-circle-question"></i></span>FAQ</a>
                        </>) :(
                            <>
                                <a href="#" className="deco-none sidebar-link body-text fw-600"><span><i className="fa-solid fa-house"></i></span>Home</a>
                                <a href="#" className="deco-none sidebar-link body-text fw-600"><span><i className="fa-solid fa-circle-info"></i></span>About</a>
                                <a href="#" className="deco-none sidebar-link body-text fw-600"><span><i className="fa-solid fa-circle-question"></i></span>FAQ</a>
                                <a href="#" className="deco-none sidebar-link body-text fw-600"><span><i className="fa-solid fa-user"></i></span>Register</a>
                            </>
                        )    
                    }
                        
                    </div>
                </div>
        </>
    )
}