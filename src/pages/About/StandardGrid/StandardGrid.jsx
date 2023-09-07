import styles from "./StandardGrid.module.css";

function StandardGrid() {
  return (
    <div className={styles.gridContainer}>
      <h2 className={styles.title}>Our points</h2>
      <ul className={styles.pointList}>
        <li className={styles.pointItem + " " + styles.first}>
          <div className={styles.pointContainer}>
            <h3 className={styles.pointTitle}>25 points </h3>
            <div className={styles.items}>
              <p className={styles.text}>- world cup</p>
              <p className={styles.text}>- ballon d&apos;or</p>
            </div>
          </div>
          <div className={styles.pointContainer}>
            <h3 className={styles.pointTitle}>20 points</h3>
            <div className={styles.items}>
              <p className={styles.text}>- world cup runnerup</p>
              <p className={styles.text}>- ballon d&apos;or runnerup</p>
            </div>
          </div>
        </li>
        <li className={styles.pointItem + " " + styles.second}>
          <div className={styles.pointContainer}>
            <h3 className={styles.pointTitle}>15 points </h3>
            <div className={styles.items}>
              <p className={styles.text}>- world cup third place</p>
              <p className={styles.text}>- ballon d&apos;or third place</p>
              <p className={styles.text}>- Euro / Copa america</p>
              <p className={styles.text}>
                - Champions league / Copa libertadores
              </p>
            </div>
          </div>
          <div className={styles.pointContainer}>
            <h3 className={styles.pointTitle}>15 points</h3>
            <div className={styles.items}>
              <p className={styles.text}>- Golden shoe</p>
              <p className={styles.text}>- World cup golden ball</p>
            </div>
          </div>
        </li>
        {/* ********* 3*/}
        <li className={styles.pointItem + " " + styles.third}>
          <div className={styles.pointContainer}>
            <h3 className={styles.pointTitle}>10 points </h3>
            <div className={styles.items}>
              <p className={styles.text}>- world cup TOTT</p>
              <p className={styles.text}>- EURO / Copa America TOTT </p>
              <p className={styles.text + " " + styles.longerText}>
                - Inter-cities Cup / UEFA Cup/ Europa League
              </p>
            </div>
          </div>
          <div className={styles.pointContainer}>
            <h3 className={styles.pointTitle}>10 points</h3>
            <div className={styles.items}>
              <p className={styles.text}>- world cup top scorer</p>
              <p className={styles.text}>- Champions league top scorer</p>
              <p className={styles.text + " " + styles.longerText}>
                - Euro / Copa America golden ball
              </p>
            </div>
          </div>
          <div className={styles.pointContainer}>
            <h3 className={styles.pointTitle}>10 points</h3>
            <div className={styles.items}>
              <p className={styles.text}>- Euro / Copa america runnerup</p>
              <p className={styles.text}>- ballon d’or fourth place</p>
              <p className={styles.text + " " + styles.longerText}>
                - Champions league / Copa libertadores runnerup
              </p>
            </div>
          </div>
        </li>
        {/* ********* 4*/}
        <li className={styles.pointItem}>
          <div className={styles.pointContainer}>
            <h3 className={styles.pointTitle}>5 points </h3>
            <div className={styles.items}>
              <p className={styles.text}>- league title</p>
              <p className={styles.text}>- ballon d&apos;or eighth place</p>
              <p className={styles.text}>- Euro / Copa America third place</p>
              <p className={styles.text}>
                - UEFA Cup winners cup / Conference League
              </p>
            </div>
          </div>
          <div className={styles.pointContainer}>
            <h3 className={styles.pointTitle}>1 point</h3>
            <div className={styles.items}>
              <p className={styles.text}>- domestic cup / supercup</p>
              <p className={styles.text}>- ballon d&apos;or nomination</p>
              <p className={styles.text + " " + styles.longerText}>
                - if a player has more then 400 games / 100 goals for the same
                team
              </p>
            </div>
          </div>
        </li>
        <li className={styles.pointItem + " " + styles.fifth}>
          <div className={styles.pointContainer}>
            <h3 className={styles.pointTitle}>5 bonus points </h3>
            <div className={styles.items}>
              <p className={styles.text}>- career longer then 20 years</p>
              <p className={styles.text}>- Euro / Copa America top scorer</p>
              <p className={styles.text}>
                - UEFA Cup / Europa Leage / Inter Cities cup top scorer
              </p>
              <p className={styles.text}>
                - for players born before &apos;60s/&apos;40s/&apos;20s
              </p>
            </div>
          </div>
          <div className={styles.pointContainer}>
            <h3 className={styles.pointTitle}>25 bonus points</h3>
            <div className={styles.items}>
              <p className={styles.text}>Pele</p>
              <p className={styles.text}>Maradona</p>
              <p className={styles.text}>Lev Yashin</p>
              <p className={styles.text}>Kempes</p>
              <p className={styles.text}>Beckenbauer</p>
              <p className={styles.text}>Stanley Matthews</p>
              <p className={styles.text}>Giuseppe Meazza</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default StandardGrid;
