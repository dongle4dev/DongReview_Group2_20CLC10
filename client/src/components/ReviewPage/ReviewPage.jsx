import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./ReviewPage.module.css";
import HeaderTitle from "../Header/HeaderTitle";
import LogIn from "../LogIn/LogIn";
import Footer from "../Footer/Footer";
import cmts from "./cmts";

var pages = [];
var num_page = Math.ceil(cmts.length / 8);
for (var i = 0; i < num_page; i++) pages.push(i + 1);

function Comment(props) {
  return (
    <div className={styles.cmt}>
      <div className={styles.ava}>
        <img src={props.ava} />
        <p>{props.user}</p>
      </div>
      <p>{props.content}</p>
    </div>
  );
}

function ReviewPage() {
  const location = useLocation();
  const { key, user, title, content, like, share, cmt, time } = location.state;

  const [login, setLogin] = React.useState(false);
  const [num_like, setLike] = React.useState(like);
  const [check, setCheck] = React.useState(false);
  const [pos, setPos] = React.useState(0);
  const [checkOption, setCheckOp] = React.useState(false);

  function clickOption(event) {
    if (checkOption === false) {
      setCheckOp(true);
    } else {
      setCheckOp(false);
    }
    event.preventDefault();
  }
  function increase() {
    if (pos < num_page - 1) {
      setPos(pos + 1);
    }
  }
  function popDown() {
    setLogin(false);
  }
  function popUp() {
    setLogin(true);
  }
  function clickLike(event) {
    if (check === false) {
      setCheck(true);
      setLike(num_like + 1);
    } else {
      setCheck(false);
      setLike(num_like - 1);
    }
    event.preventDefault();
  }
  function postCmt() {
    console.log("Posted CMT");
  }
  return (
    <div className={styles.reviewPage}>
      <HeaderTitle log={popUp} />
      <div className={styles.intro}>
        <h1 style={{ textTransform: "capitalize" }}>{title}</h1>
      </div>
      <div className={styles.content}>
        <ul onClick={clickOption} className={styles.option}>
          <li>
            <i className="fa-solid fa-ellipsis"></i>
            {checkOption ? (
              <ul className={styles.choices}>
                <li>Báo cáo</li>
                <li>Xóa bài viết</li>
              </ul>
            ) : null}
          </li>
        </ul>

        <div className={styles.review}>
          <div className={styles.ava}>
            <img src="https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg" />
            <p>{user}</p>
          </div>

          <div className={styles.sumr}>
            <h1>{title}</h1>
            <h2>Ngày đăng: {time}</h2>
            <p>{content}</p>
            <div className={styles.icon}>
              <p>{num_like}</p>
              {check ? (
                <i onClick={clickLike} className="fa-solid fa-heart"></i>
              ) : (
                <i onClick={clickLike} className="ti-heart"></i>
              )}

              <p>{cmt}</p>
              <i className="ti-comment"></i>
            </div>
          </div>
        </div>
        <div className={styles.lstCmt}>
          <h3>BÌNH LUẬN</h3>
          <div className={styles.writeCmt}>
            <div className={styles.ava}>
              <img src="https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg" />
              <p>{user}</p>
            </div>
            <textarea
              onKeyDown={(event) => {
                if (event.shiftKey === true) {
                  event.target.value = event.target.value + "\n";
                }
                else if (event.key === "Enter") {
                  postCmt();
                }
                
              }}
              rows="6"
              maxLength="1000"
              placeholder="Viết bình luận của bạn"
            ></textarea>
            <button onClick={postCmt} id="post_cmt">
              Đăng
            </button>
          </div>
          {cmts.map((item, index) => {
            if (index <= 8 * pos + 7) {
              return (
                <Comment
                  user={item.user}
                  key={item.key}
                  ava={item.ava}
                  content={item.content}
                />
              );
            }
          })}
          {pos === num_page - 1 ? null : (
            <lord-icon
              onClick={increase}
              src="https://cdn.lordicon.com/zvpyzhdi.json"
              trigger="loop"
              delay="1000"
              colors="primary:#6c7b8b"
            ></lord-icon>
          )}
        </div>
      </div>

      <LogIn trigger={login} unlog={popDown} />
      <Footer />
    </div>
  );
}

export default ReviewPage;
