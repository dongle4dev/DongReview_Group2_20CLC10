import React from "react";
import axios from "axios";
import { Link, useLocation, Navigate } from "react-router-dom";

import clsx from "clsx";
import styles from "./Introfilm.module.css";
import HeaderTitle from "../Header/HeaderTitle";
import LogIn from "../LogIn/LogIn";
import Picture from "../Picture/Picture";
import Footer from "../Footer/Footer";
import ProfileHeader from "../Header/ProfileHeader";

var pages = [];
var num_page = 0;
for (var i = 0; i < num_page; i++) pages.push(i + 1);
var num_page_main = 0;
function ReviewSumary(props) {
  let content = props.content;
  content = content.slice(0, 200) + "...";

  return (
    <div className={styles.review}>
      <div className={styles.ava}>
        <img src={props.avt} />
        <p>{props.fullname}</p>
      </div>
      <div className={styles.sumr}>
        <h1>{props.title}</h1>
        <p>
          {content}
          <Link
            to={`/${props.filmID}/${props.reviewID}`}
            state={{
              reviewID: props.reviewID,
              filmID: props.filmID,
              userID: props.userID,
              title: props.title,
              content: props.content,
              like: props.like,
              share: props.share,
              cmt: props.cmt,
              time: props.time,
              title_film: props.title_film,
              member: props.user,
            }}
          >
            Xem thêm
          </Link>
        </p>
      </div>
      <div className={styles.icon}>
        <p>{props.like}</p>
        <i className="ti-heart"></i>
        <p>{props.cmt}</p>
        <i className="ti-comment"></i>
      </div>
    </div>
  );
}
const stars = [0, 1, 2, 3, 4];
function Introfilm() {
  const [users, setUser] = React.useState([]);
  const [login, setLogin] = React.useState(false);
  const [pos, setPos] = React.useState(0);
  const [main_pos, setMainPos] = React.useState(0);
  const [check, setCheck] = React.useState(false);
  const [checkLike, setCheckL] = React.useState(false);
  const [rateFilm, setRate] = React.useState(0);
  const [arr_new, setNews] = React.useState([]);
  const [lstReview, setReviews] = React.useState([]);
  const [checkFind, setFind] = React.useState(false);
  const [titleFind, setTitle] = React.useState("");
  const [lst_filmFind, setFilmFind] = React.useState([]);

  const [auth, setAuth] = React.useState(null);

  const location = useLocation();
  const {
    filmID,
    title,
    img,
    type,
    year,
    nation,
    description,
    trailer,
    rate,
    main,
    user,
  } = location.state; // "useLocation" to get the state
  console.log("user: ", user);
  const [u, setUserLogin] = React.useState(user);

  const [point, setPoint] = React.useState(rate.toFixed(1));
  function getDataUser(u) {
    setUserLogin(u);
    console.log("u: ", u);
  }
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
  function changeTitle(title) {
    setTitle(title);
  }
  function handleFind(check) {
    setFind(check);
  }
  function getFilmFind(lstFilm) {
    setFilmFind(lstFilm);
  }
  //console.log(filmID, title, src, type, year, nation, description, trailer, rate, main)
  React.useEffect(() => {
    const getData = async () => {
      try {
        const url2 = `http://localhost:5000/review/${filmID}/showreview`;
        console.log("before getting data");
        const res1 = await axios.get(`http://localhost:5000/news/${filmID}`);
        const res2 = await axios.get(url2);
        const res3 = await axios.get(`http://localhost:5000/user/all`);
        console.log("get users", res3.data);
        console.log("get news", res1.data.elements);
        console.log("get reviews", res2.data);
        let count = 0;
        const rv = res2.data.listofreview.filter((item) => {
          if (item.filmID === filmID) {
            return true;
          }
        });
        //const rv = res2.data
        num_page = Math.ceil(rv.length / 5);
        num_page_main = Math.ceil(main.length / 2);
        console.log("num_main: ", num_page_main, main.length);
        setNews(
          res1.data.elements.filter((item) => {
            if (item.filmID === filmID && count <= 4) {
              count++;
              return true;
            }
          })
        );
        console.log("rv_lst: ", rv);
        setReviews(rv);
        setUser(res3.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const clickStar = async (index) => {
    console.log("Click star: ", index + 1);
    const res = await axios.put(
      `http://localhost:5000/film/${filmID}/updatescore`,
      {
        _id: filmID,
        title: title,
        img: img,
        type: type,
        year: year,
        nation: nation,
        description: description,
        trailer: trailer,
        rate: index + 1,
        main: main,
      }
    );
    console.log("Put data: ", res.data);
    setRate(index + 1);
    setPoint(((index + 1 + rate * 20) / 21).toFixed(1));
  };
  function clickLike(event) {
    if (checkLike === false) {
      setCheckL(true);
    } else {
      setCheckL(false);
    }
    event.preventDefault();
  }
  function clickContent(event) {
    if (check === false) {
      setCheck(true);
    } else {
      setCheck(false);
    }
    event.preventDefault();
  }
  function increaseMain(event) {
    if (main_pos < num_page_main - 1) {
      setMainPos(main_pos + 1);
    }
    event.preventDefault();
  }
  function decreaseMain(event) {
    if (main_pos > 0) {
      setMainPos(main_pos - 1);
    }
    event.preventDefault();
  }
  function increase(event) {
    if (pos < num_page - 1) {
      setPos(pos + 1);
    }
    event.preventDefault();
  }
  function decrease(event) {
    if (pos > 0) {
      setPos(pos - 1);
    }
    event.preventDefault();
  }
  function setBegin(event) {
    setPos(0);
    event.preventDefault();
  }
  function setEnd(event) {
    setPos(num_page - 1);
    event.preventDefault();
  }
  function popDown() {
    setLogin(false);
  }
  function popUp() {
    setLogin(true);
  }

  return checkFind ? (
    <Navigate
      to={`/film/found-films/${titleFind.replace(/ /g, "-")}`}
      state={{
        lst_film: lst_filmFind,
        title: titleFind,
        user: u,
      }}
    ></Navigate>
  ) : (
    <div>
      {u.fullName !== "" ? (
        <ProfileHeader
          title={title}
          setCheckFind={handleFind}
          setTitle={changeTitle}
          setFilmFind={getFilmFind}
          user={u}
        />
      ) : (
        <HeaderTitle
          setCheckFind={handleFind}
          setTitle={changeTitle}
          setFilmFind={getFilmFind}
          log={popUp}
        />
      )}

      <div className={styles.intro}>
        <h1>{title}</h1>
        <div className={styles.content}>
          <div className={styles.photo}>
            <Picture src={img} title={""} />
          </div>
          <iframe
            className={styles.trailer}
            src={trailer}
            title="YouTube video player"
            frameborder="0"
          ></iframe>
          <div className={styles.lstInfo}>
            <p className={styles.info}>
              Tên phim:
              <span>{title}</span>
            </p>
            <p className={styles.info}>
              Thể loại:
              <span>{type}</span>
            </p>
            <p className={styles.info}>
              Năm sản xuất:
              <span>{year}</span>
            </p>
            <p className={styles.info}>
              Quốc gia:
              <span>{nation}</span>
            </p>
            <p className={styles.info}>
              Nội dung:
              <span>
                {description.length > 70 && !check
                  ? description.slice(0, 300) + "..."
                  : description + "..."}
                {description.length > 70 && !check ? (
                  <a
                    href="/"
                    style={{ color: "rgb(127, 162, 243)" }}
                    onClick={clickContent}
                  >
                    Xem thêm
                  </a>
                ) : (
                  <a
                    href="/"
                    style={{ color: "rgb(127, 162, 243)" }}
                    onClick={clickContent}
                  >
                    Thu gọn
                  </a>
                )}
              </span>
            </p>
          </div>
          <div className={styles.rate}>
            {stars.map((star, index) => {
              if (index >= rateFilm) {
                return (
                  <i
                    onClick={() => {
                      clickStar(index);
                    }}
                    className="ti-star"
                  ></i>
                );
              } else {
                return (
                  <i
                    onClick={() => {
                      clickStar(index);
                    }}
                    className="fa-solid fa-star"
                  ></i>
                );
              }
            })}

            <span>Rating: {point}</span>
          </div>
          <div className={styles.lstReview}>
            <p>Top review</p>
            {u.fullName !== "" ? (
              <p className={styles.writeReview}>
                <Link
                  to={`/${title.replace(/ /g, "-")}/writereview`}
                  state={{
                    filmid_addrv: filmID,
                    userID_addrv: u.id,
                    user: u,
                  }}
                >
                  Viết bài
                </Link>
              </p>
            ) : null}
            {u.fullName !== "" ? (
              checkLike ? (
                <i
                  onClick={clickLike}
                  className={clsx("fa-solid fa-heart", styles.love)}
                ></i>
              ) : (
                <i
                  onClick={clickLike}
                  className={clsx("ti-heart", styles.love)}
                ></i>
              )
            ) : null}

            {num_page === 0 ? <h2>Không có bài viết nào</h2> : null}
            {lstReview.map((item, index) => {
              if (index >= 5 * pos && index <= 5 * pos + 4) {
                return (
                  <ReviewSumary
                    reviewID={item._id}
                    key={item._id}
                    filmID={item.filmID}
                    userID={item.userID}
                    fullname={
                      users.find((user) => user._id === item.userID).fullName
                    }
                    avt={users.find((user) => user._id === item.userID).avt}
                    title={item.title}
                    like={item.like}
                    share={item.share}
                    cmt={item.cmt}
                    content={item.content}
                    createdAt={item.createdAt}
                    title_film={title}
                    user={u}
                  />
                );
              }
            })}
            <div className={styles.square}>
              <button onClick={setBegin}>
                <i className="ti-angle-double-left"></i>
              </button>
              <button onClick={decrease} className={styles.buttonl}>
                <i className="ti-angle-left"></i>
              </button>

              <span className={styles.dot}>{pos + 1}</span>

              <button onClick={increase}>
                <i className="ti-angle-right"></i>
              </button>
              <button onClick={setEnd}>
                <i className="ti-angle-double-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.artist}>
            <p>Nhân vật/Diễn viên</p>
            <p className={styles.line}>none</p>
            <i
              onClick={decreaseMain}
              className={clsx(styles.left, "fa-solid fa-angles-left")}
            ></i>
            <i
              onClick={increaseMain}
              className={clsx(styles.right, "fa-solid fa-angles-right")}
            ></i>
            {main.map((item, index) => {
              if (index >= 2 * main_pos && index <= 2 * main_pos + 1) {
                return (
                  <div key={index} className={styles.nvat}>
                    <img src={item.img}></img>
                    <p>{item.name}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className={styles.news}>
            <p className={styles.extra}>Tin tức liên quan</p>
            <p className={styles.line}>none</p>
            {arr_new.map((item, index) => (
              <div className={styles.new}>
                <a href={item.src} target="_blank" rel="noopener noreferrer">
                  <img alt="" src={item.img} width="150" height="90" />
                  <p>
                    {item.title.length > 60
                      ? item.title.slice(0, 60) + "..."
                      : item.title}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <LogIn getData={getDataUser} trigger={login} unlog={popDown} />
      <Footer />
    </div>
  );
}

export default Introfilm;
