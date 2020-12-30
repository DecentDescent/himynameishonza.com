import { ArticleHome, ArticleDetail } from "../Article";
import { useState, useEffect } from "react";
import Head from "../Head";
import Header from "../Header";
import Footer from "../Footer";
import Navigation from "../Navigation";
import styles from "./Layout.scss";
import Category from "../../pages/rubrika/[category]";

export function LayoutHome(props) {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    nav
      ? document.body.classList.add("body--noscroll")
      : document.body.classList.remove("body--noscroll");
  });

  return (
    <>
      <Head />
      <Header navToggle={() => setNav(!nav)} navState={nav} />
      {nav ? <Navigation closeNav={() => setNav(false)} /> : null}
      <main className={styles["archive"]}>
        {props.data.map((p, index) => (
          <ArticleHome key={index} post={p} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export function LayoutCategory(props) {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    nav
      ? document.body.classList.add("body--noscroll")
      : document.body.classList.remove("body--noscroll");
  });

  return (
    <>
      <Head
        url={"https://himynameishonza.com/rubrika/" + props.category}
        title={props.data[0].categoryName}
      />
      <Header navToggle={() => setNav(!nav)} navState={nav} />
      {nav ? <Navigation closeNav={() => setNav(false)} /> : null}
      <main className={styles["archive"]}>
        <div className={styles["archive__title"]}>
          <h1>{props.data[0].categoryName}</h1>
        </div>
        {props.data.map((p, index) => (
          <ArticleHome key={index} post={p} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export function LayoutPost(props) {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    nav
      ? document.body.classList.add("body--noscroll")
      : document.body.classList.remove("body--noscroll");
  });

  return (
    <>
      <Header navToggle={() => setNav(!nav)} navState={nav} />
      {nav ? <Navigation closeNav={() => setNav(false)} /> : null}
      <ArticleDetail post={props.data} />
    </>
  );
}
