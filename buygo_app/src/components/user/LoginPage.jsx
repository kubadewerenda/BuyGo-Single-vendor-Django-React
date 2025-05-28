import React, { useContext, useState } from 'react'
import "./LoginPage.css";
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import Error from '../ui/Error';
import api from '../../api';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {
    const {setIsAuthenticated, get_username} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const userInfo = {username, password}

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true)

        api.post("token/", userInfo)
        .then(res => {
            console.log(res.data);
            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);
            setUsername("");
            setPassword("");
            setLoading(false);
            setIsAuthenticated(true);
            get_username();
            setError("");

            //?skipuje jesli jest null, bo nie zawsze przechodizmy do logowania z protected route
            const from = location?.state?.from.pathname || "/"; //skad przyszedl user lub jesli nie ma to home page
            navigate(from, {replace:true});
        })
        .catch(err => {
            console.log(err.message);
            setError(err.message);
            setLoading(false);
        })
    }

    return (
        <div className="login-container my-5">
            <div className="login-card shadow">
                {error && <Error error={error} />}
                <h2 className="login-title">Welcome Back</h2>
                <p className="login-subtitle">Gain access to your account</p>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label text-sm">Username</label>
                        <input 
                            type="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control" 
                            id="email" 
                            placeholder="Enter your username" 
                            required 
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password" 
                            placeholder="Enter your password" 
                            required 
                        />
                    </div>
                  
                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>Login</button>
                </form>
                <div className="login-footer">
                    <p>Do not have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage