import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ShowUserDetails = () => {
  const loginUser = useSelector((state) => state.isLogin.value);

  return (
    <div style={{ margin: "50px", fontSize: "30px" }}>
      <center>
        <h1 style={{ fontFamily: "Open Sans", fontStyle: "italic" }}>
          User Details
        </h1>

        <ul
          style={{
            margin: "15px",
            listStyleType: "none",
            display: "flex",
            flexFlow: "column",
            padding: "5px",
          }}
        >
          {loginUser.map((each) => (
            <li
              key={each.id}
              style={{
                margin: "15px",
                padding: "5px",
                color: "red",
              }}
            >
              <p style={{ fontSize: "16px", fontFamily: "Open Sans" }}>
                Name: {each.name}
              </p>
              <p style={{ fontSize: "16px", fontFamily: "Open Sans" }}>
                Email: {each.email}
              </p>
              <p style={{ fontSize: "16px", fontFamily: "Open Sans" }}>
                Age: {each.age}
              </p>
            </li>
          ))}
        </ul>
        <Link to="/login">
          <button type="button">Logout</button>
        </Link>
      </center>
    </div>
  );
};
export default ShowUserDetails;
