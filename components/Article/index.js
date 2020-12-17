import React, { useState } from "react";
import BlockContent from "@sanity/block-content-to-react";
import styles from "./Article.scss";
import Image from "next/image";
import Link from "next/link";
import Icon from "../Icons";
import classnames from "classnames";
import { readingTime, dateFormater, monthFormater } from "../utils";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";

const config = {
  projectId: "bm7iwd96",
  dataset: "production",
  token:
    "skXS4ZQo2H9Vkxu2iCYGxoOn3aEaO76L9Low56GBPXd4nyvHR3fwVnvxFowBpbw5WPmvqsV9yoZaXi1g4VOLQ79UzwZsLXKU2QqXxFW8wcVZa3LTmO6mhkmBI8L017T3fs5erHrQmUH5LssnW0vglfTKt8GiDeEtj9Bje6GOLYwZFHkj1AHp",
};

const client = sanityClient(config);
const builder = imageUrlBuilder(client);

const urlFor = (source) => {
  return builder.image(source);
};

const sharingLink = (vendor, slug) => {
  let linkHref;
  let webURL = "https://www.himynameishonza.com/";
  switch (vendor) {
    case "link":
      linkHref = webURL + slug;
      return linkHref;

    case "facebook":
      linkHref =
        "https://www.facebook.com/sharer/sharer.php?u=" + webURL + slug;
      return linkHref;

    case "twitter":
      linkHref = "https://twitter.com/intent/tweet?url=" + webURL + slug;
      return linkHref;

    case "print":
      false;

    default:
      false;
  }
};

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

