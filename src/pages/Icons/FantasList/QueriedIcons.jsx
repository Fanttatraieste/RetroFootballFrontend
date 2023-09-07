import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { setResults } from "../../../utils/iconsSlice";

import PropTypes from "prop-types";
import styles from "./QueriedIcons.module.css";
const baseURL = "http://127.0.0.1:3000/api/v1/icons";

function QueriedIcons() {
  const [icons, setIcons] = useState([]);
  const [loading, setLoading] = useState(true);

  const iconForm = useSelector((store) => store.icons);
  // const dispatch = useDispatch();

  useEffect(() => {
    let query = "";
    const { trophy, country, position, sortBy } = iconForm;

    let filterBy = [];
    if (trophy !== "all") filterBy.push(trophy);
    if (position !== "all") filterBy.push(position);

    if (filterBy) query += `filterBy=${filterBy.join(",")}&`;
    if (country !== "all") query += `country=${country}&`;
    query += `sortBy=${sortBy}`;

    // console.log(`${baseURL}?${query}&limit=9`);

    fetch(`${baseURL}?${query}&limit=9`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setIcons(data.data.icons);
        setLoading(false);

        // dispatch(setResults(data.results));

        // console.log("caut");
        // setIsLoading(false);
        // console.log(icons);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [iconForm]);
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
      {icons.map((icon) => (
        <Icon icon={icon} key={icon._id} />
      ))}
    </ul>
  );
}

function Icon({ icon }) {
  const iconForm = useSelector((store) => store.icons);
  function getRandom(images) {
    return images[Math.floor(Math.random() * images.length)];
  }
  // console.log(iconForm);

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
      <p className={styles.iconName}>{icon.name}</p>
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
