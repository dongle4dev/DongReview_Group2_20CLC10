import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import LogIn from "../LogIn/LogIn";
function ProfileHeader(props) {
  const location = useLocation();
  const { title } = location.state;
  const [option, setOption] = useState(false);
  function Options() {
    setOption(!option);
  }
  return (
    <header className={styles.header}>
      <img src={window.location.origin + "/logo.png"}></img>
      <a href="/">
        <h1>DONGREVIEW</h1>
      </a>
      <input placeholder="  Tìm kiếm"></input>
      <i className="ti-search"></i>
      <div
        className={styles.login}
        onClick={() => {
          Options();
        }}
      >
        {option ? (
          <li className={styles.subnav1}>
            <ul className={styles.subnav1}>
              <li>
                <a href="/admin">Trang cá nhân</a>
              </li>
              <li>
                <a href="/" onClick={() => props.unauthorize()}>
                  Đăng xuất
                </a>
              </li>
            </ul>
          </li>
        ) : (
          ""
        )}
        <i className="ti-github"></i>
        <p className={styles.login}>username</p>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.line}>none</p>
    </header>
  );
}

export default ProfileHeader;
