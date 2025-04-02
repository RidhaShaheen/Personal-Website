import React from "react";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
    <nav className={styles.navbar}> 
        <a className={styles.title} href="/">
        Ridha Shaheen Shahul Hameed</a>

    <div className={styles.menu}>
        <ul className={styles.menuitems}>
            <li>
                <Link to = "/aboutMe">About Me</Link>
            </li>
            <li>
                <Link to="/experience">Experience</Link>
            </li>
            <li>
                <Link to="/education">Education and Achievements</Link>
            </li>

        </ul>
    </div>
</nav>
    );
};