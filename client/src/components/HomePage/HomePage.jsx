<<<<<<< HEAD
import React from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LogIn from "../LogIn/LogIn";
import Slider from "../Slider/Slider";
import styles from "./HomePage.module.css";
import Picture from "../Picture/Picture";
import pics from "../Slider/pics";
import { Link } from "react-router-dom";

function HomePage() {
  const [login, setLogin] = React.useState(false);
  const [theater, setTheater] = React.useState([]);
  const [phimle, setPhimLe] = React.useState([]);
  const [anime, setAnime] = React.useState([]);
  const [top1, setTopNam] = React.useState([]);
  const [top2, setTopThang] = React.useState([]);
  const [top3, setTopTuan] = React.useState([]);

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
        const res = await axios.get(
          "https://mocki.io/v1/f3cdca9a-37bd-459a-8353-c9ab45eae488"
        );
        console.log("get data", res.data);
        setTheater(res.data.theater);
        setPhimLe(res.data.phimle);
        setAnime(res.data.phimhoathinh);
        setTopNam(res.data.top_nam);
        setTopThang(res.data.top_thang);
        setTopTuan(res.data.top_tuan);
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
  return (
    <div>
      <Header log={popUp} />
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
            <p>TOP PHIM TUẦN</p>
          </div>
          <div className={styles.top}>
            {top3.map((pic, index) => (
              <div>
                <span>{index + 1}</span>
                <img
                  src={pic.src}
                  title={pic.title}
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
        </div>
        <a href="/" className={styles.title}>
          PHIM CHIẾU RẠP
        </a>
        <div className={styles.list1}>
          {theater.map((pic) => (
            <Picture src={pic.src} title={pic.title} />
          ))}
        </div>
        <a href="/" className={styles.title}>
          PHIM LẺ
        </a>
        <div className={styles.list2}>
          {phimle.map((pic) => (
            <Picture src={pic.src} title={pic.title} />
          ))}
        </div>
        <a href="/" className={styles.title}>
          PHIM HOẠT HÌNH
        </a>
        <div className={styles.list2}>
          {anime.map((pic) => (
            <Picture src={pic.src} title={pic.title} />
          ))}
        </div>
      </div>
      <Footer />
      <LogIn trigger={login} unlog={popDown} />
    </div>
  );
}

export default HomePage;
=======
import React from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LogIn from "../LogIn/LogIn";
import Slider from "../Slider/Slider";
import styles from "./HomePage.module.css";
import Picture from "../Picture/Picture";
import pics from "../Slider/pics";
import { Link } from "react-router-dom";

function HomePage() {
  const [login, setLogin] = React.useState(false);
  const [theater, setTheater] = React.useState([]);
  const [phimle, setPhimLe] = React.useState([]);
  const [anime, setAnime] = React.useState([]);
  const [top1, setTopNam] = React.useState([]);
  const [top2, setTopThang] = React.useState([]);
  const [top3, setTopTuan] = React.useState([]);
  const url = "/api/data.json";
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
        setTheater(res.data.theater);
        setPhimLe(res.data.phimle);
        setAnime(res.data.phimhoathinh);
        setTopNam(res.data.top_nam);
        setTopThang(res.data.top_thang);
        setTopTuan(res.data.top_tuan);
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
  return (
    <div>
      <Header log={popUp} />
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
            <p>TOP PHIM TUẦN</p>
          </div>
          <div className={styles.top}>
            {top3.map((pic, index) => (
              <div>
                <span>{index + 1}</span>
                <img
                  src={pic.src}
                  title={pic.title}
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
        </div>
        <a href="/" className={styles.title}>
          PHIM CHIẾU RẠP
        </a>
        <div className={styles.list1}>
          {theater.map((pic) => (
            <Picture src={pic.src} title={pic.title} />
          ))}
        </div>
        <a href="/" className={styles.title}>
          PHIM LẺ
        </a>
        <div className={styles.list2}>
          {phimle.map((pic) => (
            <Picture src={pic.src} title={pic.title} />
          ))}
        </div>
        <a href="/" className={styles.title}>
          PHIM HOẠT HÌNH
        </a>
        <div className={styles.list2}>
          {anime.map((pic) => (
            <Picture src={pic.src} title={pic.title} />
          ))}
        </div>
      </div>
      <Footer />
      <LogIn trigger={login} unlog={popDown} />
    </div>
  );
}

export default HomePage;
>>>>>>> c86749f9f83217cfcf34a3b0148124cdc444b594
