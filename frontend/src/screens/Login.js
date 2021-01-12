import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signin } from '../redux/actions/userActions'

const Login = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(signin(email, password))
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Email" required
                    onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placholder="Password" required
                    onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">LOGIN</button>
                </div>
                <div>
                    Don't have an account? <Link to='/register'>Create your account</Link>
                </div>
            </form>
        </div>
    )
}


export default Login
