import React from "react";
import { foot, footer, footDescrip } from "./AppFooter.module.css";

const AppFooter = () => {
  return (
    <div className={foot}>
      <footer className={footer}>(ง˙∇˙)ว © 2023 Ashley Kim (ว˙∇˙)ง</footer>
      <footer className={footDescrip}>
        Built with Gatsby {"&"} React! Last updated in January 2023.
      </footer>
    </div>
  );
};

export default AppFooter;
