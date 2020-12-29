import React from "react";
import { LayoutHome } from "../components/Layout";
import { getPosts } from "../api/posts";
import "../styles/global.scss";
import Loading from "../components/Loading";
import ReactGA from "react-ga";

export class IndexPage extends React.Component {
  componentDidMount() {
    ReactGA.initialize("UA-176555731-1");
    ReactGA.pageview(
      window.location.pathname + window.location.search,
      [],
      "Homepage"
    );
  }

  render() {
    if (!this.props.posts) {
      return <Loading />;
    }

    return <LayoutHome data={this.props.posts.result} />;
  }
}

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts();
  const json = await res.json();
  return { posts: json };
};

export default IndexPage;
