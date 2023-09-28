import { useEffect, useState, Suspense } from "react";
import { NavLink, Outlet } from 'react-router-dom';
import styles from "./Icon.module.css";

import { useSelector } from "react-redux";

function Icon() {
  // const { icon } = useSelector((store) => store.oneIcon);
  return <div>
    <IconPresentation />
    <IconCountry />
    <IconBallonDor />
    <IconTeamList />

    <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
    </Suspense>

    <NoteDeSubsol />
  </div>;
}

function NoteDeSubsol() {
  return <div className={styles.notes}>
    <p className={styles.notesText}>*The counted domestic trophies are only the league, cup, and super cup (if there is a fourth domestic trophy, it is not counted, for example the league cup).</p>
    <p className={styles.notesText}>*The counted international trophies with the team, are only the Champions league / Copa Libertadores, UEFA Cup / Europa League / Inter Cities-Fairs Cup (the previous format of the UEFA Cup), UEFA Cup Winners Cup / Conference League and UEFA Super Cup. Any other continental trophy isn&apos;t counted ( for example Intertoto Cup ) and also the FIFA Club World Cup isn&apos;t counted ( among others ).</p>
    <p className={styles.notesText}>*The international trophies won with the national team that are counted are only the World cup and Euro / Copa America / African Nations Cup. Any other  international trophy, like Nations league or Balkan Cup, or even Confederations Cup or Finalissima ( and so on ), isn&apos;t counted.</p>
  </div>
}

function IconTeamList() {
  const { icon } = useSelector((store) => store.oneIcon);

  return <div className={styles.teamsContainer}>
    <h3 className={styles.teamsTitle}>Teams {icon.name} played for: </h3>
    <div className={styles.teamsContainerInner}>
      {icon.clubTeams.map((club) => {
        return <NavLink className={styles.teamLink} to={`${club.name.split(' ').join('-')}`} key={club.name}>{club.name}</NavLink>
      })}
    </div>
  </div>
}

