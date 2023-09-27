import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setResults } from "../../../utils/iconsSlice";

import PropTypes from "prop-types";
import styles from "./QueriedIcons.module.css";
const baseURL = "http://127.0.0.1:3000/api/v1/icons";

function QueriedIcons() {
  const [icons, setIcons] = useState([]);
  const [loading, setLoading] = useState(true);

  const iconForm = useSelector((store) => store.icons);
  const { trophy, country, position, sortBy, page } = iconForm;
  const dispatch = useDispatch();

  useEffect(() => {
    let query = "";
    // const { trophy, country, position, sortBy } = iconForm;

    let filterBy = [];
    if (trophy !== "all") filterBy.push(trophy);
    if (position !== "all") filterBy.push(position);

    if (filterBy) query += `filterBy=${filterBy.join(",")}&`;
    if (country !== "all") query += `country=${country}&`;
    query += `sortBy=${sortBy}`;

    // console.log(`${baseURL}?${query}&limit=9`);

    fetch(`${baseURL}?${query}&limit=9&page=${page}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setIcons(data.data.icons);
        setLoading(false);
        dispatch(setResults(data.results));

        // console.log("caut");
        // setIsLoading(false);
        // console.log(icons);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [trophy, country, position, sortBy, page]);
  return (
    <div>
      {loading && <p>Icons are loading...</p>}
      {!loading && <IconList icons={icons} />}
    </div>
  );
}

function IconList({ icons }) {
  return (
    <ul className={styles.iconList}>
      {icons.map((icon, index) => (
        <Icon icon={icon} position={index} key={icon._id} />
      ))}
    </ul>
  );
}

function Icon({ icon, position }) {
  const [ballonDorWinner, setBallonDorWinner] = useState(false);
  const iconForm = useSelector((store) => store.icons);
  const { sortBy, page, limit } = iconForm;

  useEffect(() => {
    if (icon.ballonDor.winner.length > 0) setBallonDorWinner(true);
  }, []);

  function getRandom(images) {
    return images[Math.floor(Math.random() * images.length)];
  }
  // console.log(iconForm);

  function countTrophies() {
    let count = 0;

    switch (sortBy) {
      case "ballonDor":
        count += icon.ballonDor.winner.length;
        break;
      case "nominations":
        count += icon.ballonDor.nominations.length;
        break;
      case "goldenShoe":
        count += icon.goldenShoe.length;
        break;
      case "championsLeagueTopScorer":
        count += icon.championsLeagueTopScorer.length;
        break;
      case "leagueTitles":
        icon.clubTeams.forEach((club) => {
          count += club.leagueTitles.length;
        });
        break;
      case "championsLeague":
        icon.clubTeams.forEach((club) => {
          count += club.championsLeague.length;
        });
        break;
      case "worldCup":
        count += icon.nationalTeam.worldCup.length;
        break;
      case "nationalGoals":
        count += icon.nationalTeam.goalsScored;
        break;
      case "nationalGames":
        count += icon.nationalTeam.gamesPlayed;
        break;
      case "continentalCup":
        count += icon.nationalTeam.continentalCup.length;
        break;
      case "careerGoals":
        count += icon.careerGoals;
        break;
      case "careerGames":
        count += icon.careerGames;
        break;
      case "retired":
        count += icon.retired;
        break;
      case "worldCupGoals":
        count += icon.worldCupGoals;
        break;
      case "careerLength":
        count += icon.careerLength;
        break;
      default:
        count = 0;
    }

    return count;
  }

  function getCountryString(countries) {
    let str = "";
    for (let i = 0; i < countries.length - 1; i++) str += `${countries[i]}, `;
    str += countries[countries.length - 1];

    return str;
  }

  function getTeams(teams) {
    // i return an array of maximum 3 teams
    // in order of games played for

    let newTeams = [...teams];
    // console.log(newTeams);
    newTeams.sort((t1, t2) => {
      if (t1.gamesPlayed - t2.gamesPlayed < 0) return 1;
      return -1;
    });

    newTeams = newTeams.splice(0, 3);

    let str = "";
    for (let i = 0; i < newTeams.length - 1; i++)
      str += `${newTeams[i].name}, `;
    str += newTeams[newTeams.length - 1].name;

    return str;
  }

  function getPosition(position) {
    return position.charAt(0).toUpperCase() + position.slice(1);
  }

  return (
    <li className={styles.iconCard}>
      {!ballonDorWinner && (
        <p className={styles.iconName}>
          {(page - 1) * limit + position + 1 + ". " + icon.name}
        </p>
      )}
      {ballonDorWinner && (
        <p className={styles.iconName} style={{ color: "#FFDDAF" }}>
          {(page - 1) * limit + position + 1 + ". " + icon.name}
        </p>
      )}
      <img className={styles.iconImage} src={getRandom(icon.images)} />
      <div className={styles.iconPositionContainer}>
        <p className={styles.iconPosition}>
          {getPosition(
            iconForm.position === "all" ? icon.positions[0] : iconForm.position
          )}
        </p>
        <div className={styles.iconFantascore}>{icon.fantascore}</div>
      </div>
      <div className={styles.iconTeamsContainer}>
        <p className={styles.textLight}>Country(s)</p>
        <p className={styles.textStrong}>{getCountryString(icon.country)}</p>
        <p className={styles.textLight}>Team(s)</p>
        <p className={styles.textStrong}>{getTeams(icon.clubTeams)}</p>
      </div>
      {sortBy !== "fantascore" && (
        <div className={styles.trophyContainer}>
          <svg
            className={styles.trophyIcon}
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.37 1.99H15.4C15.41 1.87 15.42 1.75 15.42 1.63C15.4264 1.41337 15.39 1.1976 15.3127 0.995096C15.2355 0.792593 15.119 0.607346 14.97 0.45C14.8341 0.308355 14.6712 0.195513 14.4908 0.118201C14.3104 0.0408888 14.1163 0.000689874 13.92 0H3.96C3.76224 0.000596768 3.5666 0.0407125 3.38457 0.11799C3.20254 0.195268 3.03779 0.308149 2.9 0.45C2.75065 0.606694 2.63465 0.792064 2.55902 0.994889C2.48339 1.19771 2.4497 1.41378 2.46 1.63C2.46 1.75 2.47 1.87 2.48 1.99H1.5C1.10218 1.99 0.720644 2.14804 0.43934 2.42934C0.158035 2.71064 0 3.09218 0 3.49V5.49C0.00105519 6.64295 0.444602 7.7515 1.23913 8.58697C2.03366 9.42244 3.11856 9.92107 4.27 9.98C5.34 12.28 6.8 13.77 8.44 14.02V16.87H4.44C4.30739 16.87 4.18021 16.9227 4.08645 17.0164C3.99268 17.1102 3.94 17.2374 3.94 17.37C3.94 17.5026 3.99268 17.6298 4.08645 17.7236C4.18021 17.8173 4.30739 17.87 4.44 17.87H13.44C13.5726 17.87 13.6998 17.8173 13.7936 17.7236C13.8873 17.6298 13.94 17.5026 13.94 17.37C13.94 17.2374 13.8873 17.1102 13.7936 17.0164C13.6998 16.9227 13.5726 16.87 13.44 16.87H9.44V14.02C11.08 13.77 12.54 12.28 13.61 9.98C14.7603 9.92027 15.8436 9.42107 16.6364 8.5855C17.4292 7.74993 17.8708 6.64181 17.87 5.49V3.49C17.87 3.09218 17.712 2.71064 17.4307 2.42934C17.1494 2.14804 16.7678 1.99 16.37 1.99ZM1 5.49V3.49C1 3.35739 1.05268 3.23021 1.14645 3.13645C1.24021 3.04268 1.36739 2.99 1.5 2.99H2.54C2.70179 5.01468 3.13224 7.00885 3.82 8.92C3.02576 8.76269 2.31062 8.33489 1.79642 7.70946C1.28222 7.08403 1.00077 6.29967 1 5.49ZM8.94 13.06C6.12 13.06 3.71 8.02 3.46 1.59C3.45419 1.50953 3.46544 1.42874 3.49301 1.35291C3.52058 1.27709 3.56386 1.20794 3.62 1.15C3.66386 1.10365 3.71652 1.06652 3.77489 1.04076C3.83327 1.01501 3.8962 1.00115 3.96 1H13.92C13.9825 1.00026 14.0442 1.01376 14.1011 1.03961C14.158 1.06547 14.2087 1.10309 14.25 1.15C14.3624 1.26854 14.4235 1.42666 14.42 1.59C14.17 8.02 11.76 13.06 8.94 13.06ZM16.87 5.49C16.8664 6.29474 16.5862 7.07377 16.0764 7.69644C15.5666 8.31912 14.8582 8.74759 14.07 8.91C14.7484 7.00014 15.1754 5.01008 15.34 2.99H16.37C16.5026 2.99 16.6298 3.04268 16.7236 3.13645C16.8173 3.23021 16.87 3.35739 16.87 3.49V5.49Z" />
          </svg>
          <p className={styles.countTrophies}>{countTrophies()}</p>
        </div>
      )}
      <button className={styles.profileButton}>Player profile</button>
    </li>
  );
}

Icon.prototypes = {
  icon: PropTypes.object,
};

IconList.prototypes = {
  icons: PropTypes.array,
};

export default QueriedIcons;
