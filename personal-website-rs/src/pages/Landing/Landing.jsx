import React from "react";
import styles from "./Landing.module.css";

const Landing = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I’m Ridha —</h1>
                <p className={styles.description}>
                    A passionate high school student with a knack for programming, AI, and innovation. Welcome to my personal website! This is where I share my passion for programming, AI, and innovation, along with a glimpse into my journey as a high school student exploring the exciting world of technology. Feel free to look around and discover more about my experience, interests, and the ideas that drive me forward. Thanks for stopping by!
                </p>
            </div>
            <div className={styles.icons}>
                {/* LinkedIn Profile Link */}
                <a 
                    href="https://www.linkedin.com/in/ridha-shaheen-shahul-hameed-b674212aa/?originalSubdomain=ca" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzyzhou.design%2Fimage%2Flinkedin2.png&f=1&nofb=1&ipt=c8581376e3fb2bc967ad9badd4e7986b2025b7ba82869662b72fa073918775c7&ipo=images"
                        alt="LinkedIn Icon"
                        className={styles.linkedinIcon}
                    />
                </a>
                {/* GitHub Profile Link */}
                <a 
                    href="https://github.com/RidhaShaheen" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogolook.net%2Fwp-content%2Fuploads%2F2022%2F12%2FGitHub-Emblem.png&f=1&nofb=1&ipt=6e967199d4efbd39f2ab45549e8d6f742becc8d5300a4a8ea08f62fc5b77bbb8&ipo=images"
                        alt="GitHub Icon"
                        className={styles.githubIcon}
                    />
                </a>
            </div>
        </section>
    );
};

export default Landing;
