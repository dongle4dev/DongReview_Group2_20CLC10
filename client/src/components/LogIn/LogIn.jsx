import React, { useState } from "react";
import styles from "./LogIn.module.css";
import clsx from "clsx";
import axios from "axios";
import { Link } from "react-router-dom";
import Page404 from "../ErrorPages/Page404";

function LogIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [empty, setEmpty] = useState(null);
  const [long, setLong] = useState(null);
  const [mess, setMess] = useState("");
  const [auth, setAuth] = useState(null);

  // const [auth, setAuth] = useState(null);
  function ResetData() {
    setUsername("");
    setPassword("");
  }

  const handleSignIn = async () => {
    setLong(null);
    if (username === "" || password === "") {
      setEmpty(true);
      return;
    }
    setEmpty(false);
    //authorize using axios
    const userdata = { username: username, password: password };
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 500) {
          setLong(true);
          setMess(data.message);
          props.getData({
            id: "",
            fullName: "",
            dob: "",
          });
        } else if (data.status === 401) {
          setAuth(true);
          props.getData({
            id: "",
            fullName: "",
            dob: "",
          });
        } else if (data.status === "Can not find user") {
          setLong(true);
          setMess(data.status);
          props.getData({
            id: "",
            fullName: "",
            dob: "",
          });
        } else if (data !== "") {
          props.unlog();
          props.getData(data.elements);
          console.log(data);
          ResetData();
        }
      });
  };
  return props.trigger ? (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <button
          className={styles.btn}
          onClick={() => {
            ResetData();
            props.unlog();
          }}
        >
          <i className="ti-close"></i>
        </button>
        <div className={styles.head}>
          <h2>ĐĂNG NHẬP</h2>
        </div>
        <p style={{ marginTop: "4rem" }}>Tên đăng nhập</p>
        <input
          type="text"
          placeholder=" Tên đăng nhập"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <p style={{ marginTop: "2rem" }}>Mật khẩu</p>
        <input
          type="password"
          placeholder=" Mật khẩu"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div>
          {empty && (
            <p style={{ color: "red", paddingLeft: "3.2rem" }}>
              Username or password cannot be empty
            </p>
          )}
        </div>
        <div>
          {long && (
            <p style={{ color: "red", paddingLeft: "0.5rem" }}>{mess}</p>
          )}
        </div>
        <div>
          {auth && (
            <p style={{ color: "red", paddingLeft: "8rem" }}>Wrong password!</p>
          )}
        </div>
        <div className={styles.signIn}>
          <button>
            <a onClick={() => handleSignIn()}>Đăng nhập</a>
          </button>
        </div>

        <div className={styles.alter}>
          <a href="/signup">Đăng kí</a>/
          <a href="/forgotpassword">Quên mật khẩu</a>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default LogIn;