export function ArticleDetail({ post }) {
  const [printModalState, setPrintModalState] = useState(false);
  return (
    <>
      <article className={styles["article"]}>
        <div className={styles["article__header"]}>
          <div className={styles["header__icon"]}>
            <svg viewBox="0 0 64 47">
              <path
                d="m600.75945 3.8345938c-.004187 0-.008374 0-.012406 0h-4.205466v-1.44411847c.02264-.57157836-.345804-1.08526748-.893197-1.24492972-2.919635-.7678104-5.926109-1.15280492-8.944369-1.14544197-4.962202 0-11.723202 1.12054338-16.72262 6.22475523-4.962202-5.15400904-11.772824-6.22475523-16.722621-6.22475523-3.018259-.00736295-6.024733.37763157-8.944369 1.14544197-.547393.15966224-.915836.67335136-.893196 1.24492972v1.43166918h-4.180656c-.685094 0-1.24055.55741728-1.24055 1.24492972v39.76305527c0 .6875124.555456 1.2449297 1.24055 1.2449297.213065-.0006225.422408-.0563331.60787-.1618409.124055-.0622465 12.52956-6.872012 29.847645-2.4898594h.186083.111649c.098934.0119824.198798.0119824.297732 0 17.367707-4.4195005 29.773212 2.3778157 29.847645 2.4898594.383796.2223756.856755.2223756 1.240551 0 .381469-.220975.617639-.6285339.620275-1.0706395v-39.76305528c0-.68751243-.555301-1.24492972-1.24055-1.24492972zm-60.278349 39.0160974v-36.52623796h2.964916v31.22283736c-.007754.6875124.541345 1.2511544 1.226439 1.2589352.06699.0007781.133979-.0038904.200194-.0140055 2.566389-.3932421 5.157433-.601301 7.75344-.6224648 3.596046-.0625578 7.17705.4802316 10.594302 1.6059593-7.717-.9364984-15.544563.1220031-22.739291 3.0749764zm12.144989-7.1583459c-2.256406.0051354-4.510176.1506365-6.748594.4357254v-32.75410089c2.415351-.53998827 4.881876-.81558458 7.356464-.82165362 4.639659 0 11.040899 1.07063956 15.48207 6.10015563l.037217 31.01119928c-2.580345-1.6931044-7.61698-3.9713258-16.127157-3.9713258zm18.608258-27.03987348c4.441171-4.97971888 10.842411-6.10015563 15.48207-6.10015563 2.474433.00731397 4.940957.28275467 7.356464.82165362v32.75410089c-2.225857-.2877344-4.467222-.4374372-6.711378-.4481747-8.460554 0-13.509595 2.2782214-16.127156 3.9713258zm28.272146 34.19821938c-7.21008-2.9610653-15.055631-4.0197224-22.788913-3.0749764 3.433378-1.1297737 7.03144-1.6727187 10.643923-1.6059593 2.612289.0146279 5.220082.2184851 7.803063.6100155.67734.1031736 1.309866-.3642975 1.412677-1.0440292.010079-.0664481.014731-.1336743.013956-.2009005v-31.21038806h2.964916z"
                fill="#c9c9cf"
                transform="translate(-538)"
              />
            </svg>
          </div>
          <div className={styles["header__title"]}>
            <h1>{post.title}</h1>
          </div>
          <div className={styles["header__info"]}>
            Povídky<span>|</span>
            {readingTime(post.body)}
          </div>
          <div className={styles["header__hero"]}>
            {console.log(post.poster)}
            {post.poster.asset ? (
              <figure>
                <Image
                  alt="Image"
                  src={urlFor(post.poster).width().url()}
                  layout="fill"
                  objectFit="cover"
                  quality={process.env.IMAGE_QUALITY}
                  loading="lazy"
                />
                {post.poster.caption ? (
                  <figcaption>{post.poster.caption}</figcaption>
                ) : null}
              </figure>
            ) : null}
          </div>
        </div>

        <div className={styles["article__main"]}>
          <div className={styles["main__sideinfo"]}>
            <div
              className={classnames(
                styles["sideinfo__date"],
                styles["sideinfo__date--desktop"]
              )}
            >
              {dateFormater(post.publishedAt)}
              <span>{monthFormater(post.publishedAt, "short")}</span>
            </div>
            <div
              className={classnames(
                styles["sideinfo__date"],
                styles["sideinfo__date--mobile"]
              )}
            >
              {dateFormater(post.publishedAt)}.{" "}
              {monthFormater(post.publishedAt)}
            </div>
            <div className={styles["sideinfo__share"]}>
              <ul>
                <li>
                  <a
                    href={sharingLink("facebook", post.slug.current)}
                    target="_blank"
                  >
                    <Icon icon="facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href={sharingLink("twitter", post.slug.current)}
                    target="_blank"
                  >
                    <Icon icon="twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href={sharingLink("link", post.slug.current)}
                    target="_blank"
                  >
                    <Icon icon="link" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <BlockContent blocks={post.body} serializers={serializers} />
        </div>
        <div className={styles["article__footer"]}>
          <div className={styles["footer__comments"]}>
            <span>
              Diskuzi k příspěvku <a href="#">naleznete zde</a>
            </span>
          </div>
          <div className={styles["footer__share"]}>
            <ul>
              <li>
                <a
                  href={sharingLink("facebook", post.slug.current)}
                  target="_blank"
                >
                  <Icon icon="facebook" />
                </a>
              </li>
              <li>
                <a
                  href={sharingLink("twitter", post.slug.current)}
                  target="_blank"
                >
                  <Icon icon="twitter" />
                </a>
              </li>
              <li>
                <a
                  href={sharingLink("link", post.slug.current)}
                  target="_blank"
                >
                  <Icon icon="link" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon icon="reader" />
                </a>
              </li>
              <li>
                <a href={sharingLink("print")} target="_blank">
                  <Icon icon="print" />
                </a>
              </li>
            </ul>
            <div className={styles["share__tooltip"]}>Odkaz zkopírován</div>
          </div>
        </div>
      </article>
      {printModalState ? <h1>Print</h1> : null}
    </>
  );
}

