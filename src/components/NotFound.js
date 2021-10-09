import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <center>
        <h1
          style={{
            fontFamily: "Open Sans",
            fontSize: "50px",
            fontStyle: "italic",
          }}
        >
          Bath Path
        </h1>
        Go To Login Page
        <Link to="/login">
          <button>login</button>
        </Link>
      </center>
    </div>
  );
}

export default NotFound;
