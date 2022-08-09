import React from "react";
import styles from "./ProfilePage.module.css";
import clsx from "clsx";
import Picture from "../Picture/Picture";
import Footer from "../Footer/Footer";
import pics from "../Slider/pics";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <div>
      <Header></Header>
      <div className={styles.mainInfo}>
        <div className={styles.layer1}>
          <div className={styles.avatar}>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            ></img>
          </div>
          <h1 style={{ left: "20rem" }}>ADMIN</h1>
        </div>
        <div className={styles.layer2}>
          <p className={styles.name}>Đông Thức</p>
          <div className={styles.detail}>
            <p>Tên đăng nhập: hanmaihaihuoc</p>
            <p>Email: hanmaingunoc@gmail.com</p>
            <p>Nicname: Trần Gia Hân Mai</p>
            <p>Mật khẩu: haimaitretrau2k2</p>
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
          state={{ title: "KHO QUẢN LÝ PHIM" }}
        >
          {" "}
          &#x2023; Quản lý phim{" "}
        </Link>
      </div>
      <div className={styles.tag_container}>
        <Link
          className={styles.tag}
          to="/admin/approve"
          state={{ title: "KIỂM DUYỆT" }}
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
        <a className={styles.more} href="">
          {" "}
          Xem thêm...{" "}
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
      <div className={styles.tag_container}>
        <a className={styles.tag} href="">
          {" "}
          &#x2023; Danh sách bài review
        </a>
        <a className={styles.more} href="">
          {" "}
          Xem thêm...{" "}
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
