import React from "react";
import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";
import ProfileHeader from "../Header/ProfileHeader";
import styles from "./AddReview.module.css";
import Footer from "../Footer/Footer";

function AddReview() {
  const location = useLocation();

  const { filmid_addrv, userID_addrv, user } = location.state; // "useLocation" to get the state
  console.log("userRV: ", userID_addrv)
  const [checkEmpty, setCheckEmpty] = React.useState(false);
  const [checkMaxLen, setCheckLen] = React.useState({
    title: 0,
    content: 0
  });
  const [review, setReview] = React.useState({
    filmID: filmid_addrv,
    userID: userID_addrv,
    title: "",
    content: "",
    like: 0,
    cmt: 0
  });

  const [checkFind, setFind] = React.useState(false);
  const [titleFind, setTitle] = React.useState("");
  const [lst_filmFind, setFilmFind] = React.useState([]);

  function changeTitle(title) {
    setTitle(title);
  }
  function handleFind(check) {
    setFind(check);
  }
  function getFilmFind(lstFilm) {
    setFilmFind(lstFilm);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    //k dc xai event trong setter
    setReview((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        //name luu toan bo gtri value
        [name]: value,
      };
    });
    if (name === "title") {
      setCheckLen((prev)=> {
        return {
          title: value.length,
          content: prev.content
        }
      })
    }
    if (name === "content") {
      setCheckLen((prev) => {
        return {
          title: prev.title,
          content: value.length,
        };
      });
    }
  }
  const postReview = async (e) => {
    if (review.title === "" || review.content === "") {
      setCheckEmpty(true);
    } else {
      const headers = {
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
        "Content-type": "application/json",
      };
      const res = await axios.post(
        "http://localhost:5000/review/store",
        review,
        { headers }
      );
      console.log("Posted a new review", res);
    }
  };
  return checkFind ? (
    <Navigate
      to={`/film/found-films/${titleFind.replace(/ /g, "-")}`}
      state={{
        lst_film: lst_filmFind,
        title: titleFind,
        user: user
      }}
    ></Navigate>
  ) : (
    <div className={styles.reviewPage}>
      <ProfileHeader
        title="THÊM BÀI VIẾT"
        setCheckFind={handleFind}
        setTitle={changeTitle}
        setFilmFind={getFilmFind}
        user={user}
      />
      {/* <div className={styles.intro}>
        <h1 style={{ textTransform: "capitalize" }}>VIẾT BÀI REVIEW</h1>
      </div> */}
      <div className={styles.review}>
        <div className={styles.sumr}>
          <h1 style={{ paddingTop: "6rem" }}>Tiêu đề </h1>
          {checkEmpty && review.title === "" ? (
            <h4>Hãy nhập tiêu đề bài viết</h4>
          ) : null}
          {checkMaxLen.title === 100 ? <h4>Tối đa là 100 kí tự</h4> : null}
          <div>
            <textarea
              onChange={handleChange}
              name="title"
              value={review.title}
              className={styles.filmName}
              wrap="hard"
              maxLength="100"
              placeholder="Nhập tiêu đề bài viết"
            ></textarea>
          </div>
          <h1>Nội dung bài viết </h1>
          {checkEmpty && review.content === "" ? (
            <h4>Hãy nhập nội dung bài viết</h4>
          ) : null}
          {checkMaxLen.content === 1000 ? <h4>Tối đa là 1000 kí tự</h4> : null}
          <div>
            <textarea
              onChange={handleChange}
              name="content"
              value={review.content}
              className={styles.detail}
              wrap="hard"
              maxLength="1000"
              placeholder="Viết bài viết của bạn"
            ></textarea>
          </div>
        </div>
        <button onClick={postReview}>Đăng bài</button>
      </div>
      <Footer />
    </div>
  );
}

export default AddReview;
