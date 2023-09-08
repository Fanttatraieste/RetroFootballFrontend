import styles from "./FantasList.module.css";
import SearchForm from "./SearchForm";
import QueriedIcons from "./QueriedIcons";
import Pages from "./Pages";

function FantasList() {
  return (
    <div className={styles.iconContainer}>
      <SearchForm />
      <Pages />
      <QueriedIcons />
      <Pages />
    </div>
  );
}

export default FantasList;
