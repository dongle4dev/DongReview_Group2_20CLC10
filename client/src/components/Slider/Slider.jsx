import React from "react";
import { Link } from "react-router-dom";
//test

import clsx from "clsx";
import Picture from "../Picture/Picture";
import styles from "./Slider.module.css";
import pics from "./pics";

const checks = [0, 1, 2];
function Slider() {
  const [pos, setPos] = React.useState(0);

  function increase() {
    if (pos === 2) {
      setPos(0);
    } else {
      setPos(pos + 1);
    }
  }
  function decrease() {
    if (pos === 0) {
      setPos(2);
    } else {
      setPos(pos - 1);
    }
  }

  return (
    <div className={styles.slider}>
      <button onClick={decrease} className={styles.buttonl}>
        <i className="ti-angle-left"></i>
      </button>
      <button onClick={increase} className={styles.buttonr}>
        <i className="ti-angle-right"></i>
      </button>
      <div className={clsx(styles.show)}>
        {pics.map((pic, index) => {
          if (index >= 4 * pos && index <= 4 * pos + 3) {
            return (
              <Link
                to="/introfilm"
                state={{
                  key: pic._id,
                  filmID: pic._id,
                  title: pic.title,
                  src: pic.src,
                  type: pic.type,
                  year: pic.year,
                  nation: pic.nation,
                  sumary: pic.sumary,
                  trailer: pic.trailer,
                  rate: pic.rate,
                  main: pic.main,
                }}
              >
                <Picture src={pic.src} title={pic.title} key={pic._id} />
              </Link>
            );
          }
        })}
      </div>
      <div className={styles.dot}>
        {checks.map((check, index) => (
          <span className={index === pos ? styles.sdot : styles.ndot}></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
