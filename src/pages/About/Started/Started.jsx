import styles from "./Started.module.css";
import howItStarted from "../../../assets/images/about/how_it_started.jpg";
import howItsGoing from "../../../assets/images/about/howitsgoing.jpg";

function Started() {
  return (
    <div className={styles.startedContainer}>
      <div className={styles.startedInner}>
        <div className={styles.howItStarted}>
          <img
            className={styles.startedImg}
            src={howItStarted}
            alt="started image"
          />
          <div>
            <h2 className={styles.startedTitle}>How it started</h2>
            <p className={styles.startedText}>
              One day, I found myself consumed by curiosity about legendary,
              retired football players—the superstars of the sport&apos;s past.
              As I scoured various websites in search of information about them,
              I yearned for a single, comprehensive source that could provide
              all the insights I sought. This is the inspiration behind my
              website—a football encyclopedia, a sanctuary for enthusiasts eager
              to explore the rich history of the players who shaped the
              beautiful game.
            </p>
          </div>
        </div>
        <div className={styles.howItsGoing}>
          <h2 className={styles.goingTitle}>How it&apos;s going</h2>
          <p className={styles.goingText}>
            As I delved deeper into my research, I grappled with the age-old
            question that lingers in the minds of football fans worldwide: Who
            is the greatest player of all time? And what distinguishes a player
            as an iconic figure? To address the latter question, the answer, I
            discovered, is elegantly simple. It&apos;s not the flair of their
            style, the mesmerizing dribbles, or the thunderous shots that etch a
            player into memory because these attributes fade with time,
            preserved only in the recollections of those who witnessed their
            magic. Instead, the answer lies in one word: trophies. Trophies are
            the indelible imprints of greatness, and champions are the enduring
            icons of this beautiful sport. In my humble opinion, the most
            treasured trophies are those achieved while representing one&apos;s
            country. With these two pivotal questions in mind, I devised a
            standardized point system, assigning a specific value to each
            trophy. This objective scoring system allows us to rank and honor
            players in a fair and transparent manner, creating a comprehensive
            leaderboard.
          </p>
          <img
            className={styles.goingImg}
            src={howItsGoing}
            alt="how its going"
          />
        </div>
      </div>
    </div>
  );
}

export default Started;
