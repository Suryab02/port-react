import React from "react";
import styles from "./first.module.css";
import Typewriter from "typewriter-effect"; // Import Typewriter from the correct package

function FirstFrame() {
  return (
    <div>
      <section id={styles.herosection}>
        <video id={styles.videobackground} autoPlay loop muted>
          <source src="/video/sky.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.navbar}>
          <div className={styles.name}>Surya Prabhas Bandaru</div>
          <ul className={styles.navbarLinks}>
            <li className={styles.active}>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.centered}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("HEY I'M")
                .pauseFor(1000)
                .deleteAll()
                .typeString("SURYA PRABHAS BANDARU")
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default FirstFrame;
