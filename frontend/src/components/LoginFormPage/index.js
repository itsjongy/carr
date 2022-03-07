import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import logo from './favicon.png';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    const demoSubmit = (e) => {
        e.preventDefault();
        const credential = 'demo';
        const password = 'password';
        return dispatch(sessionActions.login({ credential, password }));
    }

    return (
        <div className="container">
            <div className="login-area">
                <div className="login-box">
                    <div className="login-container">
                        <div>
                            <div>
                                <img className='login-logo' src={logo} alt='' />
                            </div>
                            <div>
                                <h6 className='login-title'>Log in to flickrio</h6>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit} className='login-form'>
                                    <div>
                                        <ul>
                                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                                        </ul>
                                    </div>
                                    <label className='login-username'>
                                        Username or Email
                                        <div>
                                            <input
                                                type="text"
                                                className='login-usernamebox'
                                                value={credential}
                                                onChange={(e) => setCredential(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </label>
                                    <label className='login-password'>
                                        Password
                                        <div>
                                            <input
                                                type="password"
                                                className='login-passwordbox'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </label>
                                    <button className='submitbutton' type="submit">Sign In</button>
                                    <hr></hr>
                                    <p className='login-signuptext'>
                                        Not a flickrio member?
                                        <a href='/signup' className='login-signup'> Sign up here.</a>
                                    </p>
                                    <p className='demo'>
                                        Want to test the site?
                                        <p className='demo-button' onClick={demoSubmit}>Click here.</p>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginFormPage;
