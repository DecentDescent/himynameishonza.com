import React from "react";
import { LayoutHome } from "../components/Layout";
import { getPosts } from "../api/posts";
import "../styles/global.scss";

const IndexPage = ({ posts }) => {
  if (!posts) {
    return "Loading";
  }

  return <LayoutHome data={posts.result} />;
};

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts();
  const json = await res.json();
  return { posts: json };
};

export default IndexPage;
