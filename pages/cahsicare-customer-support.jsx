import React from 'react'
import Link from "next/link";
import style from "../styles/Help.module.css"

const Help = () => {
    return (
        <div className={style.HelpDiv}>
            <h4>24/7 Customer Support at the Chasicare Help Center</h4>
            <p>
                If you want expert assistance on a variety of problems, you may obtain the Chasicare Help Centre number or even access Chasicare Help Centre support. Your farming experience will be joyful and enjoyable thanks to the support executive's quick help. You may also let your family members know about the help page so they can appropriately address any complaints as well. Once all of your questions have been answered, you can use your farming list to go farming for all of your necessities in one location. Online farming during holiday discounts can allow you to take advantage of some remarkable savings.
            </p>
            <div>
              <span><b>Phone:&nbsp;&nbsp;</b></span>
              <Link href={'tel: +91 9777028888'}>+91 9777028888</Link><br />
              <span><b>Email:&nbsp;&nbsp;</b></span>
              <Link href={'mailto:help.chasicare@gmail.com'}>help.chasicare@gmail.com</Link>
              </div>
        </div>
    )
}

export default Help
