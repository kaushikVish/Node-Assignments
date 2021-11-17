import React from "react";
import { NavLink } from "react-router-dom";
import styles from './MainNavigation.module.css';

const MainNavigation = () =>{
    return(
        <header className={styles.header}>
            <div className={styles.logo}>Vishal Kaushik</div>
            <nav className={styles.nav}>
                <ul>
                    <li><NavLink to="/home" activeClassName={styles.active}>Home</NavLink></li>
                    <li><NavLink to="/add-user" activeClassName={styles.active}>Add User</NavLink></li>
                    <li><NavLink to="/about" activeClassName={styles.active}>About</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;