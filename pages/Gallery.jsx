import React from "react";
import Layout from "./Layout";
import Image from "next/image";
import style from "../styles/gallery.module.css";
export default function Gallery() {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.gallery_text}>
          <h1 className={style.gallery_h1}>See Our Images</h1>
        </div>
      <div className={style.gallery}>
        <div className={style.g_image}>
        <Image src={"/watermarkpics/Chasicare_Biofloc_Projects3.jpg"} width={300} height={420} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/watermarkpics/Chasicare_Biofloc_Projects1.jpg"} width={580} height={420} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/watermarkpics/Chasicare_Biofloc_Projects6.jpg"} width={300} height={420} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/watermarkpics/Chasicare_Biofloc_Projects10.jpg"} width={340} height={420} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/watermarkpics/Chasicare_Biofloc_Projects7.jpg"} width={500} height={420} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/watermarkpics/Chasicare_Biofloc_Projects8.jpg"} width={400} height={430} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/watermarkpics/Chasicare_Biofloc_Projects12.jpg"} width={300} height={430} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/watermarkpics/Chasicare_Biofloc_Projects13.jpg"} width={300} height={430} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/watermarkpics/Chasicare_Biofloc_Projects17.jpg"} width={340} height={430} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/watermarkpics/Chasicare_Biofloc_Projects19.jpg"} width={420} height={430} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/watermarkpics/Chasicare_Biofloc_Projects33.jpg"} width={300} height={430} alt="bio" className={style.image} />
        </div>
        <div className={style.g_image}>
        <Image src={"/watermarkpics/Chasicare_Biofloc_Projects34.jpg"} width={420} height={430} alt="bio" className={style.image} />
        </div>
      </div>
      </div>
    </Layout>
  );
}
