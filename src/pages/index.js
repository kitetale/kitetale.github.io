import React from 'react';
import AppHeader from "../component/AppHeader/AppHeader";
import {fullsize} from "./LandingPage.module.css"

import ThreeLazy from '../component/three-lazy';
import Shapes from '../component/three-main';
//import Type from '../component/type-cloud';

const LandingPage = () => {
  return (
    <div>
      <AppHeader />
        <div className={fullsize} >
          {/* <Type/> */}
          {/* <ThreeLazy/> */}
          <Shapes/>
        </div>
    </div>
  );
};

export default LandingPage;