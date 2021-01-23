import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signin } from '../redux/actions/userActions'
import Breadcrumbs from '../components/Breadcrumbs'
import FacebookLogin from 'react-facebook-login';
import { fblogin } from '../redux/actions/userActions'

const Login = (props) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { userInfo, loading , error } = useSelector(state => state.userSignin)

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(signin(email, password))
    }

    const responseFacebook = (response) => {
        console.log(response);
        dispatch(fblogin(response.name, response.email))
    }

    useEffect(() => {
        if(userInfo) {
            props.history.push('/')
        }
    }, [userInfo])

    return (
        <>
            <Breadcrumbs title={props.location.pathname} />
            <div className="login">
                <img src="images/currus_logo.png" ></img>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    {error && <h4>Wrong Username/Password</h4>}
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
                        or sign up via
                        <FacebookLogin
                        appId={process.env.REACT_APP_ID}
                        autoLoad={true}
                        fields="name,email,picture"
                        scope="public_profile"
                        callback={responseFacebook}
                        icon="facebook" />
                    </div>
                    <div>
                        Don't have an account? <Link to='/register'>Create your account</Link>
                    </div>
                </form>
            </div>
        </>
    )
}


export default Login
