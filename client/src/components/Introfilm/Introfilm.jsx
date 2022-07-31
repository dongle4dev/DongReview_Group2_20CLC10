import React from "react";
import { Link, useLocation } from "react-router-dom";

import clsx from "clsx";
import styles from "./Introfilm.module.css";
import HeaderTitle from "../Header/HeaderTitle";
import LogIn from "../LogIn/LogIn";
import Picture from "../Picture/Picture";
import lstReview from "./reviewLst";
import Footer from "../Footer/Footer";

var pages = [];
var num_page = Math.ceil(lstReview.length / 5);
for (var i = 0; i < num_page; i++) pages.push(i + 1);

function ReviewSumary(props) {
  let content = props.content;
  content = content.slice(0, 200) + "...";
  return (
    <div className={styles.review}>
      <div className={styles.ava}>
        <img src="https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg" />
        <p>{props.user}</p>
      </div>
      <div className={styles.sumr}>
        <h1>{props.title}</h1>
        <p>
          {content}
          <Link
            to="/reviewpage"
            state={{
              key: props.key,
              user: props.user,
              title: props.title,
              content: props.content,
              like: props.like,
              share: props.share,
              cmt: props.cmt,
              time: props.time,
            }}
          >
            <a href="/">Xem thêm</a>
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
  const [login, setLogin] = React.useState(false);
  const [pos, setPos] = React.useState(0);
  const [check, setCheck] = React.useState(false);
  const [checkLike, setCheckL] = React.useState(false);
  const [rateFilm, setRate] = React.useState(0);

  const location = useLocation();
  const {
    key,
    title,
    src,
    type,
    year,
    nation,
    sumary,
    trailer,
    rate,
    main,
    news,
  } = location.state; // "useLocation" to get the state

  function clickStar(index) {
    setRate(index + 1);
  }
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
  function increase() {
    if (pos < num_page - 1) {
      setPos(pos + 1);
    }
  }
  function decrease() {
    if (pos > 0) {
      setPos(pos - 1);
    }
  }
  function setBegin() {
    setPos(0);
  }
  function setEnd() {
    setPos(num_page - 1);
  }
  function popDown() {
    setLogin(false);
  }
  function popUp() {
    setLogin(true);
  }

  return (
    <div>
      <HeaderTitle log={popUp} />

      <div className={styles.intro}>
        <h1 style={{ textTransform: "capitalize" }}>{title}</h1>
        <div className={styles.content}>
          <div className={styles.photo}>
            <Picture src={src} title={""} />
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
                {sumary.length > 70 && !check
                  ? sumary.slice(0, 300) + "..."
                  : sumary + "..."}
                {sumary.length > 70 && !check ? (
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
              }
              else {
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
            
            
            <span>Rating: {rateFilm}/5</span>
          </div>
          <div className={styles.lstReview}>
            <p>Top review</p>
            <p className={styles.writeReview}>Viết bài</p>
            {checkLike ? (
              <i
                onClick={clickLike}
                className={clsx("fa-solid fa-heart", styles.love)}
              ></i>
            ) : (
              <i
                onClick={clickLike}
                className={clsx("ti-heart", styles.love)}
              ></i>
            )}

            {lstReview.map((item, index) => {
              if (index >= 5 * pos && index <= 5 * pos + 4) {
                return (
                  <ReviewSumary
                    user={item.user}
                    key={item.key}
                    title={item.title}
                    like={item.like}
                    share={item.share}
                    cmt={item.cmt}
                    content={item.content}
                    time={item.time}
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
            {main.map((item) => (
              <div className={styles.nvat}>
                <img src={item.img}></img>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className={styles.news}>
            <p className={styles.extra}>Tin tức liên quan</p>
            <p className={styles.line}>none</p>
            {news.map((item, index) => (
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
      <LogIn trigger={login} unlog={popDown} />
      <Footer />
    </div>
  );
}

export default Introfilm;
