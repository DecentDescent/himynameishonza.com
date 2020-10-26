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
        </section>
      </article>
    );
  }
}
