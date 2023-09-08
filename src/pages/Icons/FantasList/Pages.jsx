import { useDispatch, useSelector } from "react-redux";

import styles from "./Pages.module.css";
import { useEffect, useState } from "react";
import { setPage } from "../../../utils/iconsSlice";

function Pages() {
  const iconForm = useSelector((store) => store.icons);
  const dispatch = useDispatch();
  const { results, page, limit } = iconForm;
  const first = 1;
  const last =
    results % limit === 0 ? results / limit : Math.floor(results / limit + 1);

  const [pageList, setPageList] = useState([]);

  function handleSetPage(event) {
    const pageCircle = event.currentTarget.value;

    if (pageCircle * 1 === page || pageCircle === 0) return;

    console.log(pageCircle);

    if (pageCircle === -1) {
      // console.log("stanga");
      if (page === 1) return;
      dispatch(setPage(page - 1));

      return;
    }

    if (pageCircle === -2) {
      // console.log("dreapta");
      if (page === last) return;
      dispatch(setPage(page + 1));

      return;
    }

    dispatch(setPage(pageCircle * 1));
  }

  useEffect(() => {
    // console.log(results);
    setPageList([]);

    if (first === last) {
      setPageList([`${first}`]);
      return;
    }

    let pg = [];
    pg.push("<");
    pg.push(`${first}`);

    if (last <= 5) {
      for (let i = 2; i < last; i++) pg.push(`${i}`);
    } else if (page <= 4) {
      for (let i = 2; i <= 4; i++) pg.push(`${i}`);
      pg.push("...");
    } else if (page >= last - 3) {
      pg.push("...");
      for (let i = page === last - 3 ? page : last - 3; i < last; i++)
        pg.push(`${i}`);
    } else {
      pg.push("...");
      pg.push(`${page - 1}`);
      pg.push(`${page}`);
      pg.push(`${page + 1}`);
      pg.push("...");
    }

    pg.push(`${last}`);
    pg.push(">");

    console.log(pg);
    setPageList(pg);
  }, [results, page, limit]);

  return (
    <ul className={styles.pages}>
      {pageList.map((pageCircle, index) => (
        <li
          onClick={handleSetPage}
          value={pageCircle === "<" ? -1 : pageCircle === ">" ? -2 : pageCircle}
          className={
            page === pageCircle * 1
              ? styles.pageDivActive
              : "..." === pageCircle
              ? styles.dots
              : styles.pageDiv
          }
          key={index}
        >
          {pageCircle}
        </li>
      ))}
    </ul>
  );
}

export default Pages;
