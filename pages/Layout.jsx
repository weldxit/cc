import React from "react";
import Link from "next/link";
import style from '../styles/layout.module.css'

const Layout = (props) => {
  return (
  <div>
    <div className={style.navbar}>
      <div className={style.logo}>LOGO</div>
      <div className={style.navcontainer}>
    <Link href={'/Home'} className={style.navbutton} >Home</Link>
      <Link href={'/Services'} className={style.navbutton}>Services</Link>
      <Link href={'/Gallery'} className={style.navbutton}>Gallery</Link>
      <Link href={'/About'} className={style.navbutton}>About</Link>
      <Link href={'/Contact'} className={style.navbutton}>Contact</Link>
    </div>
    </div>



    <div>
{props.children}
    </div>

    <div>
      <footer>
        footer
      </footer>
    </div>
  </div>
  );
};

export default Layout;