function IconPresentation() {
  const [borderStyle, setBorderStyle] = useState({});
  const { icon } = useSelector((store) => store.oneIcon);
  const pos = icon.positions[0];

  useEffect(() => {

    switch(pos) {
      case 'striker':
        setBorderStyle({border: '1px solid #c51605'})
        break;
      case 'forward':
        setBorderStyle({border: '1px solid #c51605'})
        break;
      case 'winger':
        setBorderStyle({border: '1px solid #c51605'})
        break;
      case 'midfielder':
        setBorderStyle({border: '1px solid #a8df8e'})
        break;
      case 'goalkeeper':
        setBorderStyle({border: '1px solid #ffbd64'})
        break;
      case 'defender':
        setBorderStyle({border: '1px solid #279eff'})
        break;
      case 'fullback':
        setBorderStyle({border: '1px solid #279eff'})
        break;
      default:
        setBorderStyle({border: '1px solid #c51605'})
    }
  }, [pos]);

  function getRandom(images) {
    return images[Math.floor(Math.random() * images.length)];
  }

  function getTrophies() {
    let count = 0;

    count += icon.nationalTeam.worldCup.length;
    count += icon.nationalTeam.continentalCup.length;

    icon.clubTeams.forEach(club => {
      count += club.leagueTitles.length;
      count += club.cupTitles.length;
      count += club.supercupTitles.length;
      count += club.championsLeague.length;
      count += club.uefaCup.length;
      count += club.uefaCupWinnersCup.length;
      count += club.uefaSuperCup.length;
    })

    return count;
  }

  function getPositions() {
    const iconPositions = icon.positions;
    let positions = [...iconPositions];
    
    positions = positions.join(' / ');

    return positions;
  }

  return <div className={styles.presentationContainer}>
    <div className={styles.profile}>
      <img className={styles.iconImage} src={getRandom(icon.images)}/>
      <h3 className={styles.profileTitle}>{icon.name}</h3>
      <p className={styles.profileScore}>Fantascore: {icon.fantascore}</p>
    </div>
    <div className={styles.presentationStats} style={borderStyle}>
      <div className={styles.presentationStatsLeft}>
        <div className={styles.smallSVGContainer}>
          <svg className={styles.smallSVG}  viewBox="0 0 20 16"  xmlns="http://www.w3.org/2000/svg">
            <path d="M2 0C0.89 0 0 0.89 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H2ZM2 2H9V4.13C7.24 4.59 6 6.18 6 8C6.00237 8.88584 6.29799 9.74596 6.84072 10.4461C7.38344 11.1462 8.14272 11.6469 9 11.87V14H2V12H5V4H2V2ZM11 2H18V4H15V12H18V14H11V11.87C12.76 11.41 14 9.82 14 8C13.9976 7.11416 13.702 6.25404 13.1593 5.55393C12.6166 4.85381 11.8573 4.35311 11 4.13V2ZM2 6H3V10H2V6ZM17 6H18V10H17V6ZM11 6.27C11.62 6.63 12 7.29 12 8C12 8.71 11.62 9.37 11 9.73V6.27ZM9 6.27V9.73C8.38 9.37 8 8.71 8 8C8 7.29 8.38 6.63 9 6.27Z" />
          </svg>
          <p className={styles.capsText}>{icon.careerGames} (games)</p>
        </div>
        <div className={styles.smallSVGContainer}>
          <svg className={styles.smallSVG}  viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
            <path d="M16.37 1.99H15.4C15.41 1.87 15.42 1.75 15.42 1.63C15.4264 1.41337 15.39 1.1976 15.3127 0.995096C15.2355 0.792593 15.119 0.607346 14.97 0.45C14.8341 0.308355 14.6712 0.195513 14.4908 0.118201C14.3104 0.0408888 14.1163 0.000689874 13.92 0H3.96C3.76224 0.000596768 3.5666 0.0407125 3.38457 0.11799C3.20254 0.195268 3.03779 0.308149 2.9 0.45C2.75065 0.606694 2.63465 0.792064 2.55902 0.994889C2.48339 1.19771 2.4497 1.41378 2.46 1.63C2.46 1.75 2.47 1.87 2.48 1.99H1.5C1.10218 1.99 0.720644 2.14804 0.43934 2.42934C0.158035 2.71064 0 3.09218 0 3.49V5.49C0.00105519 6.64295 0.444602 7.7515 1.23913 8.58697C2.03366 9.42244 3.11856 9.92107 4.27 9.98C5.34 12.28 6.8 13.77 8.44 14.02V16.87H4.44C4.30739 16.87 4.18021 16.9227 4.08645 17.0164C3.99268 17.1102 3.94 17.2374 3.94 17.37C3.94 17.5026 3.99268 17.6298 4.08645 17.7236C4.18021 17.8173 4.30739 17.87 4.44 17.87H13.44C13.5726 17.87 13.6998 17.8173 13.7936 17.7236C13.8873 17.6298 13.94 17.5026 13.94 17.37C13.94 17.2374 13.8873 17.1102 13.7936 17.0164C13.6998 16.9227 13.5726 16.87 13.44 16.87H9.44V14.02C11.08 13.77 12.54 12.28 13.61 9.98C14.7603 9.92027 15.8436 9.42107 16.6364 8.5855C17.4292 7.74993 17.8708 6.64181 17.87 5.49V3.49C17.87 3.09218 17.712 2.71064 17.4307 2.42934C17.1494 2.14804 16.7678 1.99 16.37 1.99ZM1 5.49V3.49C1 3.35739 1.05268 3.23021 1.14645 3.13645C1.24021 3.04268 1.36739 2.99 1.5 2.99H2.54C2.70179 5.01468 3.13224 7.00885 3.82 8.92C3.02576 8.76269 2.31062 8.33489 1.79642 7.70946C1.28222 7.08403 1.00077 6.29967 1 5.49ZM8.94 13.06C6.12 13.06 3.71 8.02 3.46 1.59C3.45419 1.50953 3.46544 1.42874 3.49301 1.35291C3.52058 1.27709 3.56386 1.20794 3.62 1.15C3.66386 1.10365 3.71652 1.06652 3.77489 1.04076C3.83327 1.01501 3.8962 1.00115 3.96 1H13.92C13.9825 1.00026 14.0442 1.01376 14.1011 1.03961C14.158 1.06547 14.2087 1.10309 14.25 1.15C14.3624 1.26854 14.4235 1.42666 14.42 1.59C14.17 8.02 11.76 13.06 8.94 13.06ZM16.87 5.49C16.8664 6.29474 16.5862 7.07377 16.0764 7.69644C15.5666 8.31912 14.8582 8.74759 14.07 8.91C14.7484 7.00014 15.1754 5.01008 15.34 2.99H16.37C16.5026 2.99 16.6298 3.04268 16.7236 3.13645C16.8173 3.23021 16.87 3.35739 16.87 3.49V5.49Z" />
          </svg>
          <p className={styles.capsText}>{getTrophies()}* (trophies)</p>
        </div>
        <div className={styles.smallSVGContainer}>
          <svg className={styles.smallSVG}  viewBox="0 0 50 50"  xmlns="http://www.w3.org/2000/svg">
            <path d="M25 0C20.0555 0 15.222 1.46622 11.1108 4.21326C6.99952 6.96029 3.79521 10.8648 1.90302 15.4329C0.010832 20.0011 -0.484251 25.0277 0.480379 29.8773C1.44501 34.7268 3.82603 39.1814 7.32234 42.6777C10.8187 46.174 15.2732 48.555 20.1227 49.5196C24.9723 50.4842 29.9989 49.9892 34.5671 48.097C39.1352 46.2048 43.0397 43.0005 45.7867 38.8892C48.5338 34.778 50 29.9445 50 25C49.993 18.3717 47.3568 12.017 42.6699 7.33006C37.9831 2.64317 31.6283 0.00699956 25 0ZM26.9231 9.46634L32.8822 5.36779C36.2941 6.74217 39.2908 8.97853 41.5793 11.8582L39.6563 18.3341C39.6082 18.3341 39.5577 18.3582 39.5096 18.375L34.024 20.1562C33.9417 20.1826 33.8614 20.2147 33.7837 20.2524L26.9231 15.5337V9.46634ZM17.125 5.36779L23.0769 9.46634V15.5337L16.2115 20.262C16.1338 20.2243 16.0535 20.1922 15.9712 20.1659L10.4856 18.3846C10.4375 18.3678 10.387 18.3558 10.339 18.3437L8.41587 11.8678C10.7065 8.98296 13.7077 6.74307 17.125 5.36779ZM14 36.399H7.18751C5.19335 33.2985 4.05011 29.7278 3.87261 26.0457L9.16107 21.988C9.20656 22.0081 9.2531 22.0257 9.30049 22.0409L14.7885 23.8245C14.8618 23.8467 14.9365 23.8643 15.012 23.8774L17.6058 31.4303C17.5697 31.4736 17.5337 31.5168 17.5 31.5625L14.1106 36.2284C14.0707 36.2832 14.0338 36.3402 14 36.399ZM30.4543 45.4327C26.8804 46.3846 23.1196 46.3846 19.5457 45.4327L17.1274 38.6058C17.1587 38.5673 17.1923 38.5312 17.2212 38.4904L20.613 33.8221C20.6529 33.7681 20.6898 33.7119 20.7236 33.6538H29.2764C29.3102 33.7119 29.3471 33.7681 29.387 33.8221L32.7789 38.4904C32.8077 38.5312 32.8414 38.5673 32.8726 38.6058L30.4543 45.4327ZM36 36.3918C35.9663 36.333 35.9293 36.276 35.8894 36.2211L32.4976 31.5625C32.4639 31.5168 32.4279 31.4736 32.3918 31.4303L34.9856 23.8774C35.0611 23.8643 35.1358 23.8467 35.2091 23.8245L40.6971 22.0409C40.7445 22.0257 40.791 22.0081 40.8365 21.988L46.125 26.0457C45.9475 29.7278 44.8043 33.2985 42.8101 36.399L36 36.3918Z" />
          </svg>
          <p className={styles.capsText}>{icon.careerGoals} (goals)</p>
        </div>
        <div className={styles.smallSVGContainer}>
        <svg className={styles.smallSVG2}  viewBox="0 0 42 44"  xmlns="http://www.w3.org/2000/svg">
          <path d="M27 12C28.3261 12 29.5979 11.4732 30.5355 10.5355C31.4732 9.59785 32 8.32608 32 7C32 5.67392 31.4732 4.40215 30.5355 3.46447C29.5979 2.52678 28.3261 2 27 2C25.6739 2 24.4021 2.52678 23.4645 3.46447C22.5268 4.40215 22 5.67392 22 7C22 8.32608 22.5268 9.59785 23.4645 10.5355C24.4021 11.4732 25.6739 12 27 12Z" stroke="black" strokeWidth="4" strokeMiterlimit="2"/>
          <path d="M17 44C17.7956 44 18.5587 43.6839 19.1213 43.1213C19.6839 42.5587 20 41.7956 20 41C20 40.2044 19.6839 39.4413 19.1213 38.8787C18.5587 38.3161 17.7956 38 17 38C16.2044 38 15.4413 38.3161 14.8787 38.8787C14.3161 39.4413 14 40.2044 14 41C14 41.7956 14.3161 42.5587 14.8787 43.1213C15.4413 43.6839 16.2044 44 17 44Z" fill="black"/>
          <path d="M22.38 16.9102L18 25.0002M18 25.0002L25.31 31.0202C25.62 31.2602 25.84 31.5902 25.97 31.9602L29 42.0002M18 25.0002L12.51 32.6402C11.97 33.4302 10.95 33.7302 10.07 33.3602L2 30.0002" stroke="black" strokeWidth="4" strokeMiterlimit="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 21.9999H33C32.64 21.9999 32.28 21.9099 31.96 21.7299L28.75 19.9199C24.74 17.5699 20.35 15.9599 15.78 15.1399L12.56 14.5699C12.11 14.4899 11.64 14.5699 11.24 14.7899L5 17.9999" stroke="black" strokeWidth="4" strokeMiterlimit="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
          <p className={styles.capsText}>{getPositions()}</p>
        </div>
      </div>
      <div className={styles.presentationStatsText}>
        <p>{icon.description}</p>
        <p>Retired in: {icon.retired}</p>
        <p>Played for: {icon.careerLength} (years)</p>
      </div>
    </div>
  </div>
}

