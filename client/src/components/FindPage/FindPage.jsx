import React from "react";
import { useLocation, Navigate, Link } from "react-router-dom";
import styles from "./FindPage.module.css";
import Picture from "../Picture/Picture";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProfileHeader from "../Header/ProfileHeader";
import LogIn from "../LogIn/LogIn";

function FindPage(props) {
  const location = useLocation();
  const { lst_film, title, user } = location.state;

  const [login, setLogin] = React.useState(false);
  const [checkFind, setFind] = React.useState(false);
  const [titleFind, setTitle] = React.useState("");
  const [lst_filmFind, setFilmFind] = React.useState([]);

  const [auth, setAuth] = React.useState(null);
  const [u, setUserLogin] = React.useState(user);

  function popDown() {
    setLogin(false);
  }
  function getDataUser(u) {
    setUserLogin(u);
    console.log("u: ", u);
  }
  function popUp() {
    setLogin(true);
  }
  function changeTitle(title) {
    setTitle(title);
  }
  function handleFind(check) {
    setFind(check);
  }
  function getFilmFind(lstFilm) {
    setFilmFind(lstFilm);
  }
  return checkFind ? (
    <Navigate
      to={`/film/found-films/${titleFind.replace(/ /g, "-")}`}
      state={{
        lst_film: lst_filmFind,
        title: titleFind,
      }}
    ></Navigate>
  ) : (
    <div>
      {u.fullName !== "" ? (
        <ProfileHeader
          title="TÌM KIẾM"
          setCheckFind={handleFind}
          setTitle={changeTitle}
          setFilmFind={getFilmFind}
          user={u}
        />
      ) : (
        <Header
          setCheckFind={handleFind}
          setTitle={changeTitle}
          setFilmFind={getFilmFind}
          log={popUp}
        />
      )}
      <div className={styles.container}>
        <h1>Kết quả tìm kiểm của từ khóa "{title}"</h1>
        <div className={styles.grid}>
          {lst_film.map((pic) => (
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
      <LogIn getData={getDataUser} trigger={login} unlog={popDown} />
      <Footer></Footer>
    </div>
  );
}

export default FindPage;
