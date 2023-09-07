import styles from "./Hero.module.css";
import florianalbert from "../../../assets/images/icons/florianalbert.jpg";
import keegan from "../../../assets/images/icons/keegan.jpg";
import gullit from "../../../assets/images/icons/gullit.jpg";
import { useState } from "react";

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
          <p className={styles.subtitle}>fanta&apos;s list</p>
          <h2 className={styles.title}>The list of all retired legends</h2>
        </div>
        <div className={styles.imageContainer}>
          {first && (
            <img
              className={styles.image}
              src={florianalbert}
              alt="florian albert image"
            />
          )}
          {second && (
            <img className={styles.image} src={keegan} alt="keegan image" />
          )}
          {third && (
            <img className={styles.image} src={gullit} alt="gullit image" />
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