function IconCountry() {
  const [borderStyle, setBorderStyle] = useState({});
  const { icon } = useSelector((store) => store.oneIcon);
  const pos = icon.positions[0];

  useEffect(() => {
    

    switch(pos) {
      case 'striker':
        setBorderStyle({border: '1px solid #c51605'})
        break;
      case 'forward':
        setBorderStyle({border: '1px solid #c51605'})
        break;
      case 'winger':
        setBorderStyle({border: '1px solid #c51605'})
        break;
      case 'midfielder':
        setBorderStyle({border: '1px solid #a8df8e'})
        break;
      case 'goalkeeper':
        setBorderStyle({border: '1px solid #ffbd64'})
        break;
      case 'defender':
        setBorderStyle({border: '1px solid #279eff'})
        break;
      case 'fullback':
        setBorderStyle({border: '1px solid #279eff'})
        break;
      default:
        setBorderStyle({border: '1px solid #c51605'})
    }
  }, [pos]);

  return <div className={styles.countryContainer}>
    {/********        Stats container        ********/}
    <div className={styles.topScorerStats} style={borderStyle}>

      <div className={styles.scorerContainer}>
        <p className={styles.scorerStat}>Golden Shoe</p>
        <p className={styles.scorerYear}>{ icon.goldenShoe.join(' / ') || 'N / A' }</p>
      </div>
      
      <div className={styles.scorerContainer}>
        <p className={styles.scorerStat}>Champions League Top Scorer</p>
        <p className={styles.scorerYear}>{ icon.championsLeagueTopScorer.join(' / ') || 'N / A' }</p>
      </div>

      <div className={styles.scorerContainer}>
        <p className={styles.scorerStat}>Uefa Cup Top Scorer</p>
        <p className={styles.scorerYear}>{ icon.uefaCupTopScorer.join(' / ') || 'N / A' }</p>
      </div>

      <div className={styles.scorerContainer}>
        <p className={styles.scorerStat}>Uefa Cup Winners Cup Top Scorer</p>
        <p className={styles.scorerYear}>{ icon.uefaCupWinnersCupTopScorer.join(' / ') || 'N / A' }</p>
      </div>

      <div className={styles.scorerContainer}>
        <p className={styles.scorerStat}>World Cup Golden Ball</p>
        <p className={styles.scorerYear}>{ icon.worldCupGoldenBall.join(' / ') || 'N / A' }</p>
      </div>

      <div className={styles.scorerContainer}>
        <p className={styles.scorerStat}>World Cup Top Scorer</p>
        <p className={styles.scorerYear}>{ icon.worldCupTopScorer.join(' / ') || 'N / A' }</p>
      </div>

      <div className={styles.scorerContainer}>
        <p className={styles.scorerStat}>Continental Cup Golden Ball</p>
        <p className={styles.scorerYear}>{ icon.continentalCupGoldenBall.join(' / ') || 'N / A' }</p>
      </div>

      <div className={styles.scorerContainer}>
        <p className={styles.scorerStat}>Continental Cup Top Scorer</p>
        <p className={styles.scorerYear}>{ icon.continentalCupTopScorer.join(' / ') || 'N / A' }</p>
      </div>
    </div>


    {/********        Country container        ********/}
    <div className={styles.countryStats} style={borderStyle}>
      <h3 className={styles.countryTitle}>{icon.country[0]}</h3>
      <div className={styles.countryStatsInner}>
        <div className={styles.countrySmallContainer}>
          <div className={styles.countryStatContainer}>
            <p className={styles.countryStat}>Games</p>
            <p className={styles.countryNumber}>{icon.nationalTeam.gamesPlayed}</p>
          </div>

          <div className={styles.countryStatContainer}>
            <p className={styles.countryStat}>Goals</p>
            <p className={styles.countryNumber}>{icon.nationalTeam.goalsScored}</p>
          </div>

          <div className={styles.countryStatContainer}>
            <p className={styles.countryStat}>World cup goals</p>
            <p className={styles.countryNumber}>{icon.worldCupGoals}</p>
          </div>
        </div>


        <div className={styles.countrySmallContainer}>
          <div className={styles.countryStatContainer}>
            <p className={styles.countryStat}>Continental Cup TOT</p>
            <p className={styles.countryNumber}>{icon.continentalCupTopTOT.join(' / ') || 'N / A'}</p>
          </div>

          <div className={styles.countryStatContainer}>
            <p className={styles.countryStat}>World Cup TOT</p>
            <p className={styles.countryNumber}>{icon.worldCupTopTOT.join(' / ') || 'N / A'}</p>
          </div>
        </div>


        <div className={styles.countrySmallContainer}>
          <h3 className={styles.countrySubtitle}>World cup</h3>

          <div className={styles.countryStatContainer}>
            <p className={styles.countryStat}>Winner</p>
            <p className={styles.countryNumber}>{icon.nationalTeam.worldCup.join(' / ') || 'N / A'}</p>
          </div>

          <div className={styles.countryStatContainer}>
            <p className={styles.countryStat}>Finalist</p>
            <p className={styles.countryNumber}>{icon.nationalTeam.worldCupRunnerup.join(' / ') || 'N / A'}</p>
          </div>

          <div className={styles.countryStatContainer}>
            <p className={styles.countryStat}>Third place</p>
            <p className={styles.countryNumber}>{icon.nationalTeam.worldCupThirdPlace.join(' / ') || 'N / A'}</p>
          </div>
        </div>

        <div className={styles.countrySmallContainer}>
          <h3 className={styles.countrySubtitle}>Euro / Copa America</h3>

          <div className={styles.countryStatContainer}>
              <p className={styles.countryStat}>Winner</p>
              <p className={styles.countryNumber}>{icon.nationalTeam.continentalCup.join(' / ') || 'N / A'}</p>
          </div>

          <div className={styles.countryStatContainer}>
              <p className={styles.countryStat}>Finalist</p>
              <p className={styles.countryNumber}>{icon.nationalTeam.continentalCupRunnerup.join(' / ') || 'N / A'}</p>
          </div>

          <div className={styles.countryStatContainer}>
              <p className={styles.countryStat}>Third place</p>
              <p className={styles.countryNumber}>{icon.nationalTeam.continentalCupThirdPlace.join(' / ') || 'N / A'}</p>
          </div>
        </div>
      </div>
    </div>

 </div>
}

