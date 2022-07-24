// const pics = [
//   {
//     key: 1,
//     title: "TÍN HIỆU DIỆT VONG",
//     src: "./assets/picture/pic1.jpg",
//   },
//   {
//     key: 2,
//     title: "MADEA HOMECOMING",
//     src: "./assets/picture/pic2.jpg",
//   },
//   {
//     key: 3,
//     title: "CUỘC GIẢI CỨU ĐẪM MÁU",
//     src: "./assets/picture/pic3.jpg",
//   },
//   {
//     key: 4,
//     title: "THƯ GỬI CHO TỔNG THỐNG",
//     src: "./assets/picture/pic4.jpg",
//   },
//   {
//     key: 5,
//     title: "TÍN HIỆU DIỆT VONG",
//     src: "./assets/picture/pic4.jpg",
//   },
//   {
//     key: 6,
//     title: "MADEA HOMECOMING",
//     src: "./assets/picture/pic2.jpg",
//   },
//   {
//     key: 7,
//     title: "CUỘC GIẢI CỨU ĐẪM MÁU",
//     src: "./assets/picture/pic3.jpg",
//   },
//   {
//     key: 8,
//     title: "THƯ GỬI CHO TỔNG THỐNG",
//     src: "./assets/picture/pic1.jpg",
//   },
//   {
//     key: 9,
//     title: "TÍN HIỆU DIỆT VO",
//     src: "./assets/picture/pic1.jpg",
//   },
//   {
//     key: 10,
//     title: "MADEA HOMECOMING",
//     src: "./assets/picture/pic4.jpg",
//   },
//   {
//     key: 11,
//     title: "CUỘC GIẢI CỨU ĐẪM MÁU",
//     src: "./assets/picture/pic2.jpg",
//   },
//   {
//     key: 12,
//     title: "THƯ GỬI CHO TỔNG THỐNG",
//     src: "./assets/picture/pic3.jpg",
//   },
// ];

import axios from "axios";

let pics = [];

//Create fake API
const resultAPI = axios.get(
  "https://mocki.io/v1/f3cdca9a-37bd-459a-8353-c9ab45eae488"
);

//console.log(resultAPI)
resultAPI.then((res) => {
  for (var i = 0; i < res.data.sliders.length; i++)
    pics.push(res.data.sliders[i]);
});

export default pics;
