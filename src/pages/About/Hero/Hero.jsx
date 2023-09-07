import { useState } from "react";
import styles from "./Hero.module.css";
import beckenbauer from "../../../assets/images/about/beckenbauer.jpg";
import distefano from "../../../assets/images/about/distefano.jpg";
import pele from "../../../assets/images/about/pele.jpg";

function Hero() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  function handleFirst() {
    setFirst(true);
    setSecond(false);
    setThird(false);
  }

  function handleSecond() {
    setFirst(false);
    setSecond(true);
    setThird(false);
  }

  function handleThird() {
    setFirst(false);
    setSecond(false);
    setThird(true);
  }

  function getClass(circle) {
    if (circle === 1 && first === true) return styles.activeCircle;
    if (circle === 2 && second === true) return styles.activeCircle;
    if (circle === 3 && third === true) return styles.activeCircle;

    return styles.circle;
  }

  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.titleContainer}>
          <p className={styles.subtitle}>about</p>
          <h2 className={styles.title}>
            Unveiling the Football Encyclopedia: Exploring Legends of the
            Beautiful Game
          </h2>
        </div>
        <div className={styles.imageContainer}>
          {first && (
            <img
              className={styles.image}
              src={beckenbauer}
              alt="beckenbauer image"
            />
          )}
          {second && (
            <img
              className={styles.image}
              src={distefano}
              alt="distefano image"
            />
          )}
          {third && (
            <img className={styles.image} src={pele} alt="pele image" />
          )}
          <div onClick={handleFirst} className={getClass(1)}></div>
          <div onClick={handleSecond} className={getClass(2)}></div>
          <div onClick={handleThird} className={getClass(3)}></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
