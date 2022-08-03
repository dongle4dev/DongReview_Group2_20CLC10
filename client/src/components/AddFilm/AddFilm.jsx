import React from "react";
import styles from "./AddFilm.module.css";
import clsx from "clsx";
import axios from "axios";

function AddFilm() {
  //const url = "/api/data";
  const [input_arr, setArr] = React.useState([0]);
  const [film, setFilm] = React.useState({});
  function addCharacter(event) {
    setArr((prev) => [...prev, 0]);
    event.preventDefault();
  }
  function Character(props) {
    return (
      <div className={styles.input}>
        <p>Diễn viên chính {props.index + 1}: </p>
        <p>*</p>

        <input type="text" placeholder="Tên đăng nhập"></input>
        <p onClick={addCharacter} className={styles.plus}>
          <i className="fa-solid fa-plus"></i>
        </p>
      </div>
    );
  }

  async function handleClick(event) {
    event.preventDefault();
    try {
      let rs = await fetch(
        "https://mocki.io/v1/aeef2834-c670-4dcc-93d8-b131b195c877",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            key1: "myusername",
          }),
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <div className={styles.head}>
          <h2>THÊM PHIM</h2>
        </div>
        <div className={styles.input}>
          <p>Tên phim: </p>
          <p>*</p>
          <input type="text" placeholder="Tên đăng nhập" required></input>
        </div>
        <div className={styles.input}>
          <p>Source ảnh: </p>
          <p>*</p>
          <input type="text" placeholder="Nhập link ảnh"></input>
          <p className={styles.trailer}>Link trailer: </p>
          <p>*</p>
          <input type="text" placeholder="Nhập link trailer"></input>
        </div>
        <div className={styles.input}>
          <p>Thể loại: </p>
          <p>*</p>
          <input type="text" placeholder="Nhập thể loại"></input>
          <p className={styles.year}>Năm sản xuất:</p>
          <p>*</p>
          <input type="text" placeholder="Nhập năm sản xuất"></input>
        </div>
        <div className={styles.input}>
          <p>Quốc gia:</p>
          <p>*</p>
          <input type="text" placeholder="Nhập quốcgia"></input>
        </div>
        <div className={clsx(styles.input, styles.content)}>
          <p>Nội dung:</p>
          <p>*</p>
          <textarea
            rows="8"
            cols="91"
            maxLength="1000"
            placeholder="Nhập nội dung"
          ></textarea>
        </div>
        {input_arr.map((item, index) => (
          <Character index={index} />
        ))}

        <div className={styles.input}>
          <p>Link tin tức 1: </p>
          <p>*</p>
          <input type="text" placeholder="Nhập link tin tức 1"></input>
        </div>
        <div className={styles.input}>
          <p>Link tin tức 2 </p>
          <p>*</p>
          <input type="text" placeholder="Nhập link tin tức 2"></input>
        </div>
        <div className={styles.input}>
          <p>Link tin tức 3: </p>
          <p>*</p>
          <input type="text" placeholder="Nhập link tin tức 3"></input>
        </div>
        <div className={styles.input}>
          <p>Link tin tức 4: </p>
          <p>*</p>
          <input type="text" placeholder="Nhập link tin tức 4"></input>
        </div>
        <div className={styles.input}>
          <p>Link tin tức 5: </p>
          <p>*</p>
          <input type="text" placeholder="Nhập link tin tức 5"></input>
        </div>

        <div className={styles.addFilm}>
          <button onClick={(e) => handleClick(e)}>
            <a href="/admin/addfilm">Thêm phim</a>
          </button>
          <button>
            <a href="/admin">Hủy</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddFilm;
