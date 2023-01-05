import * as React from "react"
import { Link } from "gatsby"
import AppHeader from "../component/AppHeader/AppHeader";
import AppFooter from "../component/AppFooter/AppFooter";
import {overall, content2, fullsize} from "./AboutPage.module.css";
import Questions from "../component/three-question";
import {Helmet} from 'react-helmet';
import favicon from "../images/favicon.png";


const aStyles = {
  color: '#ffa53e'
}

// markup
const NotFoundPage = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
        <title>Ashley Kim | 404</title>
      </Helmet>
      <div className={overall}>
        <AppHeader />
        <div className={fullsize}>
          <Questions/>
        </div>
        <div className={content2}>
        <title>Not found</title>
        <h1>Page not found</h1>
        <h3>
          Sorry, the page you're trying to access either doesn't exist or is currently under construction. <br/>Please try again in a few days or <a style={aStyles}href="mailto:kitetale248@gmail.com">contact me </a> about the project you're looking for!
        </h3>
        </div> 
      </div>
      <AppFooter/>
    </div>
  )
}

export default NotFoundPage
