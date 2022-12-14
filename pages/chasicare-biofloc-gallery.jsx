import React from "react";
import Layout from "./Layout";
import Image from "next/image";
import style from "../styles/gallery.module.css";
import Head from "next/head";
import Script from "next/script";
import Form from "./Form";
export default function Gallery() {
  return (
    <>
      <Head key={'gallery'}>
        <meta charSet="utf-8" />
        <title>Biofloc Fish Farming Galleries by Chasicare | Organic Farming in Odisha</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Biofloc fish farming galleries by Chasicare in Odisha. Explore organic farming pictures in Odisha including dairy farming, poultry farming, goat faring etc." />
        <meta name="keywords" content="biofloc fish farming, biofloc projects, organic farming in Odisha, dairy farming, goat farming, poultry farming, aquaponics, Chasicare projects" />
        <link rel="canonical" href="https://chasicare.com/biofloc-gallery/" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="MevSFHM1V4DhgIRgi52UBY8C4NQPNRIxg8WBRngWO1w" />
        <meta name="copyright" content="Chasicare" />
        <meta name="owner" content="Chasicare" />
        <meta name="category" content="Agriculture and Farming" />
        <meta name="coverage" content="India" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="General" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Biofloc Fish Farming Galleries by Chasicare | Organic Farming in Odisha" />
        <meta property="og:description" content="Biofloc fish farming galleries by Chasicare in Odisha. Explore organic farming pictures in Odisha including dairy farming, poultry farming, goat faring etc." />
        <meta property="og:url" content="https://chasicare.com/biofloc-gallery/" />
        <meta property="og:image" content="https://chasicare.com/img/chasicare/newpics/Chasicare_biofloc_odisha.jpg" />
        <meta property="og:site_name" content="Chasicare" />
        <meta property="article:modified_time" content="2022-12-10T16:01:16+00:00" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@chasicare" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="9 minute" />
        <meta name="fb:page_id" content="https://www.facebook.com/ChasiCareOdisha/" />
        <meta name="og:email" content="chasimitraindia@gmail.com" />
        <meta name="og:phone_number" content="+91 9777028888" />
        <meta name="og:latitude" content="20.296059" />
        <meta name="og:longitude" content="85.824539" />
        <meta name="og:street-address" content="Plot No: 309/1801P, Niladri Vihar" />
        <meta name="og:locality" content="Bhubaneswar" />
        <meta name="og:region" content="Odisha" />
        <meta name="og:postal-code" content="751021" />
        <meta name="og:country-name" content="India" />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0P9YDRCX4Y"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0P9YDRCX4Y');
        `}
      </Script>
        <link rel="icon" href="/img/service_icon/Chasicare-fav.png" type="image/x-icon" />


        <link href="/img/service_icon/Chasicare-fav.png" rel="icon" />

        <link href="/img/service_icon/Chasicare-fav.png" rel="apple-touch-icon" />


        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Quintessential&display=swap" rel="stylesheet" />

        <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

        <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />

        <link href="css/style.css" rel="stylesheet" />
        <Script type="application/ld+json">
          {{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Chasicare",
            "image": "https://chasicare.com/img/chasicare/whitclour.png",
            "@id": "https://chasicare.com/",
            "url": "https://chasicare.com/",
            "telephone": "+91 9777028888",
            "priceRange": "1"
          }},
          "address": {{
            "@type": "PostalAddress",
            "streetAddress": "Plot No: 309/1801P, Niladri Vihar",
            "addressLocality": "Bhubaneswar",
            "postalCode": "751021",
            "addressCountry": "IN"
          }},
          "geo": {{
            "@type": "GeoCoordinates",
            "latitude": 20.296059,
            "longitude": 85.824539
          }},
          "openingHoursSpecification": {{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
          }
        </Script>

      </Head>
      <div className={style.main}>
        <div className={style.container}>
          <div className={style.gallery_text}>
            <h1 className={style.gallery_h1}>Chasicare Project Gallery</h1>
            <p className={style.p}>The <b>CHASICARE</b> is pioneer in designing and developing the Biofloc fish farming projects and other organic farming projects in Odisha. Explore our completed Biofloc fish farming projects and organic farming projects insights here.</p>
          </div>
          <div className={style.gallery}>
            <div className={style.g_image}>
              <Image src={"/Chasicare_Biofloc_Projects10.jpg"} width={271} height={300} alt="Biofloc by Chasicare" className={style.image1} />
            </div>
            <div className={style.g_image}>
              <Image src={"/Chasicare_Biofloc_Projects19.jpg"} width={271} height={300} alt="Biofloc by Chasicare" className={style.image1} />
            </div>
            <div className={style.g_image}>
              <Image src={"/Chasicare_Biofloc_Projects13.jpg"} width={542} height={300} alt="Biofloc by Chasicare" className={style.image2} />
            </div>
            <div className={style.g_image}>
              <Image src={"/Chasicare_Biofloc_Projects11.jpg"} width={542} height={300} alt="Biofloc by Chasicare" className={style.image2} />
            </div>
            <div className={style.g_image}>
              <Image src={"/Chasicare_Biofloc_Projects33.jpg"} width={271} height={300} alt="Biofloc by Chasicare" className={style.image1} />
            </div>
            <div className={style.g_image}>
              <Image src={"/Chasicare_Biofloc_Projects5.jpg"} width={271} height={300} alt="Biofloc by Chasicare" className={style.image1} />
            </div>
            <div className={style.g_image}>
              <Image src={"/Chasicare_Biofloc_Projects34.jpg"} width={271} height={300} alt="Biofloc by Chasicare" className={style.image1} />
            </div>
            <div className={style.g_image}>
              <Image src={"/Chasicare_Biofloc_Projects17.jpg"} width={271} height={300} alt="Biofloc by Chasicare" className={style.image1} />
            </div>
            <div className={style.g_image}>
              <Image src={"/Chasicare_Biofloc_Projects9.jpg"} width={542} height={300} alt="Biofloc by Chasicare" className={style.image2} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.div}></div>
      <div>
        <Form />
      </div>
    </>
  );
}

