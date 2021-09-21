import React, { useState } from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button } from '@material-ui/core';
import './Login.css';

const Login = () => {
    //eslint-disable-next-line
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleAuthUser = () => {
        user.email === 'mertonuryildirim@gmail.com' && user.password === '12345'
            ? setAuth(true)
            : setAuth(false);
    };

    return (
        <div className="login">
            <TwitterIcon className="login-twitter-icon" />
            <h1>Log in to Twitter</h1>
            <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Please enter your email"
            />
            <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Please enter your password"
            />
            <Button
                onClick={handleAuthUser}
                type="submit"
                className="login-tweet-button"
            >
                Log in
            </Button>
            <div className="login-footer">
                <a href="/">
                    <span>Forgot password? </span>
                </a>
                <span> · </span>
                <a href="/">
                    <span> Sign up for Twitter</span>
                </a>
            </div>
        </div>
    );
};

export default Login;
