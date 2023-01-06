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
  connectLogo,
  footDescrip,
  footer,
} from "./AboutPage.module.css";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import me from "../images/me.png";
import email from "../images/email.svg";
import insta from "../images/insta.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import AppHeader from "../component/AppHeader/AppHeader";
import AppFooter from "../component/AppFooter/AppFooter";
import {Helmet} from 'react-helmet';
import favicon from "../images/favicon.png";

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
        <title>Ashley Kim | About</title>
      </Helmet>
      <div className={overall}>
        <AppHeader />

        <div className={content}>
          <div className={title}>
            <div className={hello}>Hello! I'm Ashley.</div>
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
                  <img src={email} alt="kitetale248@gmail.com" />
                </a>
                <a href="https://www.instagram.com/kitetale/">
                  <img src={insta} alt="Instagram: @kitetale" />
                </a>
                <a href="https://github.com/kitetale">
                  <img src={github} alt="Github: @kitetale" />
                </a>
                <a href="https://www.linkedin.com/in/ashleykim8170">
                  <img src={linkedin} alt="LinkedIn: /ashleykim8170" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={footer}>(ง˙∇˙)ว © 2023 Ashley Kim (ว˙∇˙)ง</footer>
      <footer className={footDescrip}>
        Built with Gatsby {"&"} React! Last updated on December 30, 2022.
      </footer>
    </div>
  );
};

export default AboutPage;