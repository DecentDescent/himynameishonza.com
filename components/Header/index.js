import Icon from "../Icons";
import styles from "./Header.scss";
export default class Header extends React.Component {
  render() {
    return (
      <header className={styles["header"]}>
        <div className={styles["header__logo"]}>
          <h1>Hi My Name is Honza</h1>
        </div>
        <div className={styles["header__navigation"]}>
          <div className={styles["navigation__social"]}>
            <ul>
              <li>
                <a href={process.env.URL_PATREON} rel="external">
                  <Icon icon="patreon" />
                </a>
              </li>
              <li>
                <a href={process.env.URL_TWITTER} rel="external">
                  <Icon icon="twitter" />
                </a>
              </li>
              <li>
                <a href={process.env.URL_FACEBOOK} rel="external">
                  <Icon icon="facebook" />
                </a>
              </li>
              <li>
                <a href={process.env.URL_INSTAGRAM} rel="external">
                  <Icon icon="instagram" />
                </a>
              </li>
              <li className={styles["divider"]}>
                <a>
                  <Icon icon="search" />
                </a>
              </li>
            </ul>
          </div>
          <nav className={styles["navigation__categories"]}>
            <ul>
              <li>
                <a href="/kategories/film">Film</a>
              </li>
              <li>
                <a href="/kategories/hudba">Hudba</a>
              </li>
              <li>
                <a href="/kategories/hry">Hry</a>
              </li>
              <li>
                <a href="/kategories/povidky">Povídky</a>
              </li>
              <li>
                <a href="/kategories/blog">Blog</a>
              </li>
              <li>
                <a href="/kategories/foto">Foto</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
