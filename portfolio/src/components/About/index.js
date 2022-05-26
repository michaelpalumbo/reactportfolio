import coverImage from "../../assets/palumbo_dev.jpeg";

import React from 'react';

function About() {
    return (
      <section className="my-5">
        <h1 id="about">About Me</h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        <p>
        Michael Palumbo (BFA, MA) is an electroacoustic music improviser, teacher, and developer. His PhD research spans distributed creativity, temporality, and version control systems. 
        </p>
        <p>
        Michael has presented his research internationally, including in the Journal of New Music Research and at such conferences as ISEA, NIME, Expo ’74, AES, and Network Music Festival. 
        </p>
     
      </section>
    );
  }
  
  export default About;