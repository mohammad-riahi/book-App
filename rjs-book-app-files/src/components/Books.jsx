import { useState } from "react";
import { books as bookData } from "../constants/mockData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";
import styles from "./Books.module.css";
import SearchBox from "./SearchBox";

function Books() {
  const [searchedBooks, setSearchedBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState("");

  const handleLikedList = (book, status) => {
    if (status == false) {
      setLiked((liked) => [...liked, book]);
    } else {
      const newLikedList = liked.filter((item) => item.id !== book.id);
      setLiked(newLikedList);
    }
  };

  const searchHandler = () => {
    const newBooks = bookData.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase()),
    );
    setSearchedBooks(newBooks);
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {searchedBooks.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              handleLikedList={handleLikedList}
            />
          ))}
        </div>
        <div>
          {!!liked.length && (
            <div className={styles.favorite}>
              <h3>Favourites</h3>
              {liked.map((book) => (
                <SideCard key={book.id} data={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Books;
