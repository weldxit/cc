import React from "react";
import Link from "next/link";


const Layout = (props) => {
  return (
  <div>
    <div>
      <li><Link href={'/Home'}>Home</Link></li>
      <li><Link href={'/Services'}>Services</Link></li>
      <li><Link href={'/Project'}>Project</Link></li>
      <li><Link href={'/About'}>About</Link></li>
      <li><Link href={'/Contact'}>Contact</Link></li>
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
