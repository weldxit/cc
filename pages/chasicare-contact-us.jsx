import React from "react";
import Form from "./Form";
import Layout from "./Layout";
import style from '../styles/contact.module.css'
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Head key={'contact'}>
        <title>Chasicare Address in Bhubaneswar, Odisha | Call: 097770 28888</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Contact to CHASICRE biofloc team in Bhubaneswar by filling out the below form or call us at: 097770 28888." />
        <meta name="keywords" content="Chasicare, Biofloc fish, Biofloc farming, Chasicare address, Biofloc training, Odisha" />
        <link rel="canonical" href="https://chasicare.com/contact-us/" />
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
        <meta property="og:title" content="Chasicare Address in Bhubaneswar, Odisha | Call: 097770 28888" />
        <meta property="og:description" content="Contact to CHASICRE biofloc team in Bhubaneswar by filling out the below form or call us at: 097770 28888." />
        <meta property="og:url" content="https://chasicare.com/contact-us/" />
        <meta property="og:image" content='https://www.chasicare.com/_next/image?url=%2FChasicare_OG.jpg&w=640&q=75' />
        <meta property="og:image:width" content='1200'/>
        <meta property="og:image:height" content='630'/>
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
        



        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

      

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
          "address":{{
            "@type": "PostalAddress",
            "streetAddress": "Plot No: 309/1801P, Niladri Vihar",
            "addressLocality": "Bhubaneswar",
            "postalCode": "751021",
            "addressCountry": "IN"
          }},
          "geo":{{
            "@type": "GeoCoordinates",
            "latitude": 20.296059,
            "longitude": 85.824539
          }},
          "openingHoursSpecification":{{
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
      <div>
        <div className={style.contact}>
          <div className={style.texts}>
            <h1 className={style.texts_h1}>Contact Us</h1>
            <p className={style.texts_p}>
              Contact to Chasicare Expert team by filling out the form below and
              our expert team will reach you soon. As a farmer’s centric
              organisation, the <b>CHASICARE</b> in Odisha is committed to help farmers
              for setting up their organic farm, biofloc fish farm, dairy farm,
              goatery farm, aquaponics and more.
            </p>
          </div>
          <div className={style.address}>
            <div className={style.address_add}>
              <Image src={'/direction.png'} width={50} height={50} alt="Chasicare Odisha" />
              <div><b>Plot No:</b> 309/1801P, Niladri Vihar,<br/>Bhubaneswar, Odisha&nbsp;<b>Pin:</b> 751021</div>
            </div>
            <div className={style.address_add}>
            <Image src={'/contact.png'} width={50} height={50} alt="Chasicare Odisha" />
              <div style={{marginLeft: "1ch"}}>
              <span><b>Phone:&nbsp;&nbsp;</b></span>
              <Link href={'tel: +91 9777028888'}>+91 9777028888</Link><br />
              <span><b>Email:&nbsp;&nbsp;</b></span>
              <Link href={'mailto:chasimitraindia@gmail.com'}>chasimitraindia@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.div}></div>
        <Form />
      </div>
    </>
  );
}
