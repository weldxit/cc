import React from "react";
import Layout from "./Layout";
import Image from "next/image";
import style from "../styles/gallery.module.css";
export default function Gallery() {
  return (
    <Layout>
      <div className={style.main}>
      <div className={style.container}>
        <div className={style.gallery_text}>
          <h1 className={style.gallery_h1}>See Our Images</h1>
        </div>
      <div className={style.gallery}>
        <div className={style.g_image}>
        <Image src={"/bf.jpg"} width={240} height={240} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/bf.jpg"} width={240} height={240} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/bf.jpg"} width={240} height={240} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/bf.jpg"} width={240} height={240} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/bf.jpg"} width={240} height={240} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/bf.jpg"} width={240} height={240} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/bf.jpg"} width={240} height={240} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/bf.jpg"} width={240} height={240} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/bf.jpg"} width={240} height={240} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/bf.jpg"} width={240} height={240} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/bf.jpg"} width={240} height={240} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/bf.jpg"} width={240} height={240} alt="bio" className={style.image} />
        </div>
      </div>
      </div>
      </div>
    </Layout>
  );
}
