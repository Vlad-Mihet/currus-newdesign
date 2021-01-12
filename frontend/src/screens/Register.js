import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/actions/userActions'

const Register = (props) => {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { userInfo, loading ,error } = useSelector(state => state.userSignin)

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(register(name, email, password))
    }

    useEffect(() => {
        if(userInfo) {
            props.history.push('/')
        }
    }, [userInfo])

    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="name" id="name" placeholder="name" required
                    onChange={e => setName(e.target.value)}></input>
                </div>
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
                    
                    <button className="primary" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}


export default Register
