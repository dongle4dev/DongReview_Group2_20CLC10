import React from "react";
import styles from "./ProfilePage.module.css";
import clsx from "clsx";
import Picture from "../Picture/Picture";
import pics from "../Slider/pics";
import Footer from "../Footer/Footer";
import ProfileHeader from "../Header/ProfileHeader";
import { Navigate, useLocation } from "react-router-dom";

function MemberPage() {
  const location = useLocation();
  const { member } = location.state;
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
      <ProfileHeader
        title="TRANG CÁ NHÂN"
        setCheckFind={handleFind}
        setTitle={changeTitle}
        setFilmFind={getFilmFind}
        user={member}
      />
      <div className={styles.mainInfo}>
        <div className={styles.layer1}>
          <div className={styles.avatar}>
            <img src={member.avt} alt="avatar"></img>
          </div>
          <h1> TRANG CÁ NHÂN</h1>
        </div>
        <div className={styles.layer2}>
          <p className={styles.name}>{member.fullName}</p>
          <div className={styles.detail}>
            <p>Họ và tên: {member.fullName}</p>
            <p>Ngày sinh: {member.dob}</p>
            <a href="/"> Chỉnh sửa</a>
          </div>
        </div>
      </div>
      <div className={styles.tag_container}>
        <a className={styles.tag} href="">
          {" "}
          &#x2023; Các bài viết đã thêm{" "}
        </a>
        {/* <a className={styles.more} href="">
          {" "}
          Xem thêm...{" "}
        </a> */}
      </div>
      {/* <div className={styles.content}>
        <div className={styles.item}>
          <Picture src={pics[0].src} title={pics[0].title} key={pics[0].key} />
        </div>
        <div className={styles.item}>
          <Picture
            src={pics[0 + 1].src}
            title={pics[0 + 1].title}
            key={pics[0 + 1].key}
          />
        </div>
        <div className={styles.item}>
          <Picture
            src={pics[0 + 2].src}
            title={pics[0 + 2].title}
            key={pics[0 + 2].key}
          />
        </div>
        <div className={styles.item}>
          <Picture
            src={pics[0 + 3].src}
            title={pics[0 + 3].title}
            key={pics[0 + 3].key}
          />
        </div>
      </div> */}
      <div className={styles.tag_container}>
        <a className={styles.tag} href="">
          {" "}
          &#x2023; Phim yêu thích
        </a>
        {/* <a className={styles.more} href="">
          {" "}
          Xem thêm...{" "}
        </a> */}
      </div>
      {/* <div className={styles.content}>
        <div className={styles.item}>
          <Picture src={pics[0].src} title={pics[0].title} key={pics[0].key} />
        </div>
        <div className={styles.item}>
          <Picture
            src={pics[0 + 1].src}
            title={pics[0 + 1].title}
            key={pics[0 + 1].key}
          />
        </div>
        <div className={styles.item}>
          <Picture
            src={pics[0 + 2].src}
            title={pics[0 + 2].title}
            key={pics[0 + 2].key}
          />
        </div>
        <div className={styles.item}>
          <Picture
            src={pics[0 + 3].src}
            title={pics[0 + 3].title}
            key={pics[0 + 3].key}
          />
        </div>
      </div> */}
      <Footer></Footer>
    </div>
  );
}

export default MemberPage;
