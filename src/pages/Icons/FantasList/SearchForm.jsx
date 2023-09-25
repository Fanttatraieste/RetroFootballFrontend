import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchForm.module.css";
import { useState } from "react";
import {
  setTrophy,
  setCountry,
  setPosition,
  setSortBy,
  setPage,
} from "../../../utils/iconsSlice";

const trophyOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "World cup",
    value: "worldCup",
  },
  {
    label: `Ballon d'Or`,
    value: "ballonDor",
  },
  {
    label: "Champions league / Copa Libertadores",
    value: "championsLeague",
  },
  {
    label: "UEFA Cup",
    value: "uefaCup",
  },
  {
    label: "EURO / Copa America",
    value: "continentalCup",
  },
  {
    label: "Golden Shoe",
    value: "goldenShoe",
  },
];

const positionOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Striker",
    value: "striker",
  },
  {
    label: "Winger",
    value: "winger",
  },
  {
    label: "Forward",
    value: "forward",
  },
  {
    label: "Midfielder",
    value: "midfielder",
  },
  {
    label: "Defender",
    value: "defender",
  },
  {
    label: "Goalkeeper",
    value: "goalkeeper",
  },
  {
    label: "Fullback",
    value: "fullback",
  },
];

const countryOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Argentina",
    value: "Argentina",
  },
  {
    label: "Brazil",
    value: "Brazil",
  },
  {
    label: "Belgium",
    value: "Belgium",
  },
  {
    label: "Croatia",
    value: "Croatia",
  },
  {
    label: "Denmark",
    value: "Denmark",
  },
  {
    label: "England",
    value: "England",
  },
  {
    label: "Italy",
    value: "Italy",
  },
  {
    label: "Spain",
    value: "Spain",
  },
  {
    label: "Germany",
    value: "Germany",
  },
  {
    label: "Hungary",
    value: "Hungary",
  },
  {
    label: "France",
    value: "France",
  },
  {
    label: "Cote d'Ivoire",
    value: "Cote d'Ivoire",
  },
  {
    label: "Cameroon",
    value: "Cameroon",
  },
  {
    label: "Greece",
    value: "Greece",
  },
  {
    label: "Portugal",
    value: "Portugal",
  },
  {
    label: "Liberia",
    value: "Liberia",
  },
  {
    label: "Netherlands",
    value: "Netherlands",
  },
  {
    label: "Wales",
    value: "Wales",
  },
  {
    label: "Scotland",
    value: "Scotland",
  },
  {
    label: "Romania",
    value: "Romania",
  },
  {
    label: "Czechoslovakia",
    value: "Czechoslovakia",
  },
  {
    label: "Soviet Union",
    value: "Soviet Union",
  },
];

const sortByOptions = [
  {
    label: "Fantascore",
    value: "fantascore",
  },
  {
    label: "Ballon d'Or",
    value: "ballonDor",
  },
  {
    label: "Nominations for Ballon d'Or",
    value: "nominations",
  },
  {
    label: "Golden shoes",
    value: "goldenShoe",
  },
  {
    label: "Top scorer in Champions league",
    value: "championsLeagueTopScorer",
  },
  {
    label: "League titles",
    value: "leagueTitles",
  },
  {
    label: "Champions leagues / Copa Libertadores",
    value: "championsLeague",
  },
  {
    label: "World cup",
    value: "worldCup",
  },
  {
    label: "EURO / Copa America",
    value: "continentalCup",
  },
  {
    label: "Career goals",
    value: "careerGoals",
  },
  {
    label: "Career games",
    value: "careerGames",
  },
  {
    label: "Retired",
    value: "retired",
  },
  {
    label: "World cup goals",
    value: "worldCupGoals",
  },
  {
    label: "Years in football",
    value: "careerLength",
  },
  {
    label: "Goals for Nation",
    value: "nationalGoals",
  },
  {
    label: "Games for Nation",
    value: "nationalGames",
  },
];

