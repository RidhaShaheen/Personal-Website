import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import styles from "./AboutMe.module.css";

const AboutMe = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>About Me</h1>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h2 className={styles.header}>Hello!</h2>
                    <div className={styles.description}>
                        <p>
                            My name is Ridha Shaheen Shahul Hameed, but you can call me Ridha. I'm a dedicated high school student from Waterloo, Ontario, with a growing passion for programming and innovation. I enjoy tackling challenges, whether it's through coding, collaborating on projects, or exploring emerging technologies like AI. I'm always open to learning new skills and contributing to meaningful solutions that make a difference.
                        </p>
                        <Link to="/experience">
                            <button className={styles.button}>Experience</button>
                        </Link>
                        <Link to="/education">
                            <button className={styles.button}>Education</button>
                        </Link>
                    </div>
                </div>
            </div>
            <h2 className={styles.header2}>Beyond my love for tech, I enjoy spending time with pet bird - Kiwi, contributing to my community and going biking!</h2>
            <div className={styles.imgc}>
                <img
                    className={styles.image2}
                    src="Screenshot 2025-04-01 134149.png"
                    alt="About Me"
                />
                <img
                    className={styles.image2}
                    src="d766c6c5-7508-49fe-929d-65fae169c705.jpg"
                    alt="About Me"
                />
                <img
                    className={styles.image2}
                    src="IMG_20240626_132712425_HDR.jpg"
                    alt="About Me"
                />
            </div>
            <h2 className={styles.header3}>Goals and Aspirations</h2>
            <div className={styles.imgd}>
                <img
                    className={styles.image3}
                    src="PI_2023.06.20_best-worst-digital-2035_featured.png"
                    alt="About Me"
                />
                <img
                    className={styles.image3}
                    src="download.png"
                    alt="About Me"
                />
            </div>
            <p className={styles.desp}>
                I strive to create meaningful contributions in the ever-evolving field of technology by combining my passion for programming, artificial intelligence, and innovation. My goal is to develop ethical AI solutions, design tools that foster community growth, and advocate for inclusivity in STEM education. I’m dedicated to continuous learning and personal growth, embracing challenges and opportunities in dynamic environments. By collaborating with others who share my vision, I hope to help shape a future driven by creativity, responsibility, and technological advancement.
            </p>
        </section>
    );
};

export default AboutMe;
