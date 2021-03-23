import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const Register = (props) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userInfo, loading, error } = useSelector((state) => state.userSignin);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(name, email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
  }, [userInfo]);

  return (
    <>
      <Breadcrumbs title="Register" />
      <div className="login_grid">
        <div className="login_left_pic"></div>

        <div className="register">
          <form className="register_form" onSubmit={handleSubmit}>
            <img src="images/currus_logo.png"></img>
            <h1>Register</h1>

            <div>
              <label>USERNAME</label>
              <input
                type="name"
                id="name"
                required
                onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
              <label>EMAIL</label>
              <input
                type="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
              <label>PASSWORD</label>
              <input
                type="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div>
              <button className="primary" type="submit">
                Sign Up
              </button>
            </div>
            <div id="donthave">
              <Link to="/login">Back To Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
