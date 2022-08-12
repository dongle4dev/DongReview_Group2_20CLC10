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
import { Link, useLocation, Navigate } from "react-router-dom";
import FindPage from "../FindPage/FindPage";

function HomePage() {
  const [login, setLogin] = React.useState(false);
  const [action, setAction] = React.useState([]);
  const [romance, setRomance] = React.useState([]);
  const [anime, setAnime] = React.useState([]);
  const [topFilms, setTop] = React.useState([]);
  const [checkFind, setFind] = React.useState(false);
  const [titleFind, setTitle] = React.useState("");
  const [lst_filmFind, setFilmFind] = React.useState([]);

  const [auth, setAuth] = React.useState(null);
  const [user, setUser] = React.useState({
    id: "",
    fullName: "",
    avt: "",
    dob: "",
  });

  // console.log("title: ", titleFind, lst_filmFind);

  // window.onload = function () {
  //   if (!window.location.hash) {
  //     window.location = window.location + "#loaded";
  //     window.location.reload();
  //   }
  // };
  function changeTitle(title) {
    setTitle(title);
  }
  function handleFind(check) {
    setFind(check);
  }
  function getFilmFind(lstFilm) {
    setFilmFind(lstFilm);
  }
  function getDataUser(u) {
    setUser(u);
  }
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res1 = await axios.get("http://localhost:5000/film/all");
        const res2 = await axios.get("http://localhost:5000/film/top-films");
        console.log("lst_films: ", res1.data);
        console.log("topfilms: ", res2.data);
        let count = 0;
        setAction(
          res1.data.filter((item) => {
            if (item.type.includes("phimhanhdong") && count <= 5) {
              count++;
              return true;
            }
          })
        );
        count = 0;
        setRomance(
          res1.data.filter((item) => {
            if (item.type.includes("phimlangman") && count <= 5) {
              count++;
              return true;
            }
          })
        );
        count = 0;
        setAnime(
          res1.data.filter((item) => {
            if (item.type.includes("phimhoathinh") && count <= 5) {
              count++;
              return true;
            }
          })
        );
        setTop(res2.data.elements);
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
  function authorizeUser() {
    setAuth(true);
  }
  function unauthorizeUser() {
    setAuth(false);
  }

  return checkFind ? (
    <Navigate
      to={`/film/found-films/${titleFind.replace(/ /g, "-")}`}
      state={{
        lst_film: lst_filmFind,
        title: titleFind,
        user: user,
      }}
    ></Navigate>
  ) : (
    // (<FindPage lst_film={lst_filmFind} />)
    <div>
      {user.fullName !== "" ? (
        <HeaderUser
          setCheckFind={handleFind}
          setTitle={changeTitle}
          setFilmFind={getFilmFind}
          user={user}
          unauthorize={unauthorizeUser}
        />
      ) : (
        <Header
          setCheckFind={handleFind}
          setTitle={changeTitle}
          setFilmFind={getFilmFind}
          log={popUp}
        />
      )}

      <Slider user={user} />

      <div className={styles.content}>
        <div className={styles.board}>
          <div className={styles.topTitle}>
            <p>TOP PHIM</p>
          </div>
          <div className={styles.top}>
            {topFilms.map((pic, index) => (
              <Link
                to={`/film/${pic._id}`}
                state={{
                  key: pic._id,
                  filmID: pic._id,
                  title: pic.title,
                  img: pic.img,
                  type: pic.type,
                  year: pic.year,
                  nation: pic.nation,
                  description: pic.description,
                  trailer: pic.trailer,
                  rate: pic.rate,
                  main: pic.main,
                  user: user,
                }}
              >
                <div>
                  <span>{index + 1}</span>
                  <img
                    src={pic.img}
                    // src="https://menhadep.com/wp-content/uploads/de-thuong-hinh-ve-cute.jpg"
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
              </Link>
            ))}
          </div>
        </div>
        <a href="/" className={styles.title}>
          PHIM HÀNH ĐỘNG
        </a>
        <div className={styles.list1}>
          {action.map((pic) => (
            <Link
              to={`/film/${pic._id}`}
              state={{
                key: pic._id,
                filmID: pic._id,
                title: pic.title,
                img: pic.img,
                type: pic.type,
                year: pic.year,
                nation: pic.nation,
                description: pic.description,
                trailer: pic.trailer,
                rate: pic.rate,
                main: pic.main,
                user: user,
              }}
            >
              <Picture key={pic._id} src={pic.img} title={pic.title} />
            </Link>
          ))}
        </div>
        <a href="/" className={styles.title}>
          PHIM LÃNG MẠN
        </a>
        <div className={styles.list2}>
          {romance.map((pic) => (
            <Link
              to={`/film/${pic._id}`}
              state={{
                key: pic._id,
                filmID: pic._id,
                title: pic.title,
                img: pic.img,
                type: pic.type,
                year: pic.year,
                nation: pic.nation,
                description: pic.description,
                trailer: pic.trailer,
                rate: pic.rate,
                main: pic.main,
                user: user,
              }}
            >
              <Picture key={pic._id} src={pic.img} title={pic.title} />
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
                img: pic.img,
                type: pic.type,
                year: pic.year,
                nation: pic.nation,
                description: pic.description,
                trailer: pic.trailer,
                rate: pic.rate,
                main: pic.main,
                user: user,
              }}
            >
              <Picture key={pic._id} src={pic.img} title={pic.title} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
      <LogIn
        getData={getDataUser}
        trigger={login}
        unlog={popDown}
        authorize={authorizeUser}
      />
    </div>
  );
}

export default HomePage;
