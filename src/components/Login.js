import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { settingLogin } from "./features/isLogin";
import "./Register.css";

function Login(props) {
  const dispatch = useDispatch();
  const [name, SetName] = useState("");
  const [pass, SetPass] = useState("");
  const total = useSelector((state) => state.total.value);

  const onLoginBtnClicked = (e) => {
    e.preventDefault();

    const loginUser = total.filter((each) =>
      each.name.toLowerCase().includes(name.toLowerCase())
    );

    dispatch(settingLogin(loginUser));

    let res = false;
    for (let each of total) {
      if (each.name === name) {
        res = true;
      }
    }

    if (res) {
      const { history } = props;
      history.push("/user-details");
    } else {
      alert("enter correct details of username and password");
      SetName("");
      SetPass("");
    }
  };

  return (
    <div className="login">
      <form onSubmit={onLoginBtnClicked}>
        <div>
          <label htmlFor="loginName">Username</label>
          <input
            onChange={(event) => {
              SetName(event.target.value);
            }}
            id="fullName"
            type="text"
            placeholder="Enter Your Full Name"
            name="fullName"
            value={name}
            required
            title="enter your name"
          />
        </div>

        <div>
          <label htmlFor="pass">Password</label>
          <input
            onChange={(event) => {
              SetPass(event.target.value);
            }}
            id="pass"
            type="password"
            placeholder="Enter Your Password"
            name="pass"
            value={pass}
            required
            pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$"
            title="Minimum of 7 characters. Should have at least one special character and one number and one UpperCase Letter."
          />
        </div>

        <button type="submit">LogIn</button>
      </form>

      <div className="register-card">
        <p className="desc">New User?Then Register here</p>
        <Link to="/">
          <button type="button" className="register-btn">
            REGISTER
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
