import React from "react";
import styles from "./ProfilePage.module.css";
import Footer from "../Footer/Footer";
import { Link, Navigate, useLocation } from "react-router-dom";
import ProfileHeader from "../Header/ProfileHeader";

function AdminPage() {
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
            <img src={member.avt} alt=""></img>
          </div>
          <h1 style={{ left: "20rem" }}>ADMIN</h1>
        </div>
        <div className={styles.layer2}>
          <p className={styles.name}>{member.fullName}</p>
          <div className={styles.detail}>
            <p>Họ và tên: {member.fullName}</p>
            <p>Ngày sinh: {member.dob}</p>
            <a href="/"> Chỉnh sửa</a>
          </div>
          <a className={styles.addFilm} href="/admin/addfilm">
            Thêm phim
          </a>
        </div>
      </div>
      <div className={styles.tag_container}>
        <Link
          className={styles.tag}
          to="/admin/list-film"
          state={{ title_header: "KHO QUẢN LÝ PHIM", user: member }}
        >
          {" "}
          &#x2023; Quản lý phim{" "}
        </Link>
      </div>
      <div className={styles.tag_container}>
        <Link
          className={styles.tag}
          to="/admin/approve"
          state={{ title_header: "KIỂM DUYỆT" }}
        >
          {" "}
          &#x2023; Kiểm duyệt{" "}
        </Link>
      </div>
      <div className={styles.tag_container}>
        <a className={styles.tag} href="">
          {" "}
          &#x2023; Tố cáo
        </a>
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
          &#x2023; Danh sách bài review
        </a>
      </div>
      <div className={styles.content}>
        {/* <div className={styles.item}>
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
        </div> */}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AdminPage;
