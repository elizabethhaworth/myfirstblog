import React from "react";
import classes from "../styles/layout.module.css";
import Image from 'next/image';

function Layout({ children }) {
  return (
    <>
      <div className={classes.profileWrapper}>  
        <div className={classes.profileImageWrapper}></div>
            {classes.profileImage} - <Image className={classes.profileImage} src="/profile-image.jpeg" width={150} height={150} /><div>
              <div className={classes.profileTextWrapper}>
                <p className={classes.profileNameText}>Elizabeth Haworth</p>
              </div>
        </div>         
        <div className={classes.container}>{children}</div>
      </div>,
    </>
 )
}
export default Layout;
