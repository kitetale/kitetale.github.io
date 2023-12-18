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
  center,
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
            <span className={hello}>Hello! I'm Ashley.</span>
            <span>ABOUT</span>
          </div>
          <div className={frame}>
            <div className={center}>
              <img src={me} alt="Photo of Ashley Kim" className={photo} />
            </div>
            <div className={aboutMe}>
              <p>
                I'm an AR/VR engineer at Apple, working as part of the&nbsp; 
                <a href="https://www.apple.com/apple-vision-pro/"> Vision
                Products Group</a>. Previously, I was at Carnegie Mellon 
                University studying Computer Science and Arts with an 
                additional major in Human-Computer Interaction.
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
                  <img src={email} className={connectLogo} alt="kitetale248@gmail.com" />
                </a>
                <a href="https://www.instagram.com/kitetale/">
                  <img src={insta} className={connectLogo} alt="Instagram: @kitetale" />
                </a>
                <a href="https://github.com/kitetale">
                  <img src={github} className={connectLogo} alt="Github: @kitetale" />
                </a>
                <a href="https://www.linkedin.com/in/ashleykim8170">
                  <img src={linkedin} className={connectLogo} alt="LinkedIn: /ashleykim8170" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={footer}>(ง˙∇˙)ว © 2023 Ashley Kim (ว˙∇˙)ง</footer>
      <footer className={footDescrip}>
        Built with Gatsby {"&"} React! Last updated on September 5, 2023.
      </footer>
    </div>
  );
};

export default AboutPage;
