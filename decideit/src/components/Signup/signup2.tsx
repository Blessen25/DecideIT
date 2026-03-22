import { Button_Primary } from '../button';
import Container from '../layout';
import './signup.css';
import "react-phone-input-2/lib/style.css";
import { useState } from 'react';

const Signup_Step2 = () => {

    const [preview, setPreview] = useState<string | null>(null);
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
                                        <label htmlFor="text" className='fw-600 body-text'>Date of Birth <span style={{color:"red"}} className='body-text'>*</span></label>
                                        <div className="birthday-cstm">
                                            <input type="text" id="Day" name="Day" placeholder='DD' className='input-field-cstm body-small birthday2-cstm' maxLength={2}/>
                                            <input type="text" id="Day" name="Day" placeholder='MM' className='input-field-cstm body-small birthday2-cstm' maxLength={2}/>
                                            <input type="text" id="Day" name="Day" placeholder='YYYY' className='input-field-cstm body-small birthday2-cstm' maxLength={4}/>
                                        </div>
                                    </div>
                                    <div className="oneforms">
                                        <label htmlFor="text" className='fw-600 body-text'>User Name</label>
                                        <input type="text" id="text" name="text" placeholder='Enter your Preferred User Name' className='input-field-cstm body-small' maxLength={30}/>
                                    </div>
                                </div>
                                <div className="twoforms">
                                    <div className="oneforms">
                                        <label className='fw-600 body-text'>
                                            Profile Picture
                                        </label>
                                        <div className="profile-preview">
                                            {preview ? (
                                            <img src={preview} alt="Preview" className="preview-img" />
                                            ) : (
                                            <div className="default-avatar">
                                                <i className="fa-solid fa-user body-text"></i>
                                            </div>
                                            )}
                                        </div>

                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                setPreview(URL.createObjectURL(file));
                                            }
                                            }}
                                        />
                                    </div>
                                    
                                    
                                </div>

                                <Button_Primary label='Confirm Details' route='/'/>
                            </form>
                        </div>
                    </div>
                </>
           </Container>
        </>
    )
}

export default Signup_Step2;