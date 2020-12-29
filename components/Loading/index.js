import styles from "./Loading.scss";

export function Loading() {
  return (
    <section className={styles["loading"]}>
      <div className={styles["lds-ellipsis"]}>
        <div />
        <div />
        <div />
      </div>
    </section>
  );
}

export default Loading;
