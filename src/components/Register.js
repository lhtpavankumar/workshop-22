import React, { useState } from "react";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { settingName } from "./features/name";
import { settingEmail } from "./features/email";
import { settingAge } from "./features/age";
import { settingTotal } from "./features/total";

import "./Register.css";

function Register(props) {
  const dispatch = useDispatch();
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [age, SetAge] = useState("");
  const [password, SetPassword] = useState("");

  const onRegisteringData = (e) => {
    e.preventDefault();

    dispatch(settingName(name));
    dispatch(settingAge(age));
    dispatch(settingEmail(email));
    dispatch(
      settingTotal({
        id: v4(),
        name: name,
        email: email,
        age: age,
        password: password,
      })
    );

    SetName("");
    SetAge("");
    SetEmail("");
    const { history } = props;
    history.push("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="login-card">
        <p>Already Registered? then click LogIn</p>
        <Link to="/login">
          <button type="button">LogIn</button>
        </Link>
      </div>

      <form onSubmit={onRegisteringData}>
        {/* NAMe */}
        <h1 style={{ margin: "20px" }}>REGISTER FORM</h1>
        <div>
          <label htmlFor="fullName">Full Name</label>
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

        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            onChange={(event) => {
              SetEmail(event.target.value);
            }}
            // onBlur={this.onBlurs}
            name="email"
            value={email}
            required
            title="enter your email"
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            onChange={(event) => {
              SetAge(event.target.value);
            }}
            id="age"
            type="text"
            placeholder="Enter Your Age"
            name="age"
            value={age}
            required
            title="enter your age"
          />
        </div>

        <div>
          <label htmlFor="pass">Password</label>
          <input
            onChange={(event) => {
              SetPassword(event.target.value);
            }}
            id="pass"
            type="password"
            placeholder="Enter Your Password"
            name="age"
            value={password}
            required
            pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$"
            title="Minimum of 7 characters. Should have at least one special character and one number and one UpperCase Letter."
          />
        </div>
        <input className="submit-btn" type="submit" placeholder="Register" />
      </form>
    </div>
  );
}

export default Register;
