import styles from "./SearchBox.module.css";
import { RiSearchLine } from "react-icons/ri";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search Title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchHandler}>
        <RiSearchLine className={styles.search_icon} />
      </button>
    </div>
  );
}

export default SearchBox;
