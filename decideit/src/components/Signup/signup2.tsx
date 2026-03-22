import { Button_Primary } from '../button';
import Container from '../layout';
import './signup.css';

const Signup_Step2 = () => {

    return( 

        <>
            <Container layout_class='main_layout_login'>
                <>
                    <div id="signup">
                        <div className="signupfirstdiv">
                            <h1 className='h2 fw-700'>Almost There!</h1>
                            <p className='body-text fw-600 ' style={{color:"#111827"}}>Add a few final details to complete your profile.</p>
                        </div>
                        <div className="signupseconddiv">
                            <form action="#" className='signupforms'>
                                <div className="twoforms">
                                    <div className="oneforms">
                                        <label htmlFor="text" className='fw-600 body-text'>First Name</label>
                                        <input type="text" id="text" name="text" placeholder='Enter your First Name' className='input-field-cstm body-small' maxLength={30}/>
                                    </div>
                                    <div className="oneforms">
                                        <label htmlFor="text" className='fw-600 body-text'>Last Name</label>
                                        <input type="text" id="text" name="text" placeholder='Enter your Last Name' className='input-field-cstm body-small' maxLength={30}/>
                                    </div>
                                </div>
                                <div className="oneforms">
                                    <label htmlFor="email" className='fw-600 body-text'>Email</label>
                                    <input type="email" id="email" name="email" placeholder='Enter your Email' className='input-field-cstm body-small' maxLength={80}/>
                                </div>
                                <div className="twoforms">
                                    <div className="oneforms">
                                        <label htmlFor="password" className='fw-600 body-text'>Password</label>
                                        <input type="password" id="password_1" name="password" placeholder='Enter your Password' className='input-field-cstm body-small' maxLength={20}/>
                                    </div>
                                    <div className="oneforms">
                                        <label htmlFor="password" className='fw-600 body-text'>Confirm Password</label>
                                        <input type="password" id="password_2" name="password" placeholder='Confirm your Password' className='input-field-cstm body-small' maxLength={20}/>
                                    </div>
                                </div>

                                <Button_Primary label='Confirm Details'/>
                            </form>
                        </div>
                    </div>
                </>
           </Container>
        </>
    )
}

export default Signup_Step2;