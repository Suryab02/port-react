import React from "react";
import styles from "./first.module.css";


function FirstFrame() {
  
  return (
    <div>
      <section id={styles.herosection}>
        <video id={styles.videobackground} autoPlay loop muted>
          <source src="/video/sky.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.navbar}>
        
          <ul className={styles.navbarLinks}>
            <li className={styles.active}>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.centered}>        
        <h4>Surya Prabhas Bandaru</h4>
        </div>
      </section>
    </div>
  );
}

export default FirstFrame;
