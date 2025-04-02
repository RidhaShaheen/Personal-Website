import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Experience</h1>
      
      <div className={styles.content}>
        <h2 className={styles.header}>
          Games Institute, University of Waterloo — High School Co-op
        </h2>
        <ul>
          <li className={styles.list}>
            Assisting with the research project "The Future of Machine Learning: Free-range Game Sourcing a Rhetorical Figure Database"
          </li>
          <li className={styles.list}>
            Supporting the development of the citizen science game "GoFigure" to ethically source rhetorical figures for machine learning training datasets.
          </li>
        </ul>
      </div>
      
      <div className={styles.content2}>
        <div className={styles.content}>
          <h2 className={styles.header}>SHAD — Alumna</h2>
          <ul>
            <li className={styles.list}>
              Participated in an intensive month-long enrichment program focusing on STEM, entrepreneurship, and leadership.
            </li>
            <li className={styles.list}>
              Collaborated with a diverse team to create an innovative solution for a real-world problem.
            </li>
          </ul>
        </div>
        <img
          className={styles.image}
          src="Screenshot 2025-03-31 192011.png"
          alt="About Me"
        />
      </div>
      
      <div className={styles.content}>
        <h2 className={styles.header}>LAUNCH Waterloo — Assistant Coach</h2>
        <ul>
          <li className={styles.list}>
            Organized coding workshops for elementary students and mentored them in project development.
          </li>
          <li className={styles.list}>
            Supported programs like LAUNCH Code Club, LAUNCH STEAM, and events like the Family Day at UW.
          </li>
          <li className={styles.list}>
            Empowered young learners by fostering a love for STEAM and promoting technological inclusivity.
          </li>
        </ul>
      </div>
      
      <div className={styles.content2}>
        <div className={styles.content}>
          <h2 className={styles.header}>Youth Tech Labs — Participant</h2>
          <ul>
            <li className={styles.list}>
              Active participant in Canada’s first youth-driven AI literacy organization.
            </li>
            <li className={styles.list}>
              Collaborated on projects that enhance understanding and application of AI.
            </li>
            <li className={styles.list}>
              Secured first place by developing and presenting an innovative AI solution.
            </li>
          </ul>
        </div>
        <img
          className={styles.image}
          src="YTLwin.png"
          alt="About Me"
        />
      </div>
      
      <div className={styles.content}>
        <h2 className={styles.header}>Engineering Science Quest (LIT) — Volunteer</h2>
        <ul>
          <li className={styles.list}>
            Built leadership skills through group problem-solving, program development, and delivery.
          </li>
          <li className={styles.list}>
            Gained hands-on experience working with children and completed volunteer service hours.
          </li>
        </ul>
      </div>
      
      <div className={styles.content2}>
        <div className={styles.content}>
          <h2 className={styles.header}>Technovation Girls - Participant</h2>
          <ul>
            <li className={styles.list}>
              Participated in the global Technovation Girls program, gaining hands-on experience in designing and developing innovative tech solutions.
            </li>
            <li className={styles.list}>
              Collaborated with a team to create impactful projects aimed at solving real-world challenges.
            </li>
          </ul>
        </div>
        <img
          className={styles.image}
          src="Screenshot 2025-03-31 193111.png"
          alt="About Me"
        />
      </div>
      
      <div className={styles.content}>
        <h2 className={styles.header}>
          IAM Elementary School — Website Design Volunteer
        </h2>
        <ul>
          <li className={styles.list}>
            Assisting in the designing process of a website for a startup elementary school located in Markham as a volunteer.
          </li>
        </ul>
      </div>
      
      <div className={styles.content3}>
        <div className={styles.content}>
          <h2 className={styles.header}>Certifications</h2>
          <ul>
            <li className={styles.list}>First Aid and CPR/AED level C (BL)</li>
            <li className={styles.list}>Elevate Your Personal Brand - SHAD</li>
            <li className={styles.list}>AL Ethics: An Introduction - SHAD</li>
            <li className={styles.list}>Mandatory Co-op Health and Safety Training</li>
          </ul>
        </div>
        <div className={styles.content}>
          <h2 className={styles.header}>Awards</h2>
          <ul>
            <li className={styles.list}>
              Canadian Math Kangaroo Contest - Waterloo Regional First Place Winner in Grade 10
            </li>
            <li className={styles.list}>Canadian Math Kangaroo Contest - Waterloo Region Third Place Winner in Grade 9</li>
            <li className={styles.list}>
              Youth Tech Labs - First Place Winner in AI Pitching Competition
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
