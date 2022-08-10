import React, { useState } from "react";
import styles from "./LogIn.module.css";
import clsx from "clsx";
import axios from "axios";
import {Link} from "react-router-dom";
import Page404 from "../ErrorPages/Page404";


function LogIn(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [empty, setEmpty] = useState(null);
  // const [auth, setAuth] = useState(null);
  function ResetData(){
    setUsername("")
    setPassword("")
  }
  const handleSignIn = async () => {
    if(username === "" || password === ""){
      setEmpty(true);
      return;
    }
    setEmpty(false);
    //authorize using axios
    const userdata = {username: username, password: password};
    await axios.post("http://localhost:5000/user/login", userdata)
          .then(res => {
            console.log(res.data);
            
          })
        .catch(error => console.log(error));
  }
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
        <input type="text" placeholder=" Tên đăng nhập" onChange={(e) => setUsername(e.target.value)}></input>
        <p style={{ marginTop: "2rem" }}>Mật khẩu</p>
        <input type="password" placeholder=" Mật khẩu" onChange={(e) => setPassword(e.target.value)}></input>
        <div>
          {empty && <p style={{color:"red", paddingLeft:"3.2rem"}}>Username or password cannot be empty</p>}
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
