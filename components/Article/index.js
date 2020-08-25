import React, { Component } from "react";
import styles from "./Article.scss";
import classnames from "classnames";

class Article extends Component {
  render() {
    return (
      <>
        <article>
          <div className={styles.date}>
            <div className={styles["date__days"]}>16/02</div>
            <div className={styles["date__year"]}>2020</div>
          </div>

          <div className={styles.content}>
            <div className={styles["content__headline"]}>
              <h1>Turborecenze: Modelář</h1>
            </div>
            <div className={styles["content__body"]}>
              <p>
                Nový film Petra Zelenky (<em>a jeho přátel</em>) je poměrně
                nečekanou změnou v jeho tvorbě. Nejedná se totiž o klasickou
                mystifikační komedii, na které jsme za ta léta od Zelenky
                zvyklí. Ústředním tématem filmu je politika USA a její dopady na
                obyčejné lidi na celém světě. Mohlo by se zdát, že podobné téma
                bude pro českého režiséra velké sousto, Zelenka ho ale zpracoval
                velmi sympaticky. I když se motivace hlavní postavy může zprvu
                zdát jako naprosto hloupá, nebo naivní, v průběhu vyprávění
                příběhu se stává zcela uvěřitelnou a pochopitelnou. Zelenka se
                filmem snaží divákům ukázat, že naše lokální problémy jsou často
                ničím, v porovnání s tím, co se řeší na celosvětové úrovni. To
                ale není nic, co by většina z nás už nevěděla. Film pak, kromě
                výše zmíněného, nemá co nabídnout. A to je velká škoda.
                Moralizovat sice Zelenka umí mnohem lépe, než třeba Hřebejk,
                filmu ale něco chybí. Naprosto úžasné jsou herecké výkony
                Kryštofa Hádka a Jirky Mádla, kteří opět dokazují, že se mohou
                řadit mezi elitu současné české herecké scény.
              </p>
              <div className={styles["content__score"]}>
                <svg viewBox="0 0 512.07 512.07">
                  <path d="m509.759 194.639c-6.152-18.858-22.945-31.043-42.781-31.043h-127.918l-40.282-122.33c-6.192-18.805-22.95-30.926-42.729-30.926-.063 0-.128 0-.191.001-19.86.078-36.611 12.349-42.674 31.262l-39.108 121.993h-128.983c-19.886 0-36.692 12.226-42.814 31.146-6.123 18.92.335 38.674 16.453 50.324l104.361 75.434-40.17 121.991c-6.217 18.88.133 38.662 16.177 50.396 8.058 5.894 17.307 8.842 26.562 8.842 9.171-.001 18.347-2.897 26.365-8.693l104.542-75.563 103.3 75.436c16.026 11.704 36.781 11.76 52.873.147s22.575-31.328 16.518-50.227l-39.218-122.329 103.474-75.563c16.02-11.698 22.396-31.441 16.243-50.298zm-33.935 26.07-120.959 88.332 45.825 142.946c3.085 9.621-3.435 15.247-5.506 16.742s-9.465 5.91-17.625-.05l-120.901-88.289-122.206 88.333c-8.201 5.927-15.576 1.461-17.642-.05-2.065-1.511-8.558-7.187-5.392-16.8l47.033-142.833-122.145-88.287c-8.206-5.932-6.272-14.34-5.484-16.775s4.146-10.382 14.271-10.382h150.87l45.79-142.835c3.087-9.629 11.668-10.41 14.225-10.421h.052c2.62 0 11.113.769 14.255 10.309l47.07 142.947h149.624c10.1 0 13.469 7.92 14.261 10.348s2.74 10.81-5.416 16.765z" />
                </svg>
                4/5
              </div>
            </div>
            <div className={styles["content__categories"]}>
              <ul>
                <li>Recenze</li>
                <li>Film</li>
              </ul>
            </div>
          </div>
        </article>

        <article>
          <div className={styles.date}>
            <div className={styles["date__days"]}>04/02</div>
            <div className={styles["date__year"]}>2020</div>
          </div>

          <div className={styles.content}>
            <div className={styles["content__headline"]}>
              <h1>Turborecenze: Bad Boys For Life</h1>
            </div>
            <div className={styles["content__body"]}>
              <p>
                Že zklamání roku přijde už s koncem ledna jsem nečekal.
                Stárnoucí Mike Lowrey a Marcus Burnett jsou zpátky. A zase budou
                demolovat město, honit darebáky v Porsche a tu a tam prohodí
                nějakou nezapomenutelnou hlášku. Kamera skvělá, akce skvělá. Ale
                to nestačí. Zatímco Bad Boys II byl dokonale namíchaný koktejl
                exploze a vtipu, trojka se až příliš rochní v patosu a faktu, že
                je hlavním hrdinům o nějakých sedmnáct let více. Příběh by byl,
                i když chodí o berlích a je nevidomý. Dvacet bodů dolů za
                archetypálního hackera, který pár údery do klávesnice
                (hollywoodská studia asi usoudila, že používání myši není pro
                plátno dostatečně fotogenické) hackne klidně i telefon
                prezidenta, to vše za použití softwaru, který si sám napsal,
                protože je to hacker, že jo. Dalších tisíc bodů dolů za
                nesmyslnou smrt kapitána „ghů-sá” Howarda, jehož vražda pro
                příběh nepředstavovala žádnou přidanou hodnotu. Konec filmu
                potom popírá kauzalitu celého vesmíru a ničí všechno, čeho jsme
                kdy jako lidstvo dosáhli. Mrknutí na diváka na úplném konci
                filmu nám připomíná, že se pomalu začíná s přípravami na čtvrtý
                díl. Pokud se k režii vrátí Michael Bay, tak prosím. Ale v
                opačném případě bych stárnoucí detektivy radši nechal odejít do
                výslužby. Jeden bod za Martina Lawrence, druhý za Willa Smithe a
                „Vložme Bad Boys for Life do pytlíčku společně s kozama mojí
                mámy.”
              </p>
              <div className={styles["content__score"]}>
                <svg viewBox="0 0 512.07 512.07">
                  <path d="m509.759 194.639c-6.152-18.858-22.945-31.043-42.781-31.043h-127.918l-40.282-122.33c-6.192-18.805-22.95-30.926-42.729-30.926-.063 0-.128 0-.191.001-19.86.078-36.611 12.349-42.674 31.262l-39.108 121.993h-128.983c-19.886 0-36.692 12.226-42.814 31.146-6.123 18.92.335 38.674 16.453 50.324l104.361 75.434-40.17 121.991c-6.217 18.88.133 38.662 16.177 50.396 8.058 5.894 17.307 8.842 26.562 8.842 9.171-.001 18.347-2.897 26.365-8.693l104.542-75.563 103.3 75.436c16.026 11.704 36.781 11.76 52.873.147s22.575-31.328 16.518-50.227l-39.218-122.329 103.474-75.563c16.02-11.698 22.396-31.441 16.243-50.298zm-33.935 26.07-120.959 88.332 45.825 142.946c3.085 9.621-3.435 15.247-5.506 16.742s-9.465 5.91-17.625-.05l-120.901-88.289-122.206 88.333c-8.201 5.927-15.576 1.461-17.642-.05-2.065-1.511-8.558-7.187-5.392-16.8l47.033-142.833-122.145-88.287c-8.206-5.932-6.272-14.34-5.484-16.775s4.146-10.382 14.271-10.382h150.87l45.79-142.835c3.087-9.629 11.668-10.41 14.225-10.421h.052c2.62 0 11.113.769 14.255 10.309l47.07 142.947h149.624c10.1 0 13.469 7.92 14.261 10.348s2.74 10.81-5.416 16.765z" />
                </svg>
                2/5
              </div>
            </div>
            <div className={styles["content__categories"]}>
              <ul>
                <li>Recenze</li>
                <li>Film</li>
              </ul>
            </div>
          </div>
        </article>

        <article>
          <div className={styles.date}>
            <div className={styles["date__days"]}>17/07</div>
            <div className={styles["date__year"]}>2020</div>
          </div>

          <div className={styles.content}>
            <div className={styles["content__headline"]}>
              <h1>Dance! Dance! Dance!</h1>
            </div>
            <div
              className={classnames(
                styles["content__body"],
                styles["content__body--large"]
              )}
            >
              <figure>
                <img src="https://live.staticflickr.com/5784/20575809495_c48427b189_k_d.jpg" />
                <figcaption>
                  <div className={styles["figcaption__primary"]}>
                    <svg viewBox="0 0 426.667 426.667">
                      <path d="m192 192h42.667v128h-42.667z" />
                      <path d="m213.333 0c-117.866 0-213.333 95.467-213.333 213.333s95.467 213.333 213.333 213.333 213.334-95.466 213.334-213.333-95.467-213.333-213.334-213.333zm0 384c-94.08 0-170.667-76.587-170.667-170.667s76.587-170.666 170.667-170.666 170.667 76.586 170.667 170.666-76.587 170.667-170.667 170.667z" />
                      <path d="m192 106.667h42.667v42.667h-42.667z" />
                    </svg>
                    Tančící dům na Rašínově nábřeží v Praze
                  </div>
                  <div className={styles["figcaption__secondary"]}>
                    Fujifilm FinePix X100T ~ f5.0 ~ 1/500s ~ ISO 1600
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className={styles["content__categories"]}>
              <ul>
                <li>Life</li>
                <li>Fotografie</li>
              </ul>
            </div>
          </div>
        </article>

        <article>
          <div className={styles.date}>
            <div className={styles["date__days"]}>03/02</div>
            <div className={styles["date__year"]}>2020</div>
          </div>

          <div className={styles.content}>
            <div className={styles["content__headline"]}>
              <h1>Turborecenze: Jojo Rabbit</h1>
            </div>
            <div className={styles["content__body"]}>
              <p>
                „Hajtlá!” „Hajtlá!” „Hajtlá!”. Kvůli hypu, který premiéru Jojo
                Rabbita provázel, jsem toho od nového filmu Taiky Waititiho moc
                nečekal. Ale musím říct, že to hype vůbec nebyl. Tenhle typ
                satiry je mým zažívacím ústrojím velmi dobře přijímán. I přes
                pár Waititiho zakopnutí jsem se bavil. Dávám čtyři Pavly hákové
                Kříže z pěti. První za Thomasin McKenzie (l’chaim!), druhý za
                Scarlett Johansson (How’s it hanging?), třetí za Sama Rockwella
                (felmi fydařený zoldát!) a čtvrtý za Stephena Merchanta
                (Hajtlá!). Ale jeden ošklifý kříž musí dolů za to, že Waititi
                vystřílel všechny vtipy už v traileru a za to, že nakopat
                Hitlera do jeho čtyř koulí prostě nebyla dostatečná satisfakce.
              </p>
              <div className={styles["content__score"]}>
                <svg viewBox="0 0 512.07 512.07">
                  <path d="m509.759 194.639c-6.152-18.858-22.945-31.043-42.781-31.043h-127.918l-40.282-122.33c-6.192-18.805-22.95-30.926-42.729-30.926-.063 0-.128 0-.191.001-19.86.078-36.611 12.349-42.674 31.262l-39.108 121.993h-128.983c-19.886 0-36.692 12.226-42.814 31.146-6.123 18.92.335 38.674 16.453 50.324l104.361 75.434-40.17 121.991c-6.217 18.88.133 38.662 16.177 50.396 8.058 5.894 17.307 8.842 26.562 8.842 9.171-.001 18.347-2.897 26.365-8.693l104.542-75.563 103.3 75.436c16.026 11.704 36.781 11.76 52.873.147s22.575-31.328 16.518-50.227l-39.218-122.329 103.474-75.563c16.02-11.698 22.396-31.441 16.243-50.298zm-33.935 26.07-120.959 88.332 45.825 142.946c3.085 9.621-3.435 15.247-5.506 16.742s-9.465 5.91-17.625-.05l-120.901-88.289-122.206 88.333c-8.201 5.927-15.576 1.461-17.642-.05-2.065-1.511-8.558-7.187-5.392-16.8l47.033-142.833-122.145-88.287c-8.206-5.932-6.272-14.34-5.484-16.775s4.146-10.382 14.271-10.382h150.87l45.79-142.835c3.087-9.629 11.668-10.41 14.225-10.421h.052c2.62 0 11.113.769 14.255 10.309l47.07 142.947h149.624c10.1 0 13.469 7.92 14.261 10.348s2.74 10.81-5.416 16.765z" />
                </svg>
                4/5
              </div>
            </div>
            <div className={styles["content__categories"]}>
              <ul>
                <li>Recenze</li>
                <li>Film</li>
              </ul>
            </div>
          </div>
        </article>
      </>
    );
  }
}
export default Article;
