import styles from "./Footer.scss";
import Icon from "../Icons";
export default class Footer extends React.Component {
  render() {
    return (
      <footer className={styles["footer"]}>
        <div className={styles["footer__container"]}>
          <div className={styles["footer__left"]}>
            &copy; 2020 himynameishonza.com
          </div>

          <div className={styles["footer__right"]}>
            <ul className={styles["social"]}>
              <li>
                <a href={process.env.URL_FACEBOOK}>
                  <Icon icon="facebook" />
                </a>
              </li>
              <li>
                <a href={process.env.URL_TWITTER}>
                  <Icon icon="twitter" />
                </a>
              </li>
              <li>
                <a href={process.env.URL_INSTAGRAM}>
                  <Icon icon="instagram" />
                </a>
              </li>
              <li>
                <a href={process.env.URL_FLICKR}>
                  <Icon icon="flickr" />
                </a>
              </li>
            </ul>

            <ul className={styles["gamertags"]}>
              <li>
                <b>XBOX:</b> Workless1986
              </li>
              <li>
                <b>Nintendo:</b> Workless
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