function IconBallonDor() {
  const [borderStyle, setBorderStyle] = useState({});
  const { icon } = useSelector((store) => store.oneIcon);
  const pos = icon.positions[0];

  useEffect(() => {
    switch(pos) {
      case 'striker':
        setBorderStyle({border: '1px solid #c51605'})
        break;
      case 'forward':
        setBorderStyle({border: '1px solid #c51605'})
        break;
      case 'winger':
        setBorderStyle({border: '1px solid #c51605'})
        break;
      case 'midfielder':
        setBorderStyle({border: '1px solid #a8df8e'})
        break;
      case 'goalkeeper':
        setBorderStyle({border: '1px solid #ffbd64'})
        break;
      case 'defender':
        setBorderStyle({border: '1px solid #279eff'})
        break;
      case 'fullback':
        setBorderStyle({border: '1px solid #279eff'})
        break;
      default:
        setBorderStyle({border: '1px solid #c51605'})
    }
  }, [pos]);
 return <div className={styles.ballonContainer} style={borderStyle}>
            <h3 className={styles.ballonTitle}>Ballon d&apos;Or</h3>
            
            <div className={styles.ballonInner}>
            <div className={styles.ballonSmallContainer}>
                  <div className={styles.ballonPrize}>
                    <p className={styles.ballonPosition}>Winner</p>
                    <p className={styles.ballonYears}>{icon.ballonDor.winner.join(' / ') || 'N / A'}</p>
                  </div>
                  <div className={styles.ballonPrize}>
                    <p className={styles.ballonPosition}>Finalist</p>
                    <p className={styles.ballonYears}>{icon.ballonDor.secondPlace.join(' / ') || 'N / A'}</p>
                  </div>
                  <div className={styles.ballonPrize}>
                    <p className={styles.ballonPosition}>Third place</p>
                    <p className={styles.ballonYears}>{icon.ballonDor.thirdPlace.join(' / ') || 'N / A'}</p>
                  </div>
                  <div className={styles.ballonPrize}>
                    <p className={styles.ballonPosition}>Fourth place</p>
                    <p className={styles.ballonYears}>{icon.ballonDor.fourthPlace.join(' / ') || 'N / A'}</p>
                  </div>
                  <div className={styles.ballonPrize}>
                    <p className={styles.ballonPosition}>Fifth place</p>
                    <p className={styles.ballonYears}>{icon.ballonDor.fifthPlace.join(' / ') || 'N / A'}</p>
                  </div>
            </div>
            <div className={styles.ballonSmallContainer}>
                <div className={styles.ballonPrize}>
                  <p className={styles.ballonPosition}>Sixth place</p>
                  <p className={styles.ballonYears}>{icon.ballonDor.sixthPlace.join(' / ') || 'N / A'}</p>
                </div>
                <div className={styles.ballonPrize}>
                  <p className={styles.ballonPosition}>Seventh place</p>
                  <p className={styles.ballonYears}>{icon.ballonDor.seventhPlace.join(' / ') || 'N / A'}</p>
                </div>
                <div className={styles.ballonPrize}>
                  <p className={styles.ballonPosition}>Eighth place</p>
                  <p className={styles.ballonYears}>{icon.ballonDor.eighthPlace.join(' / ') || 'N / A'}</p>
                </div>
                <div className={styles.ballonPrize}>
                  <p className={styles.ballonPosition}>Nineth place</p>
                  <p className={styles.ballonYears}>{icon.ballonDor.ninethPlace.join(' / ') || 'N / A'}</p>
                </div>
                <div className={styles.ballonPrize}>
                  <p className={styles.ballonPosition}>Tenth place</p>
                  <p className={styles.ballonYears}>{icon.ballonDor.tenthPlace.join(' / ') || 'N / A'}</p>
                </div>
            </div>
            </div>

            <div className={styles.ballonPrize} style={{maxWidth:'80%', alignSelf:'center'}}>
              <p className={styles.ballonPosition}>Nominations</p>
              <p className={styles.ballonYears} style={{maxWidth:'70%'}}>{icon.ballonDor.nominations.join(' / ') || 'N / A'}</p>
            </div>
</div>
}

export default Icon;
