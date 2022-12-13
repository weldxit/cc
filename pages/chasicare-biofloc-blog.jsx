import React from 'react'
import Layout from './Layout';
import style from "../styles/FAQ.module.css";
import Image from 'next/image';
import Head from "next/head";
import Social from '../components/Social';

const Blog = () => {
    return (
        <>
            <Head>
                <title>Biofloc Fish Farming in Odisha Brings Earning Opportunities | Chasicare</title>
            </Head>
            <div className={style.FAQarea}>
                <div className={style.FAQimage}>
                    <Image src={'/Blog.png'} width={550} height={350} alt="cahsicare Odisha" className={style.Image} />
                </div>
                <div className={style.FAQ}>
                    <div className={style.head}>
                        <h1 className={style.H}>Biofloc Fish Farming in Odisha Brings Huge Earning Opportunities</h1>
                        <p className={style.P}>Being one of the best availability methods in Today&#39;s generation, Biofloc Fish farming is the
                            need of the hour with high productivity and sustainability. With an aim to enhancing the
                            employment opportunities in the hands of India upcoming youth, <b>Biofloc Fish Farming</b>
                            production is a technology where one can produces more fishes significantly than traditional
                            form. It will improve the assistance for their means of subsistence with a view to assisting
                            farmers and the younger generations. Since a lot of fish are produced in a small amount of
                            water, this technology is seen as being water-saving.<br /><br />
                            The technology has optimum capacity of producing 2,000 kilograms of fish for four small tanks.</p>
                    </div>
                    <div className={style.Accordion}>
                        <h4>How to Start Biofloc Based Fish Farming Experts Opinion is a Must</h4>
                        <p>In order to start Biofloc based fish farming, one needs to know the about the condition of water
                            and testing of water quality. The availability of testing kits helps in analyzing the quality of
                            water and manage it as per its requirements and necessities. In the quest to kill ammonia from
                            water, it is advisable to add on carbon water as ammonia content is very crucial for the water
                            quantity for fish farming. One needs to look into these factors before investing on it.</p><br />

                        <h4>Investment Required for Fish Farming</h4>
                        <p>In order to make an investment in fish farming, a single biofloc tank is a must with a diameter of
                            4.5m. The cost of a single tank will be ranging in between 35,000 to 40,000. The more you make
                            the installation of tanks, the better you get profits in future. Biofloc fish farming is cost
                            effective as it reduces the prices of fish feeding and disposal of waste if you make use of biofish
                            technique.</p><br />

                        <h4>Biofloc Fish Farming and Employment Opportunities</h4>
                        <p>Biofloc fish farming is considered as an innovative and modern system where the fishes can be
                            produced in artificial tanks. In places like Odisha, such systems can be installed in terraces and
                            backwards where is fish farmer can make profit significantly by selling the fishes, as it is a
                            distinct advantage of fish farming. <br /><br />
                            Biofloc Fish farming will be of great help to the unemployed youths and will support the
                            entrepreneurs in giving them a means of subsistence as many schemes are implemented today.
                            The latest pandemic epidemic caused job losses and unemployment for a large number of
                            people.</p><br />

                        <h4>Biofloc Farming and Chasicare</h4>
                        <p>With a ability to provide assistance to farmers of India, Biofloc farming is initiative in which
                            farmers manage waste and store water in agriculture water. Considered as the blue revolution
                            which benefits from minimum to zero water exchange to continuous recycle of nutrients. <br /><br />
                            The biofloc fish farming in Odisha is made possible by <b>CHASICARE</b>. Regardless of India&#39;s many
                            agricultural sectors, many individuals have faith in <b>CHASICARE</b> in Odisha&#39;s capacity to change
                            the dynamics of biofloc fish farming. This industry offers all the resources that help fish farmers
                            become more stable in their business. The expert team in the chasi care unit substantially aids
                            the farmers and offers assistance and support in their work in order to reach the growing fish
                            market demand in India.</p><br />

                        <h4>Environmentally Friendly Biofloc Fish Tank</h4>
                        <p>This developed technique has brought a change in the perception of the farmers. with the
                            addition of materials like plants, aquatic components and micro filters gives the tank an exterior
                            look which automatically becomes eco-friendly for the fishes. The state government has also
                            given its nod to make biofloc fish farming a future prospect for upcoming people.</p><br />

                        <h4>Biofloc Fish Farming Training and Subsidies Facilities</h4>
                        <p>Since the central and state government are given their nod for integration of multiple schemes
                            for the biofloc fish farming technologies. In setting up the biofloc farming for the farmers, the
                            experts of <b>CHASICARE</b> team will assist the farmers in making this goal successfully. With that they
                            will the access for the subsides and other facilities. The <b>CHASICARE</b> team also provide essential
                            training to the farmers in order to make them competent and proficient in the work. <br /><br />
                            Visit the <b>CHASICARE</b> website or call us at : <b>097770 28888</b> for more details about the organic
                            farming in Odisha, India.</p>
                    </div>
                    <div className={style.social}><Social /></div>
                </div>   
            </div>
        </>
    )
}

export default Blog 