import React from 'react';
import AppHeader from "../component/AppHeader/AppHeader";
import {fullsize} from "./LandingPage.module.css"

import ThreeLazy from '../component/three-lazy';

const LandingPage = () => {
  return (
    <div>
      <AppHeader />
        <div className={fullsize} >
          <ThreeLazy />
        </div>
    </div>
  );
};

export default LandingPage;