import React from "react";
import axios from "axios";
import { useLocation, Navigate } from "react-router-dom";
import styles from "./ReviewPage.module.css";
import ProfileHeader from "../Header/ProfileHeader";
import LogIn from "../LogIn/LogIn";
import Footer from "../Footer/Footer";
import Page404 from "../ErrorPages/Page404";
import HeaderTitle from "../Header/HeaderTitle";

var pages = [];
var num_page = 1;
for (var i = 0; i < num_page; i++) pages.push(i + 1);

function Comment(props) {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/user/all`);
        const usr = res.data.find((item) => item._id === props.userID);
        setUser(usr);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className={styles.cmt}>
      <div className={styles.ava}>
        <img src={user.avt} />
        <p>{user.fullName}</p>
      </div>
      <p>{props.content}</p>
    </div>
  );
}
function FormReport(props) {
  const [inputReport, setReport] = React.useState({
    reviewid_rp: props.reviewid_rp,
    content: "",
  });
  function inputRp(event) {
    const { name, value } = event.target;
    //k dc xai event trong setter
    setReport((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        //name luu toan bo gtri value
        [name]: value,
      };
    });
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <button className={styles.btn} onClick={() => props.close(1)}>
          <i className="ti-close"></i>
        </button>
        <div className={styles.head}>
          <h2>BÁO CÁO</h2>
        </div>
        <p style={{ marginTop: "4rem" }}>Cho mình biết lí do à gì đi^^</p>
        <textarea
          onChange={inputRp}
          name="content"
          value={inputReport.content}
          rows="6"
          maxLength="1000"
          placeholder="Ghi lí do của bạn tại đây"
        ></textarea>
        <div className={styles.send}>
          <button onClick={() => props.sendReport(inputReport)}>
            <a href="#">Gửi</a>
          </button>
        </div>
      </div>
    </div>
  );
}
function FormComfirm(props) {
  return (
    <div className={styles.delete}>
      <div className={styles.modalContainer}>
        <div className={styles.head}>
          <h2>XÁC NHẬN XÓA BÀI VIẾT</h2>
        </div>
        <div className={styles.send}>
          <button onClick={props.deleteReview}>Đồng ý</button>
          <button onClick={() => props.close(2)}>Hủy</button>
        </div>
      </div>
    </div>
  );
}

function ReviewPage() {
  const location = useLocation();
  const {
    reviewID,
    filmID,
    userID,
    title,
    content,
    like,
    share,
    cmt,
    createdAt,
    title_film,
    member,
  } = location.state;
  console.log("CreatedAt: ", createdAt);
  const [u, setUserLogin] = React.useState(member);
  const [user_rv, setUserRv] = React.useState({ fullName: "", avt: "" });
  const [num_cmt, setNumCmt] = React.useState(0);
  const [cmts, setCmts] = React.useState([]);
  const [login, setLogin] = React.useState(false);
  const [num_like, setLike] = React.useState(like);
  const [check, setCheck] = React.useState(false);
  const [pos, setPos] = React.useState(0);
  const [checkOption, setCheckOp] = React.useState(false);
  const [checkReport, setChecF] = React.useState(false);
  const [checkDelete, setChecD] = React.useState(false);
  const [pressDelete, setPress] = React.useState(false);
  const [input_cmt, setInput] = React.useState("");
  const [checkFind, setFind] = React.useState(false);
  const [titleFind, setTitle] = React.useState("");
  const [lst_filmFind, setFilmFind] = React.useState([]);
  const [checkEmpty, setCheckEmpty] = React.useState(false);
  const [checkAdmin, setCheckAdmin] = React.useState(false);

  function getDataUser(u) {
    setUserLogin(u);
  }
  function popDown() {
    setLogin(false);
  }

  function popUp() {
    setLogin(true);
  }

  function changeTitle(title) {
    setTitle(title);
  }
  function handleFind(check) {
    setFind(check);
  }
  function getFilmFind(lstFilm) {
    setFilmFind(lstFilm);
  }
  React.useEffect(() => {
    console.log("reviewID: ", reviewID);
    const getData = async () => {
      try {
        const res1 = await axios.get(`http://localhost:5000/user/all`);
        const res2 = await axios.get(
          `http://localhost:5000/cmt/${reviewID}/allcmt`
        );
        const res3 = await axios.get("http://localhost:5000/user/all");
        console.log("lst_user_header: ", res3.data);
        res3.data.filter((u) => {
          if (u._id === member.id && u.isAdmin) {
            setCheckAdmin(true);
          }
        });
        // const res3 = await axios.get(
        //    `http://localhost:5000/review/${reviewID}/getreview`
        //  );
        // setNumCmt(res3.data.cmt);
        setUserRv(res1.data.find((item) => item._id === userID));
        console.log(res2.data);
        const lst_cmt = res2.data.listofcmt.filter((cmt) => {
          if (cmt.reviewID === reviewID) return true;
        });
        num_page = Math.ceil(lst_cmt.length / 8);

        console.log("lst_cmt: ", lst_cmt);
        setCmts(lst_cmt);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
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
  function close(num) {
    if (num === 1) setChecF(false);
    else if (num === 2) setChecD(false);
  }
  function open(event) {
    const { name, value } = event.target;
    console.log("value", value);
    if (value === 1) setChecF(true);
    else if (value === 2) setChecD(true);
  }
  const clickLike = async (event) => {
    if (check === false) {
      setCheck(true);
      setLike(num_like + 1);
      const res = await axios.get(
        `http://localhost:5000/review/${reviewID}/updatelike`
      );
      console.log(res.data);
    } else {
      setCheck(false);
      setLike(num_like - 1);
      const res = await axios.get(
        `http://localhost:5000/review/${reviewID}/updatelike`
      );
    }
    event.preventDefault();
  };
  function handleChange(event) {
    const { value } = event.target;

    //k dc xai event trong setter
    setInput((preValue) => {
      console.log(preValue);
      return value;
    });
  }
  const postCmt = async (e) => {
    if (input_cmt === "" || input_cmt.length >= 1000) {
      setCheckEmpty(true);
    } else {
      const data = {
        reviewID: reviewID,
        userID: userID,
        filmID: filmID,
        like: 3,
        content: input_cmt,
      };
      const headers = {
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
        "Content-type": "application/json",
      };
      const res = await axios.post("http://localhost:5000/cmt/store", data, {
        headers,
      });
      console.log("Posted a comment", res);
      setInput("");
    }
  };
  const sendReport = async (inputReport) => {
    const headers = {
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
      "Content-type": "application/json",
    };
    const res = await axios.post(
      "http://localhost:5000/report/store",
      inputReport,
      { headers }
    );
    console.log("Sent a report", res);
  };
  const deleteReview = async () => {
    const del_url = `http://localhost:5000/review/${reviewID}`;
    console.log(del_url);
    const res = await axios.delete(del_url);
    console.log("Deleted the review", res);
    setPress(true);
  };
  return checkFind ? (
    <Navigate
      to={`/film/found-films/${titleFind.replace(/ /g, "-")}`}
      state={{
        lst_film: lst_filmFind,
        title: titleFind,
        user: u,
      }}
    ></Navigate>
  ) : pressDelete ? (
    <Page404 />
  ) : (
    <div className={styles.reviewPage}>
      {u.fullName !== "" ? (
        <ProfileHeader
          setCheckFind={handleFind}
          setTitle={changeTitle}
          setFilmFind={getFilmFind}
          user={u}
        />
      ) : (
        <HeaderTitle
          setCheckFind={handleFind}
          setTitle={changeTitle}
          setFilmFind={getFilmFind}
          log={popUp}
        />
      )}

      <div className={styles.intro}>
        <h1 style={{ textTransform: "capitalize" }}>{title}</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.review}>
          <div className={styles.ava}>
            <img src={user_rv.avt} />
            <p>{user_rv.fullName}</p>
          </div>

          <div className={styles.sumr}>
            <h1>{title}</h1>
            <h2>Ngày đăng: {createdAt}</h2>
            <p className={styles.sum_content}>
              {content}
              <ul onClick={clickOption} className={styles.option}>
                <li>
                  <i className="fa-solid fa-ellipsis"></i>
                  {checkOption ? (
                    checkAdmin ? (
                      <ul className={styles.choices}>
                        <li value={1} onClick={open}>
                          Báo cáo
                        </li>
                        <li value={2} onClick={open}>
                          Xóa bài viết
                        </li>
                      </ul>
                    ) : (
                      <ul className={styles.choices}>
                        {member.id !== userID ? (
                          <li value={1} onClick={open}>
                            Báo cáo
                          </li>
                        ) : null}
                        {member.id === userID ? (
                          <li value={2} onClick={open}>
                            Xóa bài viết
                          </li>
                        ) : null}
                      </ul>
                    )
                  ) : null}
                </li>
              </ul>
              {checkReport ? (
                <FormReport
                  reviewid_rp={reviewID}
                  sendReport={sendReport}
                  close={close}
                />
              ) : null}
              {checkDelete ? (
                <FormComfirm deleteReview={deleteReview} close={close} />
              ) : null}
            </p>
            <div className={styles.icon}>
              <p>{num_like}</p>
              {check ? (
                <i onClick={clickLike} className="fa-solid fa-heart"></i>
              ) : (
                <i onClick={clickLike} className="ti-heart"></i>
              )}

              <p>{cmts.length}</p>
              <i className="ti-comment"></i>
            </div>
          </div>
        </div>
        <div className={styles.lstCmt}>
          <h3>BÌNH LUẬN</h3>
          <div className={styles.writeCmt}>
            <div className={styles.ava}>
              <img src={u.avt} />
              <p>{u.fullName}</p>
            </div>
            {checkEmpty && input_cmt === "" ? (
              <h4>Hãy nhập bình luận của bạn</h4>
            ) : null}
            {checkEmpty && input_cmt.length === 1000 ? (
              <h4>Tối đa 1000 kí tự</h4>
            ) : null}
            <textarea
              onChange={handleChange}
              onKeyDown={(event) => {
                if (event.shiftKey === true) {
                  if (event.key === "Enter")
                    event.target.value = event.target.value + "\n";
                } else if (event.key === "Enter") {
                  postCmt(event);
                }
              }}
              rows="6"
              maxLength="1000"
              placeholder="Viết bình luận của bạn"
              value={input_cmt}
            ></textarea>
            <button onClick={postCmt} id="post_cmt">
              Đăng
            </button>
          </div>
          {cmts.map((item, index) => {
            if (index <= 8 * pos + 7) {
              return (
                <Comment
                  userID={item.userID}
                  key={item._id}
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

      <LogIn getData={getDataUser} trigger={login} unlog={popDown} />
      <Footer />
    </div>
  );
}

export default ReviewPage;
