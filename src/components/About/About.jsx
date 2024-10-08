import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
export const About = () => {

    return (
    
    <section className={styles.container} id="about"> 
       <h2 className={styles.title}> About </h2>
       <div className={styles.content}>
        <img src={getImageUrl("about/about.png")} 
        alt="Me sitting with laptop" 
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I am Frontend Developer proficient in React.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I have experience in developing fast API's.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/salesforce.png")} height={120} alt="Salesforce Icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Salesforce Developer</h3>
                    <p>I have 2+ years of experience in developing and configuring solutions in Sales & CPQ cloud.</p>
                </div>
            </li>
            
        </ul>
       </div>
    </section>
    
);
};