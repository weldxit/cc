import Layout from "./Layout";
import style from "../styles/home.module.css";
import Image from "next/image";
import Link from "next/link";
import MiniAbout from "./MiniAbout";
import Head from "next/head";
import Form from "./Form";
import AllServices from "../components/AllServices";

export default function Home() {
  return (
   <>
      <Head>
        <meta charSet="utf-8" />
        <title>
          Chasicare - Biofloc Fish Farming and Organic Farming in Odisha
        </title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Chasicare provides the best Biofloc fish farming services and training in Odisha. Grow your organic farming, dairy farming and poultry farming business today."
        />
        <meta
          name="keywords"
          content="Chasicare, Biofloc fish farming, organic farming Odisha, Dairy farming, Poultry farming, Goat farming Odisha, Biofloc farming Odisha, Aquaponics farming, Biofloc training"
        />
        <link rel="canonical" href="https://chasicare.com/" />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="MevSFHM1V4DhgIRgi52UBY8C4NQPNRIxg8WBRngWO1w"
        />
        <meta name="copyright" content="Chasicare" />
        <meta name="owner" content="Chasicare" />
        <meta name="category" content="Agriculture and Farming" />
        <meta name="coverage" content="India" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="General" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Chasicare - Biofloc Fish Farming and Organic Farming in Odisha"
        />
        <meta
          property="og:description"
          content="Chasicare provides the best Bioffloc fish farming services and training in Odisha. Grow your organic farming, dairy farming and poultry farming business today."
        />
        <meta property="og:url" content="https://chasicare.com/" />
        <meta
          property="og:image"

          content='https://www.chasicare.com/_next/image?url=%2FChasicare_OG.jpg&w=640&q=75'

        />

        <meta property="og:image:width" content='640'/>
        <meta property="og:image:height" content='75'/>
        <meta property="og:site_name" content="Chasicare" />
        <meta
          property="article:modified_time"
          content="2022-08-10T16:01:16+00:00"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@chasicare" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="9 minute" />
        <meta
          name="fb:page_id"
          content="https://www.facebook.com/ChasiCareOdisha/"
        />
        <meta name="og:email" content="chasimitraindia@gmail.com" />
        <meta name="og:phone_number" content="+91 9777028888" />
        <meta name="og:latitude" content="20.296059" />
        <meta name="og:longitude" content="85.824539" />
        <meta
          name="og:street-address"
          content="Plot No: 309/1801P, Niladri Vihar"
        />
        <meta name="og:locality" content="Bhubaneswar" />
        <meta name="og:region" content="Odisha" />
        <meta name="og:postal-code" content="751021" />
        <meta name="og:country-name" content="India" />
      </Head>
      <div className={style.homepage}>
        <div className={style.homepage_front}>
          <h1 className={style.homepage_front_h1}>CHASICARE</h1>
          <h2 className={style.homepage_front_h2}>
            We Provide Best Care to the farmers of the nation
          </h2>
          <Link href={"tel:+91 9777028888"}>
            <button className={style.call}>Contact Now</button>
          </Link>
        </div>
        <div className={style.chakra}>
          <Image
            src={"/chakra.png"}
            width={300}
            height={300}
            alt="Chasicare Odisha"
            className={style.image}
          />
        </div>
      </div>
      <div className={style.div}></div>
      <div className={style.As}>
        <AllServices />
      </div>
      <div className={style.div}></div>
      <div>
        <MiniAbout />
      </div>
      <iframe className={style.frame} src="https://www.youtube.com/embed/pqkAVHzoUQE" title="YouTube video player" frameborder="0" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
      <div className={style.div}></div>
      <div>
        <Form />
      </div>
      </>

  );
}
