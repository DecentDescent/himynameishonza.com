import React, { Component } from "react";

import "../styles/global.scss";

import Head from "../components/Head";
import Header from "../components/Header";
import Article from "../components/Article";
import Footer from "../components/Footer";

class Index extends Component {
  render() {
    return (
      <main>
        <Head />
        <Header />
        <Article />
        <Footer />
      </main>
    );
  }
}
export default Index;
