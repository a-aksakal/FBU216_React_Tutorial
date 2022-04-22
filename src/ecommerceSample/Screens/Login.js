import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const Login = () => {
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (userName == "alican" && password == "1234") {
      localStorage.setItem("username", userName);
      navigate("/urunlistele");
    } else {
      alert("hatalı kullanıcı adı şifre");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#FCFCFC",
          marginTop: "10%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          width: 500,
          height: 400,
          padding: 20,
        }}
      >
        <p style={{ fontSize: 26, fontWeight: "800" }}>LOGİN PAGE</p>
        <div style={{ marginBottom: 30 }}>
          <span>Username:</span>
          <input type="text" id="username" />
        </div>
        <div>
          <span>Password:</span>
          <input type="text" id="password" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",

            marginTop: 10,
          }}
        >
          <Button type="primary" onClick={() => Login()}>
            LOGIN
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
