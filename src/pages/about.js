import React from "react";
import {
  overall,
  content,
  title,
  hello,
  frame,
  photo,
  aboutMe,
  connect,
  footDescrip,
  footer
} from "./AboutPage.module.css";
import me from "../images/me.png";
import email from "../images/email.png";
import insta from "../images/insta.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import AppHeader from "../component/AppHeader/AppHeader";
import AppFooter from "../component/AppFooter/AppFooter";

const AboutPage = () => {
  return (
    <div>
      <div className={overall}>
        <AppHeader />

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
                I'm a senior at Carnegie Mellon University, studying Computer
                Science and Arts with an additional major in Human-Computer
                Interaction.
              </p>
              <p>
                Anything between Art and Computer Science is of my interest!
                Among the vast range of Art and CS, I'm particularly drawn to
                real-time interaction, visual effects, and immersive media.
              </p>
              <p>
                In my free time, I enjoy visiting museums, galleries, and art
                fairs. Let me know if you have any exhibition recommendations
                both on/offline!
              </p>
              <h3>You can reach me through..</h3>
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
      <footer className={footer}>(ง˙∇˙)ว © 2023 Ashley Kim (ว˙∇˙)ง</footer>
      <footer className={footDescrip}>
        Built with Gatsby {"&"} React! Last updated in January 2023.
      </footer>
    </div>
  );
};

export default AboutPage;
