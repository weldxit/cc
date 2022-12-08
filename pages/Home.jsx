import Layout from "./Layout"
import style from '../styles/home.module.css'
import Image from "next/image"
import Link from "next/link"
import MiniAbout from "./MiniAbout"


export default function Home() {
    return (
        <Layout>
            
        <div className={style.homepage}>
           <div className={style.homepage_front}>
                <h1 className={style.homepage_front_h1}>CHASICARE</h1>
                <h2 className={style.homepage_front_h2}>We Provide Best Care to the farmers of the nation</h2>
                <Link href={'tel:+91 9777028888'}>
                    <button className={style.call}>Contact Now</button>
                    
                    </Link>
           </div>
           
        </div>
   
<MiniAbout/>

        </Layout>
    )
};
