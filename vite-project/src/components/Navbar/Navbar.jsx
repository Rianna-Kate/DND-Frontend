import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <nav className={styles.navbar}>
        <div className={styles.menu}>
            <img 
            className={styles.menuBtn} 
            src={menuOpen 
                ? getImageUrl("nav/closeMenu.png")
                : getImageUrl("nav/openMenu.png")} 
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul 
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
            >
                <Link to="/Spell-Search">
                    <li className={styles.btnDonate}> By Spellname </li>
                </Link>

                <Link to="/Class-Search">
                    <li className={styles.btnDonate}> By Class </li>
                </Link>

                <Link to="/Level-Search">
                    <li className={styles.btnDonate}> By Level </li>
                </Link>
            </ul>
        </div>
    </nav>
}