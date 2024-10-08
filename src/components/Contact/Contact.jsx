import React from "react";
import { getImageUrl } from "../../utils";
import styles from "../Contact/Contact.module.css"

export const Contact = () => {

    return ( 
    <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel Free to reach out!!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/email.png")} alt="Email Icon" />
                <a href="mailto:umeshugale24@gmail.com">umeshugale24@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/umeshugale45/">linkedin.com/umesh</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/github.png")} alt="GitHub Icon" />
                <a href="https://github.com/umeshugale24">github.com/umesh</a>
            </li>
        </ul>
    </footer>
    );
};