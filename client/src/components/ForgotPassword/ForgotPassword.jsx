import React from "react";
import styles from "./ForgotPassword.module.css";
import clsx from "clsx";

function ForgotPassword() {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <div className={styles.head}>
          <h2>QUÊN MẬT KHẨU</h2>
        </div>
        <p style={{ marginTop: "4rem" }}>Tên đăng nhập</p>
        <input
          type="text"
          placeholder=" Tên đăng nhập"
          style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
        ></input>
        <p style={{ marginTop: "2rem" }}>Nhập mật khẩu mới</p>
        <input
          type="password"
          placeholder="Nhập mật khẩu mới"
          style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
        ></input>
        <p style={{ marginTop: "2rem" }}>Xác nhận lại mật khẩu</p>
        <input
          type="text"
          placeholder="Xác nhận mật khẩu"
          style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
        ></input>
        <div className={styles.forgot}>
          <button>
            <a href="/">Đồng ý</a>
          </button>
        </div>
        <div className={styles.alter}>
          <a href="/">Đăng nhập</a>/ <a href="/signup">Đăng kí</a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
