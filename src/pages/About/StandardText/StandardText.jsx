import styles from "./StandardText.module.css";
import kempes from "../../../assets/images/about/kempes.jpg";
import platini from "../../../assets/images/about/platini.jpg";
import manutd from "../../../assets/images/about/manutd.jpg";
import baggio from "../../../assets/images/about/baggio.jpg";
import cruyff from "../../../assets/images/about/cruyff.jpg";
import muller from "../../../assets/images/about/muller.jpg";
import liverpool from "../../../assets/images/about/liverpool.jpg";
import puskas from "../../../assets/images/about/puskas.jpg";

function StandardText() {
  return (
    <div className={styles.standard}>
      <h2 className={styles.title}>Our Standard</h2>
      <p className={styles.description}>
        Our point system is carefully designed to celebrate the true legends of
        football. It assigns value to various achievements and honors, creating
        an objective and comprehensive ranking system. Here&apos;s how it works:
      </p>
      <ul className={styles.standardList}>
        <li className={styles.standardListItem}>
          <p className={styles.standardText}>
            1. World Cup Trophy and Ballon d&apos;Or: These two trophies hold
            the highest prestige in our system and are weighted equally. They
            represent the pinnacle of team and individual excellence, making
            them the greatest point contributors.
          </p>
          <img className={styles.kempes} src={kempes} alt="some image" />
        </li>
        <li className={styles.standardListItem}>
          <p className={styles.standardText}>
            2. Continental Cup Trophies: Trophies won with the national team and
            club team in continental competitions carry significant weight in
            our rankings.
          </p>
          <img className={styles.platini} src={platini} alt="some image" />
        </li>
        <li className={styles.standardListItem}>
          <p className={styles.standardText}>
            3. League Titles, Cups, and Supercups: Domestic successes are also
            considered, recognizing the accomplishments of players in their club
            careers.
          </p>
          <img className={styles.manutd} src={manutd} alt="some image" />
        </li>
        <li className={styles.standardListItem}>
          <p className={styles.standardText}>
            4. Runners-Up and Top 10 Ballon d&apos;Or Finishers: We acknowledge
            the outstanding performances of players who reached the World Cup or
            continental cup finals and those who secured top positions in the
            annual Ballon d&apos;Or rankings.
          </p>
          <img className={styles.baggio} src={baggio} alt="some image" />
        </li>
        <li className={styles.standardListItem}>
          <p className={styles.standardText}>
            5. Nominations and Other Accolades: Points are awarded for players
            nominated for prestigious awards and those who received various
            accolades such as Golden Balls, Team of the Tournament selections,
            and more.
          </p>
          <img className={styles.cruyff} src={cruyff} alt="some image" />
        </li>
        <li className={styles.standardListItem}>
          <p className={styles.standardText}>
            6. Top Scorers in Continental Competitions: Goal-scorers in
            tournaments like the UEFA Cup or Champions League are also
            acknowledged with points for their exceptional contributions.
          </p>
          <img className={styles.muller} src={muller} alt="some image" />
        </li>
        <li className={styles.standardListItem}>
          <p className={styles.standardText}>
            7. Bonus Points: We recognize the exceptional achievements of
            certain players with bonus points, including defenders, goalkeepers,
            older South American players who played in an era without the Ballon
            d&apos;Or, and players with extraordinary careers, such as those who
            played over 1000 games or scored 500, 600, or 800 goals.
          </p>
          <img className={styles.liverpool} src={liverpool} alt="some image" />
        </li>
        <li className={styles.standardListItem}>
          <p className={styles.standardText}>
            8. Historical Players Born Before 1960: To pay homage to the
            pioneers of the sport, players born before the 1960s receive 5 bonus
            points, equivalent to a league title. These individuals not only
            shaped football but also laid the foundations for the modern game.
            Our point system is designed to promote diversity, honor exceptional
            careers, and celebrate the rich history of football. It&apos;s our
            way of recognizing and giving credit to the players who have left an
            indelible mark on the sport we all love.
          </p>
          <img className={styles.puskas} src={puskas} alt="some image" />
        </li>
      </ul>
    </div>
  );
}

export default StandardText;
