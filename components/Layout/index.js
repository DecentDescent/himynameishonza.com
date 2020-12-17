import { ArticleHome, ArticleDetail, Article404 } from "../Article";
import Head from "../Head";
import Header from "../Header";
import Pagination from "../Pagination";
import Footer from "../Footer";

export class Layout404 extends React.Component {
  render() {
    return (
      <>
        <Head />
        <Header />
        <main class>
          <Article404 />
        </main>
        <Footer />
      </>
    );
  }
}
export class LayoutHome extends React.Component {
  render() {
    return (
      <>
        <Head />
        <Header />
        <main>
          {this.props.data.map((p, index) => (
            <ArticleHome key={index} post={p} />
          ))}
        </main>
        <Footer />
      </>
    );
  }
}

export class LayoutPost extends React.Component {
  render() {
    return (
      <main>
        <Head
          title={this.props.data.metaTitle}
          excerpt={this.props.data.metaDescription}
        />
        <Header />
        <ArticleDetail post={this.props.data} />
        <Footer />
      </main>
    );
  }
}