function SearchForm() {
  const [trophy, stateSetTrophy] = useState("all");
  const [position, stateSetPosition] = useState("all");
  const [country, stateSetCountry] = useState("all");
  const [sort, stateSetSort] = useState("fantascore");

  const iconForm = useSelector((store) => store.icons);
  const dispatch = useDispatch();

  function handleTrophy(event) {
    // dispatch(setTrophy(event.target.value));
    stateSetTrophy(event.target.value);
  }

  function handlePosition(event) {
    // dispatch(setPosition(event.target.value));
    stateSetPosition(event.target.value);
  }

  function handleCountry(event) {
    // dispatch(setCountry(event.target.value));
    stateSetCountry(event.target.value);
  }

  function handleSort(event) {
    // dispatch(setSortBy(event.target.value));
    stateSetSort(event.target.value);
  }

  function handleSubmit() {
    dispatch(setTrophy(trophy));
    dispatch(setPosition(position));
    dispatch(setCountry(country));
    dispatch(setSortBy(sort));
    dispatch(setPage(1));

    console.log(iconForm);
  }

  return (
    <div className={styles.searchContainer}>
      <ul className={styles.searchList}>
        <li className={styles.searchListItem}>
          <p>Filter trophy</p>
          <select
            className={styles.searchInput}
            placeholder="select trophy"
            onChange={handleTrophy}
          >
            {trophyOptions.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p>Filter country</p>
          <select
            className={styles.searchInput}
            placeholder="select trophy"
            onChange={handleCountry}
          >
            {countryOptions.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </li>
        <li className={styles.searchListItem}>
          <p>Filter position</p>
          <select
            className={styles.searchInput}
            placeholder="select trophy"
            onChange={handlePosition}
          >
            {positionOptions.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p>Sort By</p>
          <select
            className={styles.searchInput}
            placeholder="select trophy"
            onChange={handleSort}
          >
            {sortByOptions.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </li>
        <li className={styles.searchListItem}>
          <button className={styles.button} onClick={handleSubmit}>
            Query
            <svg
              className={styles.buttonIcon}
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_125_44)">
                <path d="M18.1446 5.61115C20.5515 5.60895 22.9048 6.32065 24.9071 7.6562C26.9094 8.99175 28.4705 10.8912 29.3931 13.1141C30.3157 15.3371 30.5582 17.7838 30.09 20.1446C29.6218 22.5054 28.4639 24.6744 26.7628 26.377C25.0617 28.0797 22.8938 29.2395 20.5334 29.7099C18.173 30.1802 15.7262 29.9399 13.5023 29.0194C11.2785 28.0989 9.3777 26.5394 8.04032 24.5384C6.70294 22.5374 5.98909 20.1846 5.98909 17.7778C6.00368 14.5574 7.28869 11.4729 9.56482 9.19472C11.841 6.91651 14.9243 5.62868 18.1446 5.61115ZM18.1446 3.33337C15.2878 3.33337 12.4951 4.18053 10.1197 5.7677C7.74437 7.35488 5.89299 9.61079 4.79972 12.2502C3.70645 14.8895 3.42041 17.7938 3.97775 20.5958C4.53509 23.3977 5.91079 25.9715 7.93088 27.9916C9.95097 30.0117 12.5247 31.3874 15.3267 31.9447C18.1286 32.5021 21.0329 32.216 23.6723 31.1227C26.3117 30.0295 28.5676 28.1781 30.1548 25.8027C31.7419 23.4273 32.5891 20.6347 32.5891 17.7778C32.5891 13.9469 31.0673 10.2729 28.3584 7.56405C25.6496 4.85519 21.9755 3.33337 18.1446 3.33337Z" />
                <path d="M38.8887 36.9888L30.6998 28.7444L29.1221 30.3111L37.311 38.5555C37.4138 38.6591 37.5361 38.7414 37.6708 38.7978C37.8055 38.8541 37.9499 38.8834 38.0959 38.8839C38.2419 38.8844 38.3866 38.8562 38.5217 38.8008C38.6567 38.7454 38.7796 38.6639 38.8832 38.5611C38.9868 38.4582 39.0691 38.3359 39.1254 38.2012C39.1818 38.0666 39.2111 37.9221 39.2116 37.7761C39.2121 37.6301 39.1839 37.4854 39.1285 37.3504C39.0731 37.2153 38.9916 37.0924 38.8887 36.9888Z" />
              </g>
              <defs>
                <clipPath id="clip0_125_44">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SearchForm;
