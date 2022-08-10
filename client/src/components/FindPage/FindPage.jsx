import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./FindPage.module.css";
import clsx from "clsx";
import Picture from "../Picture/Picture";
import Footer from "../Footer/Footer";
import pics from "../Slider/pics";
import Header from "../Header/Header";

function FindPage(props) {
  const location = useLocation();
  const { lst_film, title } = location.state;
  return (
    <div>
      <Header></Header>
      <div className={styles.container}>
        <h1>Kết quả tìm kiểm của từ khóa "{title}"</h1>
        <div className={styles.grid}>
          {lst_film.map((film, index) => (
            <Picture src={film.img} title={film.title} key={film.key} />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default FindPage;
