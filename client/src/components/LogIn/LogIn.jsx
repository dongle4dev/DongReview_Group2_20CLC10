<<<<<<< HEAD
import React from 'react';
import styles from './LogIn.module.css';
import clsx from "clsx";

function LogIn(props){
    return( (props.trigger) ? (
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <button className={styles.btn} onClick={()=>{props.unlog()}}>
                    <i className="ti-close"></i>
                </button>
                <div className={styles.head}><h2>ĐĂNG NHẬP</h2></div>
                <p style={{marginTop: "4rem"}}>Tên đăng nhập</p>
                <input type = "text" placeholder=" Tên đăng nhập"></input>
                <p style={{marginTop: '2rem'}}>Mật khẩu</p>
                <input type="password" placeholder=" Mật khẩu"></input>
                <div className={styles.signIn}>
                    <button>
                        <a href="/">Đăng nhập</a>
                    </button>
                </div>
                <div className={styles.alter}>
                    <a href="/">Đăng kí</a>/<a href="/">Quên mật khẩu</a>
                </div>
            </div>
        </div>)
     : ""
    )
}

export default LogIn
=======
import React from "react";
import styles from "./LogIn.module.css";
import clsx from "clsx";

function LogIn(props) {
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
>>>>>>> c86749f9f83217cfcf34a3b0148124cdc444b594
