import React from "react";
import styles from "./SignUp.module.css";
import clsx from "clsx";

function SignUp() {
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
          style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
        ></input>
        <p style={{ marginTop: "1rem" }}>Mật khẩu</p>
        <input
          type="password"
          placeholder="Mật khẩu"
          style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
        ></input>
        <p style={{ marginTop: "1rem" }}>Xác nhận lại mật khẩu</p>
        <input
          type="password"
          placeholder="Xác nhận mật khẩu"
          style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
        ></input>
        <p style={{ marginTop: "1rem" }}>Email đăng ký</p>
        <input
          type="text"
          placeholder="Nhập email"
          style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
        ></input>
        <div className={styles.signIn}>
          <button>
            <a href="/">Đăng kí</a>
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
