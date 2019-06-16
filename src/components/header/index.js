import React from "react";

import styles from "./header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className={styles.content}>
            <span className={styles.logo}>Gatsby React Boilerplate</span>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                <li className={styles.navListItem}>
                  <a href="#features">Features</a>
                </li>
                <li className={styles.navListItem}>
                  <a href="#howto">How To</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
