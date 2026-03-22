import { Button_Primary, Button_Primary_with_Icon, Button_Secondary_with_Icon } from '../button';
import Container from '../layout';
import './signup.css';

const Signup = () => {

    return(

        <>
            <Container layout_class='main_layout_login'>
                <>
                    <div id="signup">
                        <div className="signupfirstdiv">
                            <h1 className='h2 fw-700'>Sign Up</h1>
                            <p className='body-text fw-600 ' style={{color:"#111827"}}>Sign up to create polls, invite friends, and make quick decisions.</p>
                        </div>
                        <div className="signupseconddiv">
                            <form action="#" className='signupforms'>
                                <div className="twoforms">
                                    <div className="oneforms">
                                        <label htmlFor="text" className='fw-600 body-text'>First Name <span style={{color:"red"}} className='body-text'>*</span></label>
                                        <input type="text" id="text" name="text" placeholder='Enter your First Name' className='input-field-cstm body-small' maxLength={30}/>
                                    </div>
                                    <div className="oneforms">
                                        <label htmlFor="text" className='fw-600 body-text'>Last Name <span style={{color:"red"}}>*</span></label>
                                        <input type="text" id="text" name="text" placeholder='Enter your Last Name' className='input-field-cstm body-small' maxLength={30}/>
                                    </div>
                                </div>
                                <div className="oneforms">
                                    <label htmlFor="email" className='fw-600 body-text'>Email <span style={{color:"red"}}>*</span></label>
                                    <input type="email" id="email" name="email" placeholder='Enter your Email' className='input-field-cstm body-small' maxLength={80}/>
                                </div>
                                <div className="twoforms">
                                    <div className="oneforms">
                                        <label htmlFor="password" className='fw-600 body-text'>Password <span style={{color:"red"}}>*</span></label>
                                        <input type="password" id="password_1" name="password" placeholder='Enter your Password' className='input-field-cstm body-small' maxLength={20}/>
                                    </div>
                                    <div className="oneforms">
                                        <label htmlFor="password" className='fw-600 body-text'>Confirm Password <span style={{color:"red"}}>*</span></label>
                                        <input type="password" id="password_2" name="password" placeholder='Confirm your Password' className='input-field-cstm body-small' maxLength={20}/>
                                    </div>
                                </div>

                                <Button_Primary label='Sign Up' route='/signup/signup2'/>
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <p className='body-text fw-600'>OR</p>
                                </div>
                                
                                <Button_Secondary_with_Icon label='Sign Up with Google' icon='fa-brands fa-google'/>
                                <Button_Primary_with_Icon label='Sign Up with Facebook' icon='fa-brands fa-facebook'/>
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <p className='body-text fw-600' style={{display:'flex', gap:'5px'}}>Already have an account?<span><a href="/login" className='loginbutt'>Login</a></span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            </Container>
        </>
    )
}

export default Signup