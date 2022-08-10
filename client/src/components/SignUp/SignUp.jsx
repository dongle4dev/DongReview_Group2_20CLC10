import {React, useState} from "react";
import styles from "./SignUp.module.css";
import clsx from "clsx";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [empty, setEmpty] = useState(null);
  const [re, setRe] = useState(null);
  const [same, setSame]= useState(null);
  function ResetData(){
    setUsername("")
    setPassword("")
    setRePassword("")
    setEmpty(null)
    setRe(null)
    setSame(null)
  };
  function handleSignUp(){
    setEmpty(null)
    setRe(null)
    setSame(null)
    console.log("clicked")
    if(username === "" || password === ""){
      setEmpty(true);
      console.log(empty, re, same)
      return;
    }
    else if(repassword === ""){
      setEmpty(false);
      setRe(false)
      console.log(empty, re, same)
      return;
    }
    else if (repassword !== password){
      setEmpty(false);
      setRe(true);
      setSame(false)
      console.log(empty, re, same)
      return;
    }
    setSame(true);
    console.log(empty, re, same)
    const userdata = {username: username, password: password};
    axios.post("http://localhost:5000/user/register", userdata)
          .then(res => {
            if(res.data != ""){
              console.log(res)
              // đăng nhập vào tài khoản
              // thoát ra homepage và thanh HeaderUser hiện lên
              ResetData()
            }
          })
        .catch(error => console.log(error));
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <div className={styles.head}>
          <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
        </div>
        <p style={{ marginTop: "3rem" }}>Tên đăng nhập</p>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem"}}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <p style={{ marginTop: "1rem" }}>Mật khẩu</p>
        <input
          type="password"
          placeholder="Mật khẩu"
          style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p style={{ marginTop: "1rem" }}>Xác nhận lại mật khẩu</p>
        <input
          type="password"
          placeholder="Xác nhận mật khẩu"
          style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
          onChange={(e) => setRePassword(e.target.value)}
        ></input>
        <p style={{ marginTop: "1rem" }}>Email đăng ký</p>
        <input
          type="text"
          placeholder="Nhập email"
          style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
          
        ></input>
        <div>
          {empty && <p style={{color:"red", paddingLeft:"3.2rem"}}>Username or password cannot be empty</p>}
        </div>
        <div>
          {same === false && <p style={{color:"red", paddingLeft:"1.5rem"}}>Password and confirm password are not the same</p>}
        </div>
        <div>
          {re === false && <p style={{color:"red", paddingLeft:"3.2rem"}}>Please confirm your password</p>}
        </div>
        <div className={styles.signIn}>
          <button>
            <a onClick={()=>handleSignUp()}>Đăng kí</a>
          </button>
        </div>
        <div className={styles.alter}>
          <a href="/">Đăng nhập</a>/ <a href="/forgotpassword">Quên mật khẩu</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
