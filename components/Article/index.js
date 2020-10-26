import React from "react";
import styles from "./Article.scss";

export default class Article extends React.Component {
  render() {
    return (
      <article className={styles["article"]}>
        <section className={styles["article__hero"]}>
          <div className={styles["container"]}>
            <div className={styles["hero__info"]}>
              <p>
                <span>Pondělí 26. 10. 2020</span>
                Film
              </p>
            </div>

            <div className={styles["hero__title"]}>
              <h1>Becky</h1>
            </div>

            <div className={styles["hero__excerpt"]}>
              <h2>
                Říct, že jsem se na tenhle film těšil by bylo trochu moc, ale
                jakmile se mi dostal do hledáčku trailer, přidal jsem si Becky
                na seznam to-watch, už jen kvůli Kevinu Jamesovi.
              </h2>
            </div>
          </div>
        </section>

        <section className={styles["article__body"]}>
          <div className={styles["container"]}>
            <p>
              Becky je další počin režisérské dvojice Johnattana Milotta a
              Caryho Murniona, kteří už mají za sebou dva rakovinotvorné filmy
              (Bushwick, Cooties). Tentokrát se jedná o klasickou vengeance
              vyvražďovačku, kde na jedné straně stojí mladá Becky a její
              tatínek Jeff Winger (a další rodinní příslušníci – jsou ale
              natolik zbyteční, že je tu nemá cenu ani vyjmenovávat), na druhé
              čtyři uprchlí vězni, kterým šéfuje Kevin James se svastikou na
              temeni. Ten se rozhodne kvůli bezcenné cetce na dům Becky
              podniknout starou dobrou home invasion, protože... protože proč
              ne, že jo.
            </p>
            <p>
              Scénář byl pravděpodobně napsán za jeden večer jako domácí úkol
              prvňáčka. Postavy si libují v násilí, které je sice velmi
              realisticky ztvárněné, divákovi už ale není vysvětleno, proč se k
              němu jednotlivé postavy uchylují. Jasný, náckové jsou špatný, ale
              c'mon!
            </p>
            <p>
              Konec filmu mi jen potvrdil to, co jsem si myslel celou dobu. A
              sice, že Becky je velice labilní dítě, které by mělo ztrávit
              zbytek svého života v ústavu – připoutáno k lůžku pod silnými
              sedativy. Něco mi ale říká, že tohle asi pointa filmu být neměla.
            </p>
            <p>
              Film přiláká diváky na Kevina Jamese a i když bylo zajímavé vidět
              ho ve vážné roli, Becky je natolik stupidní počin, že ho brát
              vážně vlastně stejně nejde.
            </p>
          </div>
          <div className={styles["back-to-top"]}>
            <a href="#">
              <svg viewBox="0 0 512.008 512.008">
                <path
                  d="m501.342 53.256c-5.891 0-10.667 4.776-10.667 10.667-.153 135.43-109.903 245.18-245.333 245.333h-208.918l109.803-109.781c4.092-4.237 3.975-10.99-.262-15.083-4.134-3.992-10.687-3.992-14.82 0l-128 128c-4.171 4.16-4.179 10.914-.019 15.085.006.006.013.013.019.019l128 128c4.093 4.237 10.845 4.354 15.083.262 4.237-4.093 4.354-10.845.262-15.083-.086-.089-.173-.176-.262-.262l-109.804-109.824h208.917c147.208-.165 266.502-119.459 266.667-266.667 0-5.89-4.775-10.666-10.666-10.666z"
                  fill="#2196f3"
                />
                <path d="m138.675 458.589c-2.831.005-5.548-1.115-7.552-3.115l-128-128c-4.164-4.165-4.164-10.917 0-15.083l128-128c4.237-4.092 10.99-3.975 15.083.262 3.992 4.134 3.992 10.687 0 14.82l-120.448 120.45 120.448 120.448c4.171 4.16 4.179 10.914.019 15.085-2.001 2.005-4.717 3.133-7.55 3.133z" />
                <path d="m245.342 330.589h-234.667c-5.891 0-10.667-4.776-10.667-10.667s4.776-10.667 10.667-10.667h234.667c135.431-.153 245.181-109.903 245.333-245.333 0-5.891 4.776-10.667 10.667-10.667s10.667 4.776 10.667 10.667c-.165 147.208-119.46 266.503-266.667 266.667z" />
              </svg>
            </a>
            {/* <svg viewBox="0 0 512 512">
              <path
                d="m263.432 3.136c-4.16-4.171-10.914-4.179-15.085-.019-.006.006-.013.013-.019.019l-192 192c-4.093 4.237-3.975 10.99.262 15.083 4.134 3.992 10.687 3.992 14.82 0l173.803-173.803v464.917c0 5.891 4.776 10.667 10.667 10.667s10.667-4.776 10.667-10.667v-464.917l173.781 173.781c4.093 4.237 10.845 4.355 15.083.262 4.237-4.093 4.354-10.845.262-15.083-.086-.089-.173-.176-.262-.262z"
                fill="#4caf50"
              />
              <path d="m447.88 213.333c-2.831.005-5.548-1.115-7.552-3.115l-184.448-184.469-184.448 184.47c-4.237 4.093-10.99 3.975-15.083-.262-3.992-4.134-3.992-10.687 0-14.82l192-192c4.165-4.164 10.917-4.164 15.083 0l192 192c4.159 4.172 4.149 10.926-.024 15.085-1.999 1.992-4.706 3.111-7.528 3.111z" />
              <path d="m255.88 512c-5.891 0-10.667-4.776-10.667-10.667v-490.666c0-5.891 4.776-10.667 10.667-10.667s10.667 4.776 10.667 10.667v490.667c-.001 5.89-4.776 10.666-10.667 10.666z" />
            </svg> */}
          </div>
        </section>
      </article>
    );
  }
}
