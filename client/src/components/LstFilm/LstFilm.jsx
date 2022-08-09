import React from "react";
import { Link } from "react-router-dom";
import styles from "./LstFilm.module.css";
import axios from "axios";
import HeaderUser from "../Header/HeaderUser";
import Footer from "../Footer/Footer";

function FormComfirm(props) {
  return (
    <div className={styles.delete}>
      <div className={styles.modalContainer}>
        <div className={styles.head}>
          <h2>XÁC NHẬN XÓA PHIM</h2>
        </div>
        <div className={styles.send}>
          <button onClick={props.deleteFilm}>Đồng ý</button>
          <button onClick={() => props.close(2)}>Hủy</button>
        </div>
      </div>
    </div>
  );
}
function Film(props) {
  const url = "/api/news.json";
  const [arr_new, setNews] = React.useState([]);

  React.useEffect(() => {
    let count = 0;
    const getData = async () => {
      try {
        console.log("before getting news");
        const res = await axios.get(url);
        console.log("get news", res.data);
        setNews(
          res.data.filter((item) => {
            if (item.filmID === props.filmID && count <= 4) {
              count++;
              return true;
            }
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <tr>
      <td className={styles.stt}>{props.index + 1}</td>
      <td>
        <Link
          to={`/film/${props.filmID}`}
          state={{
            key: props.filmID,
            filmID: props.filmID,
            title: props.title,
            src: props.src,
            type: props.type,
            year: props.year,
            nation: props.nation,
            sumary: props.summary,
            trailer: props.trailer,
            rate: props.rate,
            main: props.main,
          }}
        >
          {props.title}
        </Link>
      </td>
      <td className={styles.updated}>{props.updatedOn}</td>
      <td className={styles.posted}>{props.postedOn}</td>
      <td onClick={() => props.open(props.filmID)} className={styles.del}>
        Xóa
      </td>
      <td className={styles.update}>
        <Link
          to={`/${props.filmID}/update`}
          state={{
            filmID_ud: props.filmID,
            title_ud: props.title,
            src_ud: props.src,
            type_ud: props.type,
            year_ud: props.year,
            nation_ud: props.nation,
            sumary_ud: props.summary,
            trailer_ud: props.trailer,
            rate_ud: props.rate,
            main_ud: props.main,
            news_ud: arr_new,
          }}
        >
          Sửa
        </Link>
      </td>
    </tr>
  );
}

function LstFilm() {
  const url = "http://localhost:5000/film/all";
  const [lst_film, setFilms] = React.useState([]);
  const [checkDelete, setChecD] = React.useState(false);
  const [id, setID] = React.useState();

  React.useEffect(() => {
    const getData = async () => {
      try {
        console.log("before getting films");
        const res = await axios.get(url);
        console.log("get films", res.data);
        setFilms(
          res.data.filter((item) => {
            return true;
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const deleteFilm = async () => {
    const del_url =
      "http://localhost:5000/film" + `/${id}`.toString();
    console.log(del_url);
    const res = await axios.delete(del_url);
    console.log("Deleted the film", res);
  };
  function close(num) {
    if (num === 2) setChecD(false);
  }
  function open(id_film) {
    setChecD(true);
    setID(id_film);
  }
  return (
    <div className={styles.lstfilm}>
      <HeaderUser />
      <div className={styles.tablehold}>
        <div className={styles.left}></div>
        <table>
          <tbody>
            <tr>
              <th className={styles.stt}>Số thứ tự</th>
              <th style={{ textAlign: "center" }}>Tên phim</th>
              <th className={styles.updated}>Cập nhật lần cuối</th>
              <th className={styles.posted}>Ngày đăng</th>
              <th className={styles.del}></th>
              <th className={styles.update}></th>
            </tr>
            {lst_film.map((film, index) => (
              <Film
                key={film._id}
                index={index}
                title={film.title}
                updatedOn={film.updatedAt}
                postedOn={film.createdAt}
                filmID={film._id}
                main={film.main}
                src={film.src}
                type={film.type}
                year={film.year}
                nation={film.nation}
                description={film.description}
                rate={film.rate}
                trailer={film.trailer}
                open={open}
              />
            ))}
          </tbody>
        </table>
        {checkDelete ? (
          <FormComfirm deleteFilm={deleteFilm} close={close} />
        ) : null}
        <div className={styles.right}></div>
      </div>
      <Footer />
    </div>
  );
}

export default LstFilm;
