import { ArticleHome, ArticleDetail } from "../Article";
import Head from "../Head";
import Header from "../Header";
export class LayoutHome extends React.Component {
  render() {
    return (
      <main>
        <Head />
        <Header />
        {this.props.data.map((p) => (
          <ArticleHome key={p.order} post={p} />
        ))}
      </main>
    );
  }
}

export class LayoutPost extends React.Component {
  render() {
    return (
      <>
        <Head
          title={this.props.data.metaTitle}
          excerpt={this.props.data.metaDescription}
        />
        <ArticleDetail type="story" post={this.props.data} />
      </>
    );
  }
}
