import styles from "./Pagination.scss";
export default class Pagination extends React.Component {
  render() {
    return (
      <div className={styles["pagination"]}>
        <ul>
          <li><a className={styles['active']}>1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="#">6</a></li>
        </ul>
      </div>
    );
  }
}
