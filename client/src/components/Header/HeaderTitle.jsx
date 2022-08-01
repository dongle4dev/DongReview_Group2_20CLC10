<<<<<<< HEAD
import React from "react";
import styles from "./HeaderTitle.module.css";
function HeaderTitle(props) {
  return (
    <header className={styles.header}>
      <a href="/">
        <h1>DONGREVIEW</h1>
      </a>
      <input placeholder="Tìm kiếm"></input>
      <i className="ti-search"></i>
      <div
        className={styles.login}
        onClick={() => {
          props.log();
        }}
      >
        <i className="ti-github"></i>
        <p className={styles.login}>Đăng nhập</p>
      </div>
      <p className={styles.line}>none</p>
    </header>
  );
}

export default HeaderTitle;
=======
import React from "react";
import styles from "./Header.module.css";
function HeaderTitle(props) {
  return (
    <header className={styles.header}>
      <img src="logo.png"></img>
      <a href="/">
        <h1>DONGREVIEW</h1>
      </a>
      <input placeholder="Tìm kiếm"></input>
      <i className="ti-search"></i>
      <div
        className={styles.login}
        onClick={() => {
          props.log();
        }}
      >
        <i className="ti-github"></i>
        <p className={styles.login}>Đăng nhập</p>
      </div>
      <p className={styles.line}>none</p>
    </header>
  );
}

export default HeaderTitle;
>>>>>>> c86749f9f83217cfcf34a3b0148124cdc444b594
