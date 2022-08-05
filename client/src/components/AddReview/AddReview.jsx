import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import styles from "./AddReview.module.css";
import HeaderTitle from "../Header/HeaderTitle";
import Footer from "../Footer/Footer";

function AddReview() {
  const location = useLocation();
  const { filmid_addrv, userID_addrv } = location.state; // "useLocation" to get the state

  const [review, setReview] = React.useState({
    filmID: filmid_addrv,
    userID: userID_addrv,
    title: "",
    content: "",
  });

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
  }
  const postReview = async (e) => {
    const headers = {
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
      "Content-type": "application/json",
    };
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      review,
      { headers }
    );
    console.log("Posted a new review", res);
  };
  return (
    <div className={styles.reviewPage}>
      <HeaderTitle />
      <div className={styles.intro}>
        <h1 style={{ textTransform: "capitalize" }}>VIẾT BÀI REVIEW</h1>
      </div>
      <div className={styles.review}>
        <div className={styles.sumr}>
          <h1 style={{ paddingTop: "6rem" }}>Tiêu đề </h1>
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
