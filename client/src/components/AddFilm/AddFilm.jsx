import React from "react";
import styles from "./AddFilm.module.css";
import clsx from "clsx";
import axios from "axios";

function AddFilm() {
  const [input_arr, setArr] = React.useState([0]);
  const [charcts, setLstMain] = React.useState([
    {
      name: "",
      src: "",
    },
  ]);
  const [new1, setNew1] = React.useState({
    img: "",
    src: "",
    title: "",
  });
  const [new2, setNew2] = React.useState({
    img: "",
    src: "",
    title: "",
  });
  const [new3, setNew3] = React.useState({
    img: "",
    src: "",
    title: "",
  });
  const [new4, setNew4] = React.useState({
    img: "",
    src: "",
    title: "",
  });
  const [new5, setNew5] = React.useState({
    img: "",
    src: "",
    title: "",
  });
  const [input_data, setInput] = React.useState({
    title: "",
    type: "",
    nation: "",
    pic_film: "",
    trailer: "",
    year: "",
    content: "",
    rate: 5,
    main: charcts,
  });
  function handleCharct(event) {
    const { id, name, value } = event.target;
    //k dc xai event trong setter
    const index = parseInt(id, 10);
    const preValue = { ...charcts[index] };

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
      description: input_data.content,
      rate: input_data.rate,
      main: charcts,
    };
    const headers = {
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
      'Content-type': 'application/json'
    };
    const res = await axios.post(
      "http://localhost:5000/film/store", film, {headers}
    );
    console.log("Posted film", res);
    postNews(e);
  };
  const postNews = async (e) => {
    const headers = {
      // Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
    };
    const res1 = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      new1,
      { headers }
    );
    console.log("Posted new1", res1);
    const res2 = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      new2,
      { headers }
    );
    console.log("Posted new2", res2);
    const res3 = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      new3,
      { headers }
    );
    console.log("Posted new3", res3);
    const res4 = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      new4,
      { headers }
    );
    console.log("Posted new4", res4);
    const res5 = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      new5,
      { headers }
    );
    console.log("Posted new5", res5);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <div className={styles.head}>
          <h2>THÊM PHIM</h2>
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
            value={input_data.content}
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
              value={charcts[index].src}
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
