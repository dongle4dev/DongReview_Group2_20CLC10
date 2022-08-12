import {React, useState} from "react";
import styles from "./SignUp.module.css";
import clsx from "clsx";
import axios from "axios";
import { Navigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [dob, setDOB] = useState("");
  const [avatar, setAvatar] = useState("");
  const [empty, setEmpty] = useState(null);
  const [same, setSame]= useState(null);
  const [fail, setFail] = useState(null);
  const [checkSignUp, setCheck] = useState(false);
  
  function ResetData(){
    setUsername("")
    setPassword("")
    setRePassword("")
    setDOB("")
    setAvatar("")
    setEmpty(null)
    setSame(null)
  };
  const handleSignIn = async (us, pa) => {
    const userdata = {username: us, password: pa}
    //authorize using axios
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data != "") {
          
          console.log(data);
          ResetData();
        }
      });
    
  }
  async function handleSignUp(){
    setEmpty(null)
    setSame(null)
    console.log("clicked")
    console.log(empty, same)
    if(username === "" || password === "" || repassword === "" || fullname === "" || dob === "" || avatar === "" ){
      setEmpty(true);
      return;
    }
    else if (repassword !== password){
      setEmpty(false);
      setSame(false)
      return;
    }
    setSame(true);
    const userdata = {username: username, password: password, fullName: fullname, dob: dob, avt: avatar};
    await axios.post("http://localhost:5000/user/register", userdata)
          .then(res => {
            if(res.data.status != 409 && res.data.status != 500){
              // handleSignIn(userdata.username, userdata.password)
              // đăng nhập vào tài khoản
              // thoát ra homepage và thanh HeaderUser hiện lên
              console.log(res.data)
              setCheck(true)
              ResetData()
            }
            else{
              setFail(true)
            }
          })
        .catch(error => console.log(error));    
  }
  return checkSignUp ? (
    <Navigate
      to={`/`}
     
    ></Navigate>
  ) : (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <div className={styles.head}>
          <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
        </div>
        <div className={styles.col} style={{ left: "3rem" }}>
          <p style={{ marginTop: "3rem" }}>Tên đăng nhập</p>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <p style={{ marginTop: "1rem" }}>Mật khẩu</p>
          <input
            type="password"
            placeholder="Mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <p style={{ marginTop: "1rem" }}>Xác nhận lại mật khẩu</p>
          <input
            type="password"
            placeholder="Xác nhận mật khẩu"
            onChange={(e) => setRePassword(e.target.value)}
          ></input>
        </div>
        <div className={styles.col} style={{ right: "3rem" }}>
          <p
            style={{
              marginTop: "3rem",
            }}
          >
            Họ và tên đầy đủ
          </p>
          <input
            type="text"
            placeholder="Nhập họ và tên của bạn"
            onChange={(e) => setFullname(e.target.value)}
          ></input>
          <p
            style={{
              marginTop: "1rem",
            }}
          >
            Ngày sinh
          </p>
          <input
            type="text"
            placeholder="Nhập ngày sinh của bạn"
            onChange={(e) => setDOB(e.target.value)}
          ></input>
          <p
            style={{
              marginTop: "1rem",
            }}
          >
            Link ảnh đại diện
          </p>
          <input
            type="text"
            placeholder="Copy đường link ảnh đại diện của bạn"
            onChange={(e) => setAvatar(e.target.value)}
          ></input>
        </div>
        <div>
          {empty && (
            <p
              style={{
                color: "red",
                marginLeft: "15.5rem",
                marginTop: "25rem",
              }}
            >
              Please fill in all the blank
            </p>
          )}
        </div>
        <div>
          {same === false && (
            <p
              style={{
                color: "red",
                marginLeft: "10.5rem",
                marginTop: "25rem",
              }}
            >
              Password and confirm password are not the same
            </p>
          )}
        </div>
        <div>
          {fail === true && (
            <p
              style={{
                color: "red",
                marginLeft: "14.5rem",
                marginTop: "25rem",
              }}
            >
              Username has already existed
            </p>
          )}
        </div>
        <div className={styles.signIn}>
          <button>
            <a onClick={() => handleSignUp()}>Đăng kí</a>
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
