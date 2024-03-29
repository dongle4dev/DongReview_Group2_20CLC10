import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./EditFilm.module.css";
import clsx from "clsx";
import axios from "axios";

function AddFilm() {
  const location = useLocation();
  const {
    filmID_ud,
    title_ud,
    src_ud,
    type_ud,
    year_ud,
    nation_ud,
    sumary_ud,
    trailer_ud,
    rate_ud,
    main_ud,
    news_ud,
  } = location.state; // "useLocation" to get the state

  const len_news = news_ud.length;
  console.log(news_ud.length);
  const arr_new = news_ud;
  const [input_arr, setArr] = React.useState(main_ud.map((x) => 0));
  const [charcts, setLstMain] = React.useState(main_ud);
  const [new1, setNew1] = React.useState((news_ud) => {
    if (len_news >= 1) {
      return {
        filmID: filmID_ud,
        img: arr_new[0].img,
        src: arr_new[0].src,
        title: arr_new[0].title,
      };
    } else {
      return {
        filmID: filmID_ud,
        img: "",
        src: "",
        title: "",
      };
    }
  });
  const [new2, setNew2] = React.useState((news_ud) => {
    if (len_news >= 2) {
      return {
        filmID: filmID_ud,
        img: arr_new[1].img,
        src: arr_new[1].src,
        title: arr_new[1].title,
      };
    } else {
      return {
        filmID: filmID_ud,
        img: "",
        src: "",
        title: "",
      };
    }
  });
  const [new3, setNew3] = React.useState((news_ud) => {
    if (len_news >= 3) {
      return {
        filmID: filmID_ud,
        img: arr_new[2].img,
        src: arr_new[2].src,
        title: arr_new[2].title,
      };
    } else {
      return {
        filmID: filmID_ud,
        img: "",
        src: "",
        title: "",
      };
    }
  });
  const [new4, setNew4] = React.useState((news_ud) => {
    if (len_news >= 4) {
      return {
        filmID: filmID_ud,
        img: arr_new[3].img,
        src: arr_new[3].src,
        title: arr_new[3].title,
      };
    } else {
      return {
        filmID: filmID_ud,
        img: "",
        src: "",
        title: "",
      };
    }
  });
  const [new5, setNew5] = React.useState((news_ud) => {
    if (len_news >= 5) {
      return {
        filmID: filmID_ud,
        img: arr_new[4].img,
        src: arr_new[4].src,
        title: arr_new[4].title,
      };
    } else {
      return {
        filmID: filmID_ud,
        img: "",
        src: "",
        title: "",
      };
    }
  });
  const [input_data, setInput] = React.useState({
    title: title_ud,
    type: type_ud,
    nation: nation_ud,
    pic_film: src_ud,
    trailer: trailer_ud,
    year: year_ud,
    description: sumary_ud,
    rate: rate_ud,
    main: charcts,
  });
  function handleCharct(event) {
    const { id, name, value } = event.target;
    //k dc xai event trong setter
    const index = parseInt(id, 10);

    console.log("Length of lstMain: ", charcts.length);
    if (name == "name") charcts[index].name = value;
    else if (name == "src") charcts[index].src = value;
    setLstMain((prev) => {
      return [...prev];
    });
  }

  function handleNew1(event) {
    const { name, value } = event.target;
    //k dc xai event trong setter
    setNew1((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        //name luu toan bo gtri value
        [name]: value,
      };
    });
  }
  function handleNew2(event) {
    const { name, value } = event.target;
    //k dc xai event trong setter
    setNew2((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        //name luu toan bo gtri value
        [name]: value,
      };
    });
  }
  function handleNew3(event) {
    const { name, value } = event.target;
    //k dc xai event trong setter
    setNew3((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        //name luu toan bo gtri value
        [name]: value,
      };
    });
  }
  function handleNew4(event) {
    const { name, value } = event.target;
    //k dc xai event trong setter
    setNew4((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        //name luu toan bo gtri value
        [name]: value,
      };
    });
  }
  function handleNew5(event) {
    const { name, value } = event.target;
    //k dc xai event trong setter
    setNew5((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        //name luu toan bo gtri value
        [name]: value,
      };
    });
  }

  function addCharacter(event) {
    setArr((prev) => [...prev, 0]);
    setLstMain((prev) => {
      return [
        ...prev,
        {
          name: "",
          src: "",
        },
      ];
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    //k dc xai event trong setter
    setInput((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        //name luu toan bo gtri value
        [name]: value,
      };
    });
  }
  const handleClick = async (e) => {
    e.preventDefault();
    const film = {
      title: input_data.title,
      type: input_data.type,
      nation: input_data.nation,
      img: input_data.pic_film,
      trailer: input_data.trailer,
      year: input_data.year,
      description: input_data.description,
      rate: input_data.rate,
      main: charcts,
    };
    const headers = {
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
      "Content-type": "application/json",
    };
    const res = await axios.put(
      `http://localhost:5000/film/${filmID_ud}`,
      film,
      {
        headers,
      }
    );
    console.log("Posted film", res);
    postNews(e);
  };
  const postNews = async (e) => {
    const headers = {
      // Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
    };
    if (len_news < 5) {
      if (new1.title !== "" && new1.img !== "" && new1.src !== "") {
        const res1 = await axios.post(
          `http://localhost:5000/news/store`,
          new1,
          {
            headers,
          }
        );
        console.log("Posted new1", res1);
      }
      if (new2.title !== "" && new2.img !== "" && new2.src !== "") {
        const res2 = await axios.post(
          `http://localhost:5000/news/store`,
          new2,
          {
            headers,
          }
        );
        console.log("Posted new2", res2);
      }
      if (
        new3.title !== "" &&
        new3.img !== "" &&
        new3.src !== ""
      ) {
        const res3 = await axios.post(
          `http://localhost:5000/news/store`,
          new3,
          {
            headers,
          }
        );
        console.log("Posted new3", res3);
      }
      if (new4.title !== "" && new4.img !== "" && new4.src !== "") {
        const res4 = await axios.post(
          `http://localhost:5000/news/store`,
          new4,
          {
            headers,
          }
        );
        console.log("Posted new4", res4);
      }

      if (new5.title !== "" && new5.img !== "" && new5.src !== "") {
        const res5 = await axios.post(
          `http://localhost:5000/news/store`,
          new5,
          {
            headers,
          }
        );
        console.log("Posted new5", res5);
      }
    } else {
      const res1 = await axios.put(
        `http://localhost:5000/news/${arr_new[0]._id}`,
        new1,
        { headers }
      );
      console.log("Posted new1", res1);
      if (len_news >= 2) {
        const res2 = await axios.put(
          `http://localhost:5000/news/${arr_new[1]._id}`,
          new2,
          { headers }
        );
        console.log("Posted new2", res2);
      }
      if (len_news >= 3) {
        const res3 = await axios.put(
          `http://localhost:5000/news/${arr_new[2]._id}`,
          new3,
          { headers }
        );
        console.log("Posted new3", res3);
      }
      if (len_news >= 4) {
        const res4 = await axios.put(
          `http://localhost:5000/news/${arr_new[3]._id}`,
          new4,
          { headers }
        );
        console.log("Posted new4", res4);
      }
      if (len_news >= 5) {
        const res5 = await axios.put(
          `http://localhost:5000/news/${arr_new[4]._id}`,
          new5,
          { headers }
        );
        console.log("Posted new5", res5);
      }
    }
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <div className={styles.head}>
          <h2>CẬP NHẬT PHIM</h2>
        </div>
        <div className={styles.input}>
          <p>Tên phim: </p>
          <p>*</p>
          <input
            onChange={handleChange}
            name="title"
            value={input_data.title}
            type="text"
            placeholder="Tên đăng nhập"
            required
          ></input>
        </div>
        <div className={styles.input}>
          <p>Source ảnh: </p>
          <p>*</p>
          <input
            onChange={handleChange}
            name="pic_film"
            value={input_data.pic_film}
            type="text"
            placeholder="Nhập link ảnh"
          ></input>
          <p className={styles.trailer}>Link trailer: </p>
          <p>*</p>
          <input
            onChange={handleChange}
            name="trailer"
            value={input_data.trailer}
            type="text"
            placeholder="Nhập link trailer"
          ></input>
        </div>
        <div className={styles.input}>
          <p>Thể loại: </p>
          <p>*</p>
          <input
            onChange={handleChange}
            name="type"
            value={input_data.type}
            type="text"
            placeholder="Nhập thể loại"
          ></input>
          <p className={styles.year}>Năm sản xuất:</p>
          <p>*</p>
          <input
            onChange={handleChange}
            name="year"
            value={input_data.year}
            type="text"
            placeholder="Nhập năm sản xuất"
          ></input>
        </div>
        <div className={styles.input}>
          <p>Quốc gia:</p>
          <p>*</p>
          <input
            onChange={handleChange}
            name="nation"
            value={input_data.nation}
            type="text"
            placeholder="Nhập quốc gia"
          ></input>
        </div>
        <div className={clsx(styles.input, styles.content)}>
          <p>Nội dung:</p>
          <p>*</p>
          <textarea
            onChange={handleChange}
            name="content"
            value={input_data.description}
            rows="8"
            cols="91"
            maxLength="1000"
            placeholder="Nhập nội dung"
          ></textarea>
        </div>
        {input_arr.map((item, index) => (
          <div key={index} className={styles.input}>
            <p>Diễn viên chính {index + 1}: </p>
            <p>*</p>
            <input
              id={index.toString()}
              onChange={handleCharct}
              name="src"
              value={charcts[index].img}
              type="text"
              placeholder="Link hình nhân vật"
            ></input>
            <p style={{ marginLeft: "3.2rem" }}>Tên nhân vật: </p>
            <p>*</p>
            <input
              id={index.toString()}
              onChange={handleCharct}
              name="name"
              value={charcts[index].name}
              type="text"
              placeholder="Nhập tên nhân vật"
            ></input>
            <p onClick={addCharacter} className={styles.plus}>
              <i className="fa-solid fa-plus"></i>
            </p>
          </div>
        ))}

        <div className={styles.input}>
          <p>Link tin tức 1: </p>
          <p>*</p>
          <input
            onChange={handleNew1}
            name="src"
            value={new1.src}
            type="text"
            placeholder="Nhập link tin tức 1"
          ></input>

          <p style={{ marginLeft: "9rem" }}>Tiêu đề: </p>
          <p>*</p>
          <input
            onChange={handleNew1}
            name="title"
            value={new1.title}
            type="text"
            placeholder="Nhập tiêu đề"
          ></input>

          <p style={{ margin: "2rem 0 0 3.8rem" }}>Hình: </p>
          <p>*</p>
          <input
            onChange={handleNew1}
            name="img"
            value={new1.img}
            type="text"
            placeholder="Nhập link hình"
          ></input>
        </div>
        <div className={styles.input}>
          <p>Link tin tức 2 </p>
          <p>*</p>
          <input
            onChange={handleNew2}
            name="src"
            value={new2.src}
            type="text"
            placeholder="Nhập link tin tức 2"
          ></input>

          <p style={{ marginLeft: "9rem" }}>Tiêu đề: </p>
          <p>*</p>
          <input
            onChange={handleNew2}
            name="title"
            value={new2.title}
            type="text"
            placeholder="Nhập tiêu đề"
          ></input>

          <p style={{ margin: "2rem 0 0 3.8rem" }}>Hình: </p>
          <p>*</p>
          <input
            onChange={handleNew2}
            name="img"
            value={new2.img}
            type="text"
            placeholder="Nhập link hình"
          ></input>
        </div>
        <div className={styles.input}>
          <p>Link tin tức 3: </p>
          <p>*</p>
          <input
            onChange={handleNew3}
            name="src"
            value={new3.src}
            type="text"
            placeholder="Nhập link tin tức 3"
          ></input>

          <p style={{ marginLeft: "9rem" }}>Tiêu đề: </p>
          <p>*</p>
          <input
            onChange={handleNew3}
            name="title"
            value={new3.title}
            type="text"
            placeholder="Nhập tiêu đề"
          ></input>

          <p style={{ margin: "2rem 0 0 3.8rem" }}>Hình: </p>
          <p>*</p>
          <input
            onChange={handleNew3}
            name="img"
            value={new3.img}
            type="text"
            placeholder="Nhập link hình"
          ></input>
        </div>
        <div className={styles.input}>
          <p>Link tin tức 4: </p>
          <p>*</p>
          <input
            onChange={handleNew4}
            name="src"
            value={new4.src}
            type="text"
            placeholder="Nhập link tin tức 4"
          ></input>

          <p style={{ marginLeft: "9rem" }}>Tiêu đề: </p>
          <p>*</p>
          <input
            onChange={handleNew4}
            name="title"
            value={new4.title}
            type="text"
            placeholder="Nhập tiêu đề"
          ></input>

          <p style={{ margin: "2rem 0 0 3.8rem" }}>Hình: </p>
          <p>*</p>
          <input
            onChange={handleNew4}
            name="img"
            value={new4.img}
            type="text"
            placeholder="Nhập link hình"
          ></input>
        </div>
        <div className={styles.input}>
          <p>Link tin tức 5: </p>
          <p>*</p>
          <input
            onChange={handleNew5}
            name="src"
            value={new5.src}
            type="text"
            placeholder="Nhập link tin tức 5"
          ></input>

          <p style={{ marginLeft: "9rem" }}>Tiêu đề: </p>
          <p>*</p>
          <input
            onChange={handleNew5}
            name="title"
            value={new5.title}
            type="text"
            placeholder="Nhập tiêu đề"
          ></input>

          <p style={{ margin: "2rem 0 0 3.8rem" }}>Hình: </p>
          <p>*</p>
          <input
            onChange={handleNew5}
            name="img"
            value={new5.img}
            type="text"
            placeholder="Nhập link hình"
          ></input>
        </div>

        <div className={styles.addFilm}>
          <button onClick={(e) => handleClick(e)}>
            <a href="/admin/addfilm">Cập nhật</a>
          </button>
          <button>
            <Link
              to={`/introfilm/${title_ud}/${filmID_ud}`}
              state={{
                filmID: filmID_ud,
                title: title_ud,
                src: src_ud,
                type: type_ud,
                year: year_ud,
                nation: nation_ud,
                sumary: sumary_ud,
                trailer: trailer_ud,
                rate: rate_ud,
                main: main_ud,
              }}
            >
              Hủy
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddFilm;
