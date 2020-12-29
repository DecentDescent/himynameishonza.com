import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.scss";
import quotes from "../../public/static/quotes/quotes.js";

const isServer = () => typeof window === "undefined";

const Navigation = (props) => {
  let [navContent, setNavContent] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  return (
    <>
      {!isServer() && (
        <section className={styles.navigation}>
          <article
            className={styles.navigation__quote}
            style={{
              background:
                "linear-gradient(0deg, rgba(35, 31, 31,0.9) 0%, rgba(35, 31, 31,0.9) 100%), url(" +
                navContent.image +
                ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <blockquote>
              {navContent.content}
              <cite>— {navContent.author}</cite>
            </blockquote>
          </article>
          <div className={styles.navigation__container}>
            <nav className={styles.navigation__menu} role="navigation">
              <ul>
                <li onClick={props.closeNav}>
                  <Link href="/rubrika/film">
                    <a>Film</a>
                  </Link>
                </li>
                <li onClick={props.closeNav}>
                  <Link href="/rubrika/knihy">
                    <a>Knihy</a>
                  </Link>
                </li>
                <li onClick={props.closeNav}>
                  <Link href="/rubrika/povidky">
                    <a>Povídky</a>
                  </Link>
                </li>
                <li onClick={props.closeNav}>
                  <Link href="/rubrika/blog">
                    <a>Blog</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      )}
    </>
  );
};

export default Navigation;
