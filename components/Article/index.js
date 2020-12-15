import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";
import styles from "./Article.scss";
import Image from 'next/image'
import Link from 'next/link'
import Fade from 'react-reveal/Fade';
import classnames from 'classnames';

const config = {
  projectId: "bm7iwd96",
  dataset: "production",
  token:
    "skXS4ZQo2H9Vkxu2iCYGxoOn3aEaO76L9Low56GBPXd4nyvHR3fwVnvxFowBpbw5WPmvqsV9yoZaXi1g4VOLQ79UzwZsLXKU2QqXxFW8wcVZa3LTmO6mhkmBI8L017T3fs5erHrQmUH5LssnW0vglfTKt8GiDeEtj9Bje6GOLYwZFHkj1AHp",
};

const client = sanityClient(config);
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const dateFormater = (date) => {
  const month = new Array(
    "Ledna",
    "Února",
    "Března",
    "Dubna",
    "Května",
    "Června",
    "Července",
    "Srpna",
    "Září",
    "Října",
    "Listopadu",
    "Prosince"
  );

  const d = new Date(date);

  return d.getDate() + ". " + month[d.getMonth()] + " " + d.getFullYear();
};

export const ArticleDetail = ({ post }) => (
  <article className={classnames(styles["article"], styles['article--detail'])}>
  <div className={styles["article__content"]}>
    <div className={styles["content__title"]}>
      <h1>{post.title}</h1>
    </div>
    <div className={styles["content__datetime"]}>
      {dateFormater(post.publishedAt)} – BRZKÉ RÁNO
    </div>
    </div>

    <div
    className={styles["article__image"]}
  >
     <Image
      alt="Image"
      src={urlFor(post.poster).width().url()}
      layout="fill"
      objectFit="cover"
      quality={process.env.IMAGE_QUALITY}
      loading="lazy"
    />
  </div>
    <div className={styles["article__content"]}>
    <div className={styles["content__body"]}>
      <BlockContent blocks={post.body} serializers={serializers} />
    </div>
  </div>
  
</article>
);

export const ArticleHome = ({ post }) => (
  <Link href={post.slug.current}>
<article className={styles["article"]}>
    <div className={styles["article__content"]}>
      <div className={styles["content__category"]}>Povídky</div>
      <div className={styles["content__title"]}>
        <h1>{post.title}</h1>
      </div>
      <div className={styles["content__body"]}>
        <BlockContent blocks={post.excerpt} serializers={serializers} />
      </div>
      <div className={styles["content__datetime"]}>
        {dateFormater(post.publishedAt)} – BRZKÉ RÁNO
      </div>
    </div>
    <div
      className={styles["article__image"]}
    >
       <Image
        alt="Image"
        src={urlFor(post.poster).width().url()}
        layout="fill"
        objectFit="cover"
        quality={process.env.IMAGE_QUALITY}
        loading="lazy"
      />
    </div>
  </article>
  </Link>
);
