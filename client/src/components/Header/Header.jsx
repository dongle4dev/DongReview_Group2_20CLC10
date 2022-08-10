import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import LogIn from "../LogIn/LogIn";
import axios from "axios";
function Header(props) {
  const [data_find, setInput] = useState("");
  function handleChange(event) {
    const { value } = event.target;

    //k dc xai event trong setter
    setInput((preValue) => {
      console.log(preValue);
      return value;
    });
  }
  const findFilm = async () => {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:3000");
    const res = await axios.get(
      `http://localhost:5000/film/found-films/${data_find.replace(/ /g, "-")}`
    );
    props.setCheckFind(true);
    props.setTitle(data_find);
    props.setFilmFind(res.data);
    console.log("Send the request to find films", res.data);

    // fetch(
    //   `http://localhost:5000/film/found-films/${data_find.replace(/ /g, "-")}`
    //   // {
    //   //   mode: "cors",
    //   //   //credentials: "include",
    //   //   method: "GET",

    //   //   //body: JSON.stringify(data_find),
    //   // }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     const len = data.length;
    //     if (len === 0) {
    //       setFilms("");
    //       props.setCheckFind(true);
    //       props.setTitle(data_find);
    //       props.setFilmFind(lst_film);
    //     } else {
    //       setFilms((prev) => {
    //         return [...prev, data];
    //       });
    //       props.setCheckFind(true);
    //       props.setTitle(data_find);
    //       props.setFilmFind(lst_film);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };;
  return (
    <header className={styles.header}>
      <img src={window.location.origin + "/logo.png"}></img>
      <a href="/">
        <h1>DONGREVIEW</h1>
      </a>
      <input
        onChange={handleChange}
        onKeyDown={(event) => {
          if (event.shiftKey === true) {
            if (event.key === "Enter")
              event.target.value = event.target.value + "\n";
          } else if (event.key === "Enter") {
            findFilm(event);
          }
        }}
        placeholder="Tìm kiếm"
      ></input>
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
      <ul className={styles.nav}>
        <li style={{ fontSize: "1.8rem", color: "#f5813e" }}>PHIM ĐỀ XUẤT</li>
        <li>
          <a href="/">Phim mới</a>
        </li>
        <li>
          <a href="/">Thể loại</a>
          <ul className={styles.subnav}>
            <li>
              <a href="#">Kinh dị</a>
            </li>
            <li>
              <a href="#">Hành động</a>
            </li>
            <li>
              <a href="#">Viễn tưởng</a>
            </li>
            <li>
              <a href="#">Hoạt hình</a>
            </li>
            <li>
              <a href="#">Hài hước</a>
            </li>
            <li>
              <a href="#">Tình cảm</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Quốc gia</a>
          <ul className={styles.subnav}>
            <li>
              <a href="#">Mỹ</a>
            </li>
            <li>
              <a href="#">Nhật Bản</a>
            </li>
            <li>
              <a href="#">Việt Nam</a>
            </li>
            <li>
              <a href="#">Hàn Quốc</a>
            </li>
            <li>
              <a href="#">Nga</a>
            </li>
            <li>
              <a href="#">Trung Quốc</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Phim lẻ</a>
        </li>
        <li>
          <a href="/">Phim bộ</a>
        </li>
        <li>
          <a href="/">Phim chiếu rạp</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
