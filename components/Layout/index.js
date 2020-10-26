import Article from "../Article";

export class Layout extends React.Component {
  render() {
    return (
      <>
        {this.props.data.map((p) => (
          <Article key={p.order} post={p} />
        ))}
      </>
    );
  }
}
