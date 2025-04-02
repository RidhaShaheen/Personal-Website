
        import React from "react";
        import styles from "./Education.module.css";
        
        const Education = () => {
          return (
            <section className={styles.container}>
              <h1 className={styles.title}>Education and Achievements</h1>
              
      <img
          className={styles.image}
          src="school.png"
          alt="About Me"
        />
        <h2 className={styles.header2}>Currently a high school student at Kitchener Collegiate Institute (KCI)</h2>

              <div className={styles.content}>
                <img
                  className={styles.image}
                  src="IMG_1922 1.png"
                  alt="About Me"
                />
                <div>
                  <h2 className={styles.header}>KCI Stem Competition — Organizer</h2>
                  <ul>
                    <li className={styles.list}>
                      Played a part in the planning and organization of the annual STEM Competition at KCI.
                    </li>
                    <li className={styles.list}>
                      Directed the Physics event, ensuring smooth execution and active student engagement.
                    </li>
                  </ul>
                </div>
              </div>
        
              <div className={styles.content3}>
                <div>
                  <h2 className={styles.header}>KCI Student Wellness Team</h2>
                  <ul>
                    <li className={styles.list}>
                      Being part of the KCI Student Wellness Team has been a transformative experience, inspiring my passion for mental health advocacy.
                    </li>
                    <li className={styles.list}>
                      Attending the WRDSB Student Wellness Conference sparked new ideas and strengthened my commitment to supporting student well-being.
                    </li>
                    <li className={styles.list}>
                      I had the honor of serving as a panel speaker at the event, sharing insights and engaging with students and educators about key mental health topics.
                    </li>
                    <li className={styles.list}>
                      I am now proud to be part of the planning team for the next Wellness Conference, working to create an impactful event that empowers students across our district.
                    </li>
                  </ul>
                </div>
              
              </div>
        
              <div className={styles.content}>
                <img
                  className={styles.image}
                  src="IMG_0487 2.png"
                  alt="About Me"
                />
                <div>
                  <h2 className={styles.header}>BattleSTEM 2024 - Guelph</h2>
                  <ul>
                    <li className={styles.list}>
                      I had the exciting opportunity to participate in Battle STEM Guelph, an impressive showcase of talent and innovation.
                    </li>
                    <li className={styles.list}>
                      With 32 participating schools and nearly a thousand high school students on campus, the energy and creativity were unparalleled. Participating in Battle STEM Guelph, I developed essential skills such as teamwork, problem-solving, and critical thinking.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          );
        };
        
        export default Education;
        