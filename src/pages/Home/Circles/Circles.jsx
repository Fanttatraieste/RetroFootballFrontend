import styles from "./Circles.module.css";

function Circles() {
  return (
    <div className={styles.circlesSection}>
      <div className={styles.circle + " " + styles.first}>
        <p className={styles.text}>Fanta&apos;s score Standard</p>
      </div>
      <div className={styles.circle}>
        <p className={styles.text}>Football&apos;s trophies</p>
      </div>
      <div className={styles.circle + " " + styles.last}>
        <p className={styles.text}>Football&apos;s legends</p>
      </div>
    </div>
  );
}

export default Circles;
