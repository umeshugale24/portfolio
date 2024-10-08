import React from "react";
import { getImageUrl } from "../../utils";
import resume from "/assets/resume/Umesh_Ugale_CV.pdf";
import styles from "./Hero.module.css";

export const Hero = () =>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title }>
                Hii, I am Umesh.
            </h1>
            <p className={styles.description}>
                I am Salesforce Developer with over 2 years of experience in CRM development, customization, and data migration. I have a strong proficiency in Java, React, and C++, with hands-on experience working on full-stack projects involving React and JavaScript, NodeJS.
                Reach out if you'd like to learn more.
            </p>
            <a href="mailto:umeshugale24@gmail.com" className={styles.contactBtn}>Contact Me</a>
            
            <a href={resume} download="Umesh Ugale Resume" className={styles.resumeBtn}>Download My Resume</a>
                
        </div>
        <img src={getImageUrl("hero/umesh.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>;
} 