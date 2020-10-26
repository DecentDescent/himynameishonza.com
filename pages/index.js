import React from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Article from "../components/Article";
import "../styles/global.scss";

const IndexPage = () => {
  return (
    <>
      <Head />
      <Header />
      <Article />
    </>
  );
};

export default IndexPage;
