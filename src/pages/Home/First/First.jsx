import { Link } from "react-router-dom";
import styles from "./First.module.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function First() {
  return (
    <div className={styles.latest}>
      <div className={styles.latestInner}>
        <LatestIcons />
        <LatestTitle />
      </div>
    </div>
  );
}

function LatestTitle() {
  return (
    <div className={styles.latestTitleSection}>
      <h2 className={styles.title}>First Icons</h2>
      <p className={styles.subtitle}>
        Here&apos;s a selection of some of the first ever players considered to
        be icons
      </p>
      {/* <button className={styles.viewButton}>View all icons</button> */}
      <Link className={styles.viewButton} to="/">
        View all icons
        <svg
          className={styles.viewIcon}
          viewBox="0 0 73 73"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.8125 20.5312H63.875M22.8125 36.5H63.875M22.8125 52.4688H63.875"
            // stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.4062 22.8125C12.6661 22.8125 13.6875 21.7911 13.6875 20.5312C13.6875 19.2714 12.6661 18.25 11.4062 18.25C10.1464 18.25 9.125 19.2714 9.125 20.5312C9.125 21.7911 10.1464 22.8125 11.4062 22.8125Z"
            // stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.4062 38.7812C12.6661 38.7812 13.6875 37.7599 13.6875 36.5C13.6875 35.2401 12.6661 34.2188 11.4062 34.2188C10.1464 34.2188 9.125 35.2401 9.125 36.5C9.125 37.7599 10.1464 38.7812 11.4062 38.7812Z"
            // stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.4062 54.75C12.6661 54.75 13.6875 53.7286 13.6875 52.4688C13.6875 51.2089 12.6661 50.1875 11.4062 50.1875C10.1464 50.1875 9.125 51.2089 9.125 52.4688C9.125 53.7286 10.1464 54.75 11.4062 54.75Z"
            // stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}

function LatestIcons() {
  const [icons, setIcons] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     setIsLoading(false);
  //   }, [icons]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/icons?sort=retired", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setIcons(data.data.icons);
        // setIsLoading(false);
        // console.log(icons);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.latestIcons}>
      <ul className={styles.iconList}>
        {icons[0] && <Icon icon={icons[0]} />}
        {icons[1] && <Icon icon={icons[1]} />}
        {icons[2] && <Icon icon={icons[2]} />}
      </ul>
    </div>
  );
}

function Icon({ icon }) {
  const position = icon.positions[0];

  let color = "";

  if (position === "striker" || position === "forward" || position === "winger")
    color = "red";
  else if (position === "midfielder") color = "green";
  else if (position === "defender") color = "blue";
  else color = "yellow";

  function getTrophies() {
    let count = 0;

    count += icon.nationalTeam.worldCup.length;
    count += icon.nationalTeam.continentalCup.length;

    icon.clubTeams.forEach((team) => {
      count += team.leagueTitles.length;
      count += team.cupTitles.length;
      count += team.supercupTitles.length;
      count += team.championsLeague.length;
      count += team.uefaCup.length;
      count += team.uefaCupWinnersCup.length;
      count += team.uefaSuperCup.length;
    });

    return count;
  }

  function getCountriesPlayedMost() {
    const countryList = [];

    icon.clubTeams.forEach((club) => {
      if (!countryList.includes(club.country)) countryList.push(club.country);
    });

    // console.log(countryList);

    countryList.sort((country1, country2) => {
      let games1 = 0;
      let games2 = 0;

      icon.clubTeams.forEach((club) => {
        if (club.country === country1) games1 += club.gamesPlayed;
        else if (club.country === country2) games2 += club.gamesPlayed;
      });

      return games2 - games1;
    });

    // console.log(countryList);

    return countryList.filter((country, index) => index <= 2);
  }

  const countryList = getCountriesPlayedMost();

  return (
    <li className={styles.iconCard}>
      {/* <div className={`${color}Position`}>
        <p className={`${color}PositionText`}>{position}</p>
      </div> */}

      {/***********      position seciton      ***********/}

      {color === "red" && (
        <div className={styles.redPosition}>
          <p className={styles.redPositionText}>{position}</p>
        </div>
      )}

      {color === "green" && (
        <div className={styles.greenPosition}>
          <p className={styles.greenPositionText}>{position}</p>
        </div>
      )}

      {color === "blue" && (
        <div className={styles.bluePosition}>
          <p className={styles.bluePositionText}>{position}</p>
        </div>
      )}

      {color === "yellow" && (
        <div className={styles.yellowPosition}>
          <p className={styles.yellowPositionText}>{position}</p>
        </div>
      )}

      {/***********      info section      ***********/}
      <div className={styles.iconInfo}>
        <div className={styles.icon}>
          <p className={styles.iconName}>{icon.name}</p>
          <div className={styles.iconCountriesDiv}>
            <svg
              className={styles.iconCountriesLocationIcon}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 18C15.0111 18 14.0444 17.7068 13.2221 17.1574C12.3999 16.6079 11.759 15.8271 11.3806 14.9134C11.0022 13.9998 10.9031 12.9945 11.0961 12.0246C11.289 11.0546 11.7652 10.1637 12.4645 9.46447C13.1637 8.76521 14.0546 8.289 15.0245 8.09608C15.9945 7.90315 16.9998 8.00217 17.9134 8.3806C18.827 8.75904 19.6079 9.39991 20.1573 10.2222C20.7068 11.0444 21 12.0111 21 13C20.9984 14.3256 20.4711 15.5964 19.5338 16.5338C18.5964 17.4711 17.3256 17.9984 16 18ZM16 10C15.4067 10 14.8266 10.1759 14.3333 10.5056C13.8399 10.8352 13.4554 11.3038 13.2284 11.852C13.0013 12.4001 12.9419 13.0033 13.0576 13.5853C13.1734 14.1672 13.4591 14.7018 13.8787 15.1213C14.2982 15.5409 14.8328 15.8266 15.4147 15.9424C15.9967 16.0581 16.5999 15.9987 17.148 15.7716C17.6962 15.5446 18.1648 15.1601 18.4944 14.6667C18.8241 14.1734 19 13.5933 19 13C18.9992 12.2046 18.6829 11.442 18.1204 10.8796C17.558 10.3171 16.7954 10.0008 16 10Z" />
              <path d="M16 30L7.564 20.051C7.44678 19.9016 7.33078 19.7513 7.216 19.6C5.77498 17.7018 4.99651 15.3832 5 13C5 10.0826 6.15893 7.28473 8.22183 5.22183C10.2847 3.15893 13.0826 2 16 2C18.9174 2 21.7153 3.15893 23.7782 5.22183C25.8411 7.28473 27 10.0826 27 13C27.0035 15.3821 26.2254 17.6996 24.785 19.597L24.784 19.6C24.784 19.6 24.484 19.994 24.439 20.047L16 30ZM8.812 18.395C8.814 18.395 9.046 18.703 9.099 18.769L16 26.908L22.91 18.758C22.954 18.703 23.188 18.393 23.189 18.392C24.3661 16.8411 25.0023 14.947 25 13C25 10.6131 24.0518 8.32387 22.364 6.63604C20.6761 4.94821 18.3869 4 16 4C13.6131 4 11.3239 4.94821 9.63604 6.63604C7.94821 8.32387 7 10.6131 7 13C6.9979 14.9482 7.63378 16.8434 8.812 18.395Z" />
            </svg>
            {/* <p className={styles.iconCountries}>{icon.clubTeams[0].country}</p> */}
            {/* {getCountriesPlayedMost().map((country) => (
              <p className={styles.iconCountries} key={country}>
                {country}
              </p>
            ))} */}
            <p className={styles.iconCountries}>
              {countryList.map((country, index) => {
                if (index < countryList.length - 1) return `${country}, `;
                return `${country}`;
              })}
            </p>
          </div>
        </div>
        <div className={styles.iconStats}>
          <p className={styles.iconStat}>
            <svg
              className={styles.iconGames}
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 0C0.89 0 0 0.89 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H2ZM2 2H9V4.13C7.24 4.59 6 6.18 6 8C6.00237 8.88584 6.29799 9.74596 6.84072 10.4461C7.38344 11.1462 8.14272 11.6469 9 11.87V14H2V12H5V4H2V2ZM11 2H18V4H15V12H18V14H11V11.87C12.76 11.41 14 9.82 14 8C13.9976 7.11416 13.702 6.25404 13.1593 5.55393C12.6166 4.85381 11.8573 4.35311 11 4.13V2ZM2 6H3V10H2V6ZM17 6H18V10H17V6ZM11 6.27C11.62 6.63 12 7.29 12 8C12 8.71 11.62 9.37 11 9.73V6.27ZM9 6.27V9.73C8.38 9.37 8 8.71 8 8C8 7.29 8.38 6.63 9 6.27Z"
                fill="black"
              />
            </svg>
            Career games: {icon.careerGames}
          </p>
          <p className={styles.iconStat}>
            <svg
              className={styles.iconCalendar}
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5V0M18 5V0M22 16V20.5H4V17.5M21.863 7.5H3.852M1 17.25V17.5H18.9L19.05 17.25L19.284 16.759C21.0722 13.0007 22 8.89102 22 4.729V2.5H4V4.628C4.00004 8.82218 3.05784 12.9628 1.243 16.744L1 17.25Z"
                stroke="black"
              />
            </svg>
            Career length: {icon.careerLength} (years)
          </p>
          <p className={styles.iconStat}>
            <svg
              className={styles.iconTrophy}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.37 1.99H15.4C15.41 1.87 15.42 1.75 15.42 1.63C15.4264 1.41337 15.39 1.1976 15.3127 0.995096C15.2355 0.792593 15.119 0.607346 14.97 0.45C14.8341 0.308355 14.6712 0.195513 14.4908 0.118201C14.3104 0.0408888 14.1163 0.000689874 13.92 0H3.96C3.76224 0.000596768 3.5666 0.0407125 3.38457 0.11799C3.20254 0.195268 3.03779 0.308149 2.9 0.45C2.75065 0.606694 2.63465 0.792064 2.55902 0.994889C2.48339 1.19771 2.4497 1.41378 2.46 1.63C2.46 1.75 2.47 1.87 2.48 1.99H1.5C1.10218 1.99 0.720644 2.14804 0.43934 2.42934C0.158035 2.71064 0 3.09218 0 3.49V5.49C0.00105519 6.64295 0.444602 7.7515 1.23913 8.58697C2.03366 9.42244 3.11856 9.92107 4.27 9.98C5.34 12.28 6.8 13.77 8.44 14.02V16.87H4.44C4.30739 16.87 4.18021 16.9227 4.08645 17.0164C3.99268 17.1102 3.94 17.2374 3.94 17.37C3.94 17.5026 3.99268 17.6298 4.08645 17.7236C4.18021 17.8173 4.30739 17.87 4.44 17.87H13.44C13.5726 17.87 13.6998 17.8173 13.7936 17.7236C13.8873 17.6298 13.94 17.5026 13.94 17.37C13.94 17.2374 13.8873 17.1102 13.7936 17.0164C13.6998 16.9227 13.5726 16.87 13.44 16.87H9.44V14.02C11.08 13.77 12.54 12.28 13.61 9.98C14.7603 9.92027 15.8436 9.42107 16.6364 8.5855C17.4292 7.74993 17.8708 6.64181 17.87 5.49V3.49C17.87 3.09218 17.712 2.71064 17.4307 2.42934C17.1494 2.14804 16.7678 1.99 16.37 1.99ZM1 5.49V3.49C1 3.35739 1.05268 3.23021 1.14645 3.13645C1.24021 3.04268 1.36739 2.99 1.5 2.99H2.54C2.70179 5.01468 3.13224 7.00885 3.82 8.92C3.02576 8.76269 2.31062 8.33489 1.79642 7.70946C1.28222 7.08403 1.00077 6.29967 1 5.49ZM8.94 13.06C6.12 13.06 3.71 8.02 3.46 1.59C3.45419 1.50953 3.46544 1.42874 3.49301 1.35291C3.52058 1.27709 3.56386 1.20794 3.62 1.15C3.66386 1.10365 3.71652 1.06652 3.77489 1.04076C3.83327 1.01501 3.8962 1.00115 3.96 1H13.92C13.9825 1.00026 14.0442 1.01376 14.1011 1.03961C14.158 1.06547 14.2087 1.10309 14.25 1.15C14.3624 1.26854 14.4235 1.42666 14.42 1.59C14.17 8.02 11.76 13.06 8.94 13.06ZM16.87 5.49C16.8664 6.29474 16.5862 7.07377 16.0764 7.69644C15.5666 8.31912 14.8582 8.74759 14.07 8.91C14.7484 7.00014 15.1754 5.01008 15.34 2.99H16.37C16.5026 2.99 16.6298 3.04268 16.7236 3.13645C16.8173 3.23021 16.87 3.35739 16.87 3.49V5.49Z"
                fill="black"
              />
            </svg>
            Career Trophies: {getTrophies()}
          </p>
        </div>
      </div>

      {/***********      button section      ***********/}
      <div className={styles.iconButton}>
        <Link className={styles.iconLink} to="/">
          Player Profile
          <svg
            className={styles.iconArrowRight}
            viewBox="0 0 14 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.650643 1.10348C0.459844 1.29882 0.353027 1.56104 0.353027 1.8341C0.353027 2.10716 0.459844 2.36939 0.650643 2.56473L11.3103 13.5L0.650643 24.4332C0.459844 24.6285 0.353027 24.8907 0.353027 25.1638C0.353027 25.4369 0.459844 25.6991 0.650643 25.8944C0.743385 25.9897 0.854268 26.0654 0.976749 26.1171C1.09923 26.1688 1.23083 26.1954 1.36377 26.1954C1.49671 26.1954 1.62831 26.1688 1.75079 26.1171C1.87327 26.0654 1.98415 25.9897 2.07689 25.8944L13.4125 14.2635C13.6116 14.0592 13.723 13.7853 13.723 13.5C13.723 13.2148 13.6116 12.9409 13.4125 12.7366L2.07689 1.10567C1.98415 1.01041 1.87327 0.934708 1.75079 0.883014C1.62831 0.83132 1.49671 0.804688 1.36377 0.804688C1.23083 0.804688 1.09923 0.83132 0.976749 0.883014C0.854268 0.934708 0.743385 1.01041 0.650643 1.10567V1.10348Z" />
          </svg>
        </Link>
      </div>
    </li>
  );
}

Icon.prototypes = {
  icon: PropTypes.object,
};

export default First;
