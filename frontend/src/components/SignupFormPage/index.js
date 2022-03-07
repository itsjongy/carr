import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import logo from './favicon.png';

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div className="container">
            <div className="signup-area">
                <div className="signup-box">
                    <div className="signup-container">
                        <div>
                            <div>
                                <img className='signup-logo' src={logo} alt='' />
                            </div>
                            <div>
                                <h6 className='signup-title'>Sign up for flickrio</h6>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit} className="signup-form">
                                    <ul>
                                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                                    </ul>
                                    <label className='signup-email'>
                                        Email
                                        <input
                                            type="text"
                                            className='signup-emailbox'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label className='signup-username'>
                                        Username
                                        <input
                                            type="text"
                                            className='signup-usernamebox'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label className='signup-password'>
                                        Password
                                        <input
                                            type="password"
                                            className='signup-passwordbox'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label className='signup-confirmpassword'>
                                        Confirm Password
                                        <input
                                            type="password"
                                            className='signup-confirmpasswordbox'
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <button className='signupsubmitbutton' type="submit">Sign up</button>
                                    <hr></hr>
                                    <p className='signup-logintext'>
                                        Already a flickrio member?
                                        <a href='/login' className='signup-login'> Log in here.</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SignupFormPage;
