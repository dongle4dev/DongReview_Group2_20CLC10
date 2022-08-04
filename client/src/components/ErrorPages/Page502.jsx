import React from "react";
import styles from "./404.module.css";
import clsx from "clsx";

function Page502() {
  return (
    <body className={styles.error}>
      <section className={styles.notFound}>
        <div className={styles.img}>
          <img
            src="https://assets.codepen.io/5647096/backToTheHomepage.png"
            alt="Back to the Homepage"
          />
          <img
            src="https://assets.codepen.io/5647096/Delorean.png"
            alt="El Delorean, El Doc y Marti McFly"
          />
        </div>
        <div className={styles.text}>
          <h1>502</h1>
          <h2>INTERNAL ERROR</h2>
          <h3>BACK TO HOME?</h3>
          <a href="/" className={styles.yes}>
            YES
          </a>
          <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</a>
        </div>
      </section>
    </body>
  );
}

export default Page502;
