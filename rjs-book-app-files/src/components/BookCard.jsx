import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import styles from "./BookCard.module.css";

function BookCard({ data, handleLikedList }) {
  const { title, author, image, language, pages } = data;
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handleLikedList(data, like);
    setLike((like) => !like);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <AiFillHeart className={like ? styles.isliked : styles.notliked} />
      </button>
    </div>
  );
}

export default BookCard;
