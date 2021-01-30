import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signin } from '../redux/actions/userActions'
import Breadcrumbs from '../components/Breadcrumbs'
import FacebookLogin from 'react-facebook-login';
import { fblogin } from '../redux/actions/userActions'
import GoogleLogin from 'react-google-login';


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

    const responseGoogle = (response) => {
        console.log(response);
        dispatch(fblogin(response.profileObj.name, response.profileObj.email))
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
                <form id="login_form" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    {error && <h4>Wrong Username/Password</h4>}
                    <div>
                        <input type="email" id="email" placeholder="Username or Email" required
                        onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <input type="password" id="password" placeholder="Password" required
                        onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <button id="forgot">Forgot password?</button>
                    </div>
                    <div>
                        <label />
                        <button className="primary" type="submit">LOGIN</button>
                    </div>
                    <div id="signupvia">
                       <span>or sign up via</span>
                    </div>
                        <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={() => console.log('google login failed')}
                        cookiePolicy={'single_host_origin'}
                        />
                        <FacebookLogin
                        appId={process.env.REACT_APP_ID}
                        autoLoad={true}
                        fields="name,email,picture"
                        scope="public_profile"
                        callback={responseFacebook}
                        icon="facebook" />
                    
                    <div id="donthave">
                        Don't have an account? <Link to='/register'>Create your account</Link>
                    </div>
                </form>
            </div>
        </>
    )
}


export default Login
