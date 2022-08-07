import React from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LogIn from "../LogIn/LogIn";
import Slider from "../Slider/Slider";
import styles from "./HomePage.module.css";
import Picture from "../Picture/Picture";
import pics from "../Slider/pics";
import HeaderUser from "../Header/HeaderUser";
import { Link } from "react-router-dom";

function HomePage() {
  const [login, setLogin] = React.useState(false);
  const [theater, setTheater] = React.useState([]);
  const [phimle, setPhimLe] = React.useState([]);
  const [anime, setAnime] = React.useState([]);
  const [top1, setTopNam] = React.useState([]);
  const [top2, setTopThang] = React.useState([]);
  const [top3, setTopTuan] = React.useState([]);
  const [auth, setAuth] = React.useState(null);
  const url = "/api/films.json";
  window.onload = function () {
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }
  };
  React.useEffect(() => {
    const getData = async () => {
      try {
        console.log("before getting data");
        const res = await axios.get(url);
        console.log("get data", res.data);
        let count = 0;
        setTheater(
          res.data.filter((item) => {
            if (item.type.includes("phimchieurap") && count <= 5) {
              count++;
              return true;
            }
          })
        );
        count = 0;
        setPhimLe(
          res.data.filter((item) => {
            if (item.type.includes("phimle") && count <= 5) {
              count++;
              return true;
            }
          })
        );
        count = 0;
        setAnime(
          res.data.filter((item) => {
            if (item.type.includes("hoathinh") && count <= 5) {
              count++;
              return true;
            }
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  function popDown() {
    setLogin(false);
  }

  function popUp() {
    setLogin(true);
  }
  function authorizeUser(){
    setAuth(true);
  }
  function unauthorizeUser(){
    setAuth(false);
  }
  return (
    <div>
      {auth ? <HeaderUser  unauthorize = {unauthorizeUser}/> : <Header log={popUp} />}
      <Slider />

      <div className={styles.content}>
        <div className={styles.board}>
          <div className={styles.topTitle}>
            <p>TOP PHIM NĂM</p>
          </div>
          <div className={styles.top}>
            {top1.map((pic, index) => (
              <div>
                <span>{index + 1}</span>
                <img
                  src={pic.src}
                  title={pics.title}
                  key={pic.key}
                  style={{
                    width: "50%",
                    height: "17%",
                    display: "block",
                    margin: "2rem 0 0 9.5rem",
                  }}
                ></img>
                <center>
                  <a href="/">{pic.title}</a>
                </center>
              </div>
            ))}
          </div>
          <div className={styles.topTitle}>
            <p>TOP PHIM THÁNG</p>
          </div>
          <div className={styles.top}>
            {top2.map((pic, index) => (
              <div>
                <span>{index + 1}</span>
                <img
                  src={pic.src}
                  title={pic.title}
                  key={pic._id}
                  style={{
                    width: "50%",
                    height: "17%",
                    display: "block",
                    margin: "2rem 0 0 9.5rem",
                  }}
                ></img>
                <center>
                  <a href="/">{pic.title}</a>
                </center>
              </div>
            ))}
          </div>
          <div className={styles.topTitle}>
            <p>TOP PHIM TUẦN</p>
          </div>
          <div className={styles.top}>
            {top3.map((pic, index) => (
              <div>
                <span>{index + 1}</span>
                <img
                  src={pic.src}
                  title={pic.title}
                  key={pic._id}
                  style={{
                    width: "50%",
                    height: "17%",
                    display: "block",
                    margin: "2rem 0 0 9.5rem",
                  }}
                ></img>
                <center>
                  <a href="/">{pic.title}</a>
                </center>
              </div>
            ))}
          </div>
        </div>
        <a href="/" className={styles.title}>
          PHIM CHIẾU RẠP
        </a>
        <div className={styles.list1}>
          {theater.map((pic) => (
            <Link
              to={`/film/${pic._id}`}
              state={{
                key: pic._id,
                filmID: pic._id,
                title: pic.title,
                src: pic.src,
                type: pic.type,
                year: pic.year,
                nation: pic.nation,
                sumary: pic.sumary,
                trailer: pic.trailer,
                rate: pic.rate,
                main: pic.main,
              }}
            >
              <Picture key={pic._id} src={pic.src} title={pic.title} />
            </Link>
          ))}
        </div>
        <a href="/" className={styles.title}>
          PHIM LẺ
        </a>
        <div className={styles.list2}>
          {phimle.map((pic) => (
            <Link
              to={`/film/${pic._id}`}
              state={{
                key: pic._id,
                filmID: pic._id,
                title: pic.title,
                src: pic.src,
                type: pic.type,
                year: pic.year,
                nation: pic.nation,
                sumary: pic.sumary,
                trailer: pic.trailer,
                rate: pic.rate,
                main: pic.main,
              }}
            >
              <Picture key={pic._id} src={pic.src} title={pic.title} />
            </Link>
          ))}
        </div>
        <a href="/" className={styles.title}>
          PHIM HOẠT HÌNH
        </a>
        <div className={styles.list2}>
          {anime.map((pic) => (
            <Link
              to={`/film/${pic._id}`}
              state={{
                key: pic._id,
                filmID: pic._id,
                title: pic.title,
                src: pic.src,
                type: pic.type,
                year: pic.year,
                nation: pic.nation,
                sumary: pic.sumary,
                trailer: pic.trailer,
                rate: pic.rate,
                main: pic.main,
              }}
            >
              <Picture key={pic._id} src={pic.src} title={pic.title} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
      <LogIn trigger={login} unlog={popDown} authorize = {authorizeUser}/>
    </div>
  );
}

export default HomePage;
