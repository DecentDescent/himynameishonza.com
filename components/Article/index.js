import React, { useState } from "react";
import Head from "../Head";
import BlockContent from "@sanity/block-content-to-react";
import styles from "./Article.scss";
import Image from "next/image";
import Link from "next/link";
import Icon from "../Icons";
import { readingTime, dateFormater, monthFormater } from "../utils";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";
import classnames from "classnames";

const config = {
  projectId: "bm7iwd96",
  dataset: "production",
  useCdn: true,
};

const client = sanityClient(config);
const builder = imageUrlBuilder(client);

const urlFor = (source) => {
  return builder.image(source);
};

const sharingLink = (vendor, slug) => {
  let linkHref;
  let webURL = "https://himynameishonza.com/" + slug;

  switch (vendor) {
    case "link":
      return linkHref;

    case "facebook":
      linkHref = "https://www.facebook.com/sharer/sharer.php?u=" + webURL;
      return linkHref;

    case "twitter":
      linkHref = "https://twitter.com/intent/tweet?url=" + webURL;
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
      <Head
        title={post.metaTitle}
        description={post.metaDescription}
        image={urlFor(post.poster).width().url()}
        url={"https://himynameishonza.com/" + post.slug.current}
      />
      <article className={styles["article"]}>
        <div className={styles["article__hero"]}>
          {post.poster.asset ? (
            <figure>
              <Image
                alt="Image"
                src={urlFor(post.poster).width().url()}
                layout="fill"
                objectFit="cover"
                quality={process.env.IMAGE_QUALITY}
                loading="lazy"
                nopin="nopin"
              />
              {post.poster.attribution ? (
                <figcaption>{post.poster.attribution}</figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>

        <div className={styles["article__content"]}>
          <div className={styles["article__title"]}>
            <h1>{post.title}</h1>
          </div>

          <div className={styles["article__info"]}>
            {post.categoryName !== "Blog"
              ? dateFormater(post.publishedAt) +
                ". " +
                monthFormater(post.publishedAt)
              : "Bezčasí"}
            <span>|</span>
            {post.categoryName}
            <span>|</span>
            {readingTime(post.body)}
          </div>

          <div className={styles["article__main"]}>
            <div className={styles["main__hero"]}>
              <figure>
                <Image
                  alt="Image"
                  src={urlFor(post.poster).width().url()}
                  layout="fill"
                  objectFit="cover"
                  quality={process.env.IMAGE_QUALITY}
                  loading="lazy"
                  nopin="nopin"
                />
                {post.poster.attribution ? (
                  <figcaption>{post.poster.attribution}</figcaption>
                ) : null}
              </figure>
            </div>
            <BlockContent blocks={post.body} serializers={serializers} />

            {post.rating ? (
              <div className={styles["article__rating"]}>
                <Icon icon={post.rating > 0 ? "score-on" : "score-off"} />
                <Icon icon={post.rating > 1 ? "score-on" : "score-off"} />
                <Icon icon={post.rating > 2 ? "score-on" : "score-off"} />
                <Icon icon={post.rating > 3 ? "score-on" : "score-off"} />
                <Icon icon={post.rating > 4 ? "score-on" : "score-off"} />
              </div>
            ) : null}

            <div className={styles["article__footer"]}>
              {post.facebookComments ? (
                <div className={styles["footer__comments"]}>
                  <span>
                    Diskuzi k příspěvku{" "}
                    <a href={post.facebookComments} target="_blank">
                      naleznete zde
                    </a>
                  </span>
                </div>
              ) : (
                <div
                  className={classnames(
                    styles["footer__comments"],
                    styles["footer__comments--empty"]
                  )}
                />
              )}
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export const ArticleHome = ({ post }) => (
  <Link href={"/" + post.slug.current}>
    <article className={styles["home-article"]}>
      <div className={styles["home-article__content"]}>
        <h1>{post.title}</h1>
        <div className={styles["home-article__info"]}>
          {post.categoryName !== "Blog"
            ? dateFormater(post.publishedAt) +
              ". " +
              monthFormater(post.publishedAt)
            : "Bezčasí"}
          <span>|</span>
          {post.categoryName}
          <span>|</span>
          {readingTime(post.body)}
        </div>
        <BlockContent blocks={post.excerpt} serializers={serializers} />
      </div>
      <div className={styles["home-article__hero"]}>
        <figure>
          <Image
            alt="Image"
            src={urlFor(post.poster).width().url()}
            layout="fill"
            objectFit="cover"
            quality={process.env.IMAGE_QUALITY}
            loading="lazy"
            nopin="nopin"
          />
        </figure>
      </div>
    </article>
  </Link>
);
