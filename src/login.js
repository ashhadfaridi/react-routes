import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useHistory } from 'react-router-dom';
import users from './users';


export default function Login() {
    const [user, setUsername] = React.useState('');
    const [pass, setPassword] = React.useState('');
    const navigate = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (users.find(o => o.username === user)) {
            if (users.find(o => o.password === pass)) {
                console.log('Access Granted');
                localStorage.setItem("authenticated", true);
                navigate.push("/Sidebar");

            }
        }
        else {
            console.log('Access Denied');
        }
    }

    const linkTo = () => {
        navigate('signup');
    }

    return (
        <div className="row">
            <div className="column"></div>

            <div className="column">
                <div>
                    <h3><img src={require("./muwiclogo.png")} className="center"/></h3>                   
                    <h3>To continue, please login to Muwic</h3>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="loginForm">
                            <div className="inputspacing">
                                <h4>Username:</h4>
                                <input value={user} onChange={(e) => setUsername(e.target.value)} type="username" className="inputLogin" placeholder="Username" />
                            </div>
                            <div className="inputspacing">
                                <h4>Password:</h4>
                                <input value={pass} onChange={(e) => setPassword(e.target.value)} type="password" className="inputLogin" placeholder="Password" />
                            </div>
                            <p>Forgot Password?</p>
                        </div>
                    

                        <button type="submit" className="loginButton">Login</button>
                    </form>

                    <hr className="divider" />

                    <h3>Don't have an Account?</h3>
                    <h3><button type="submit" onClick={linkTo} className="signupButton">SIGN UP FOR MUWIC</button></h3>
                </div>
            </div>

            <div className="column"></div>
        </div>
    );
}
