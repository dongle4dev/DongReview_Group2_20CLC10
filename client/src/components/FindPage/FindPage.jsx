import React from "react";
import styles from "./FindPage.module.css";
import clsx from "clsx";
import Picture from "../Picture/Picture";
import Footer from "../Footer/Footer";
import pics from "../Slider/pics";
import Header from "../Header/Header";


function FindPage(props){
    return(
        <div>
            <Header></Header>
            <div className={styles.container}>
                <h1>Kết quả tìm kiểm của từ khóa "{props.content}"</h1>
                <div className={styles.grid}>
                    <Picture src={pics[0].src} title={pics[0].title} key={pics[0].key}/>
                    <Picture src={pics[1].src} title={pics[1].title} key={pics[1].key}/>
                    <Picture src={pics[0].src} title={pics[0].title} key={pics[0].key}/>
                    <Picture src={pics[1].src} title={pics[1].title} key={pics[1].key}/>
                    <Picture src={pics[0].src} title={pics[0].title} key={pics[0].key}/>
                    <Picture src={pics[1].src} title={pics[1].title} key={pics[1].key}/>
                </div>
            </div>
            <Footer></Footer>
        </div>
        )
}

export default FindPage