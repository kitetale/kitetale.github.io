import React from "react";
import {
  content,
  title,
  hello,
  frame,
  photo,
  aboutMe,
  connect,
} from "./AboutPage.module.css";
import me from "../images/me.png";
import email from "../images/email.png";
import insta from "../images/insta.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import AppHeader from "../component/AppHeader/AppHeader";


const AboutPage = () => {
  return (
    <div>
      <AppHeader/>
    
    <div className={content}>
      
      <div className={title}>
        <div className={hello}>"Hello! I'm Ashley."</div>
        ABOUT
      </div>
      <div className={frame}>
        <div>
          <img src={me} alt="Photo of Ashley Kim" className={photo} />
        </div>
        <div className={aboutMe}>
          <p>
            I'm a senior at Carnegie Mellon University, <br />
            studying Computer Science and Arts. I'm pursuing <br />
            an additional major in Human-Computer Interaction as well.
          </p>
          <p>
            My main interests are interactive design, visual effects, and
            immersive entertainment.
          </p>
          <p>
            In my free time, I enjoy visiting museums, galleries, and art fairs.
            Let me know if you have any exhibition recommendations both
            on/offline!
          </p>
          <div className={connect}>
            <a href="mailto:kitetale248@gmail.com">
              <img scr={email} alt="email: kitetale248@gmail.com" />
            </a>
            <a href="https://www.instagram.com/kitetale/">
              <img scr={insta} alt="Instagram: @kitetale" />
            </a>
            <a href="https://github.com/kitetale">
              <img scr={github} alt="Github: @kitetale" />
            </a>
            <a href="https://www.linkedin.com/in/ashleykim8170">
              <img scr={linkedin} alt="LinkedIn: /ashleykim8170" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
