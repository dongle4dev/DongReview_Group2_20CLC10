import React from "react";
import clsx from "clsx";
import  styles from "./Picture.module.css";

function Picture(props) {
    let title = props.title
    title = title.slice(0, 15) + '...'
    return <div className = {styles.pic} key={props.key}>
        <img src={props.src} style={{width: "230px", height: "310px"}}></img>
        {(props.title === "" ? null : <p title={props.title}>{title}</p>)}
    </div>
}

export default Picture;