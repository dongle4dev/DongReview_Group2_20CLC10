import React from "react";
import styles from "./LogIn.module.css";
import clsx from "clsx";
<<<<<<< Updated upstream

function LogIn(props) {
=======
import axios from "axios";
import {Link} from "react-router-dom";
import Page404 from "../ErrorPages/Page404";
import { response } from "express";


function LogIn(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [empty, setEmpty] = useState(null);
  const [token, setToken] = useState("");
  // const [auth, setAuth] = useState(null);
  function ResetData(){
    setUsername("")
    setPassword("")
  }
  function handleSignIn(){
    if(username === ""|| passsword === ""){
      setEmpty(true);
      return;
    }
    setEmpty(false);
    //authorize using axios
    const userdata = {username: username, password};
    axios.post("http://localhost:5000/user/login", userdata)
      .then(res => {
        if(res.data != ""){
          props.authorize()
          props.log()
          props.getData(username, password)
          ResetData()
        }
      })
      .catch(error => console.log(error))
  }
>>>>>>> Stashed changes
  return props.trigger ? (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <button
          className={styles.btn}
          onClick={() => {
            props.unlog();
          }}
        >
          <i className="ti-close"></i>
        </button>
        <div className={styles.head}>
          <h2>ĐĂNG NHẬP</h2>
        </div>
        <p style={{ marginTop: "4rem" }}>Tên đăng nhập</p>
        <input type="text" placeholder=" Tên đăng nhập"></input>
        <p style={{ marginTop: "2rem" }}>Mật khẩu</p>
        <input type="password" placeholder=" Mật khẩu"></input>
        <div className={styles.signIn}>
          <button>
            <a href="/">Đăng nhập</a>
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
