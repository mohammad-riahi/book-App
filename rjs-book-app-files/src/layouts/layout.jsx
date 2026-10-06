import styles from "./layout.module.css"

function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://gamefa.com">Mohammad Riahi</a> | Made By React.Js
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Mohammad with ❤️</p>
      </footer>
    </div>
  );
}

export default Layout;
