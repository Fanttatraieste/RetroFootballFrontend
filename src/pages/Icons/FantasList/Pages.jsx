import { useSelector } from "react-redux";

import styles from "./Pages.module.css";
import { useEffect, useState } from "react";

function Pages() {
  const iconForm = useSelector((store) => store.icons);
  const { page, limit } = iconForm;
  const results = 70;

  const [pageList, setPageList] = useState([]);

  useEffect(() => {
    const first = 1;
    const last =
      results % limit === 0 ? results / limit : Math.floor(results / limit + 1);

    console.log(results);

    let pg = [];
    pg.push(first);

    if (last <= 5) {
      for (let i = 2; i < last; i++) pg.push(i);
    } else if (page <= 4) {
      for (let i = 2; i <= 4; i++) pg.push(i);
    } else if (page >= last - 3) {
      for (let i = page; i < last; i++) pg.push(i);
    } else {
      pg.push(page - 1);
      pg.push(page);
      pg.push(page + 1);
    }

    pg.push(last);

    setPageList(pg);
  }, [results, page, limit]);

  return (
    <ul className={styles.pages}>
      {pageList.map((page) => (
        <li className={styles.pageDiv} key={page}>
          {page}
        </li>
      ))}
    </ul>
  );
}

export default Pages;
