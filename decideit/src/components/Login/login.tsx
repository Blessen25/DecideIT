import { Button_Primary, Button_Primary_with_Icon, Button_Secondary_with_Icon } from '../button'
import Container from '../layout'
import './login.css'

const Login = () => {

    return(

        <>  
            <Container layout_class='main_layout_login'>
                <>
                    <div id="signup">
                        <div className="signupfirstdiv">
                            <h1 className='h2 fw-700'>Welcome Back</h1>
                            <p className='body-text fw-600 ' style={{color:"#111827"}}>Log in to continue creating and voting with your friends.</p>
                        </div>
                        <div className="signupseconddiv">
                                
                                <Button_Primary_with_Icon label='Sign Up with Google' icon='fa-brands fa-google'/>
                                <Button_Secondary_with_Icon label='Sign Up with Facebook' icon='fa-brands fa-facebook'/>
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <p className='body-text fw-600'>OR</p>
                                </div>
                            <form action="#" className='signupforms'>
                                <div className="twoforms">
                                    <div className="oneforms">
                                    <label htmlFor="email" className='fw-600 body-text'>Email or Username<span style={{color:"red"}}>*</span></label>
                                    <input type="email" id="email" name="email" placeholder='Enter your Email or Username' className='input-field-cstm body-small' maxLength={80}/>
                                    </div>
                                    <div className="oneforms">
                                            <label htmlFor="password" className='fw-600 body-text'>Password <span style={{color:"red"}}>*</span></label>
                                            <input type="password" id="password_1" name="password" placeholder='Enter your Password' className='input-field-cstm body-small' maxLength={20}/>
                                    </div>
                                </div>
                                <Button_Primary label='Login' route='/'/>
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <p className='body-text fw-600' style={{display:'flex', gap:'5px'}}><span><a href="#" className='loginbutt'>Forget Password?</a></span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            </Container>
        </>
    )
}

export default Login