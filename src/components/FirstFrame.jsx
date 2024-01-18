import React from "react";
import styles from "./first.module.css";

function FirstFrame() {
  return (
    <div>
      <section id={styles.herosection}>
        <video id={styles.videobackground} autoPlay loop muted>
          <source
            src="/video/sky.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h1 id={styles.heroname}>Surya Prabhas Bandaru</h1>
      </section>
    </div>
  );
}

export default FirstFrame;
