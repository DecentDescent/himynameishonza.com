import { ArticleHome, ArticleDetail } from "../Article";
import Head from "../Head";
import Header from "../Header";
import ReactGA from "react-ga";

export class LayoutHome extends React.Component {
  componentDidMount() {
    ReactGA.initialize("UA-176555731-1");
    ReactGA.pageview(
      window.location.pathname + window.location.search,
      [],
      "Homepage"
    );
  }

  render() {
    return (
      <>
        <Head />
        <Header />
        {/* <main>
          {this.props.data.map((p, index) => (
            <ArticleHome key={index} post={p} />
          ))}
        </main> */}
      </>
    );
  }
}

export class LayoutPost extends React.Component {
  componentDidMount() {
    ReactGA.initialize("UA-176555731-1");
    ReactGA.pageview(
      window.location.pathname + window.location.search,
      [],
      this.props.data.metaTitle
    );
  }

  render() {
    return (
      <main>
        <Header />
        <ArticleDetail post={this.props.data} />
      </main>
    );
  }
}