export function Article404() {
  const [printModalState, setPrintModalState] = useState(false);
  return (
    <>
      <article className={styles["article"]}>
        <div className={styles["article__header"]}>
          <div className={styles["header__icon"]}>
            <svg viewBox="0 0 512 512">
              <path
                d="m84.446 317.403h-71.364c-7.433 0-13.082-5.055-13.082-13.679 0-2.378 39.246-146.295 39.246-146.295 3.568-7.434 10.11-10.11 16.354-10.11 6.839 0 23.99 4.614 23.99 13.536 0 1.487.073 4.603-.82 6.386l-29.115 114.182h34.791v-31.221c0-8.622 9.812-12.191 19.327-12.191 9.814 0 19.328 3.568 19.328 12.191v31.221h13.975c8.029 0 12.192 8.921 12.192 18.138 0 8.92-5.949 17.842-12.192 17.842h-13.975v35.087c0 8.029-9.515 12.191-19.328 12.191-9.515 0-19.327-4.163-19.327-12.191z"
                fill="#c9c9cf"
              />
              <path
                d="m390.515 199.571c6.446-23.746 11.462-42.142 11.462-42.142 3.568-7.434 10.11-10.11 16.354-10.11 6.839 0 23.99 4.614 23.99 13.536 0 1.487.073 4.603-.82 6.386l-29.114 114.182h34.791v-31.221c0-8.622 9.812-12.191 19.327-12.191 9.814 0 19.328 3.568 19.328 12.191v31.221h13.975c8.029 0 12.192 8.921 12.192 18.138 0 8.92-5.949 17.842-12.192 17.842h-13.975v35.087c0 8.029-9.515 12.191-19.328 12.191-9.515 0-19.327-4.163-19.327-12.191v-35.087h-71.365c-7.433 0-13.082-5.055-13.082-13.679 0-1.191 9.84-37.869 19.666-74.197z"
                fill="#c9c9cf"
              />
              <circle cx="256.009" cy="263.073" fill="#c9c9cf" r="88.481" />
              <path
                d="m267.088 263.076 30.777-30.777c3.06-3.06 3.06-8.023 0-11.082-3.062-3.06-8.023-3.06-11.083 0l-30.777 30.777-30.777-30.777c-3.062-3.06-8.023-3.06-11.083 0s-3.06 8.023 0 11.082l30.777 30.777-30.777 30.777c-3.06 3.06-3.06 8.023 0 11.082 1.531 1.53 3.537 2.296 5.542 2.296s4.011-.765 5.542-2.296l30.777-30.777 30.777 30.777c1.531 1.53 3.537 2.296 5.542 2.296s4.011-.765 5.542-2.296c3.06-3.06 3.06-8.023 0-11.082z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <div className={styles["header__title"]}>
            <h1>Článek nebyl nalezen</h1>
          </div>
          <div className={styles["header__info"]}>
            Nenašlo se, co se hledalo. Ale tady máte básničku od Jiřího
            Walkera...
          </div>
        </div>

        <div
          className={classnames(
            styles["article__main"],
            styles["article__main--404"]
          )}
        >
          <p>
            Přišel jsem na svět,
            <br />
            abych si postavil život
            <br />
            dle obrazu srdce svého.
            <br />
          </p>
          <p>
            Chlapecké srdce je písnička na začátku,
            <br />
            plán pro zámek, který bys lidem jak milé dal k svátku,
            <br />
            ale mužovo srdce jsou ruce a mozoly,
            <br />
            které se krví svou do cihel probolí,
            <br />
            aby tu stála alespoň skutečná hospoda u silnice
            <br />
            pro ušlé poutníky a pro poutnice.
          </p>

          <p>
            Dnes je má těžká hodina.
            <br />
            Chlapecké srdce mi zemřelo a sám v rakvi je vynáším,
            <br />
            a zemřelým trpě, trpím i tím,
            <br />
            které mi v prsou se roditi počíná.
            <br />
          </p>

          <p>
            Dnes je má těžká hodina;
            <br />
            jedno srdce jsem pohřbil a druhé ještě nemám,
            <br />
            zesláblý úzkostí, zesláblý samotou
            <br />
            marně se bráním studeným stěnám
            <br />
            pokoje svého
            <br />
            uštěpačného.
          </p>

          <p>
            Milenčin dopise, lampo, kniho kamarádova,
            <br />
            věci zrozené z lásky, světla a víry,
            <br />
            dnes při mně stůjte a třikrát mi věrnější buďte,
            <br />
            když zůstal jsem na světě sirý,
            <br />
            a modlete se,
            <br />
            aby mi narostlo srdce statečné a nesmlouvavé,
            <br />
            a věřte dnes za mě, že tomu tak bude,
            <br />
            a věřte dnes za mě, že postavím
            <br />
            dle obrazu jeho
            <br />
            život člověka spravedlivého.
          </p>

          <p>
            Já mužné srdce ještě nemám, sám v těžké své hodině; a proto nevěřím.
          </p>
        </div>
      </article>
    </>
  );
}

export const ArticleHome = ({ post }) => <Link href={post.slug.current}></Link>;
