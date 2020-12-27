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
              {post.poster.caption ? (
                <figcaption>{post.poster.caption}</figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>

        <div className={styles["article__content"]}>
          <div className={styles["article__title"]}>
            <h1>{post.title}</h1>
          </div>

          <div className={styles["article__info"]}>
            {dateFormater(post.publishedAt)}. {monthFormater(post.publishedAt)}
            <span>|</span>
            {/* <a href={"/rubrika/" + post.category[0].toLowerCase()}> */}
            {post.category[0]}
            {/* </a> */}
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
                {post.poster.caption ? (
                  <figcaption>{post.poster.caption}</figcaption>
                ) : null}
              </figure>
            </div>
            <BlockContent blocks={post.body} serializers={serializers} />

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
                  {/* <li>
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
                  </li> */}
                </ul>
                {/* <div className={styles["share__tooltip"]}>Odkaz zkopírován</div> */}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export function Article404() {
  const [printModalState, setPrintModalState] = useState(false);
  return (
    <>
      <h1>Error</h1>
    </>
  );
}

export const ArticleHome = ({ post }) => <Link href={post.slug.current}></Link>;
