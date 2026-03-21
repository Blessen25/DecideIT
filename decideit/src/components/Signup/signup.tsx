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
                            <form action="#" >
                                <div className="signup-form-twoforms">
                                    <div className="signup-form-oneforms">
                                        <label htmlFor="text" className='fw-600 body-text'>First Name</label>
                                        <input type="text" id="text" name="text" placeholder='Enter your First Name' className='input-field-cstm'/>
                                    </div>
                                    <div className="signup-form-oneforms">
                                        <label htmlFor="text" className='fw-600 body-text'>Sur Name</label>
                                        <input type="text" id="text" name="text" placeholder='Enter your Sur Name' />
                                </div>
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