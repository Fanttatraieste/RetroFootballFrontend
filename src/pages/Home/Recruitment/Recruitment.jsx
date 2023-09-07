import styles from "./Recruitment.module.css";

function Recruitment() {
  return (
    <div className={styles.recruitmentSection}>
      <div className={styles.recruitmentSectionInner}>
        <h3 className={styles.title}>Our recruitment process</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            We check the players career
            <div className={styles.circle}></div>
          </li>
          <li className={styles.item}>
            We list his trofies and achivments
            <div className={styles.circle}></div>
          </li>
          <li className={styles.item}>
            We calculate his score based on our standard
            <div className={styles.circle}></div>
          </li>
          <li className={styles.item}>
            We check the grade to be greater than 50
            <div className={styles.circle}></div>
          </li>
          <li className={styles.item}>
            We compare the new icon to the rest
            <div className={styles.circle}></div>
          </li>
          <li className={styles.item}>
            we introduce the new icon to the list
            <div className={styles.circle}></div>
          </li>
          <li className={styles.line}>
            <svg
              width="2006"
              height="1"
              viewBox="0 0 2006 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="1265" y2="0.5" stroke="#272829" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Recruitment;
