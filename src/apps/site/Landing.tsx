import React from 'react'

import { useRef, useEffect, useState } from 'react'

import { Helmet } from 'react-helmet-async'

import { Api } from '../../global/api/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { VideoPlaceholder, SearchBarImage, UpToDateImage, SustainableImage, StarsImage } from '../../assets'

import '../../styles/global/global.scss'
import '../../styles/site/landing.scss'

import { motion } from 'motion/react'

const cardsContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15, // tijd tussen cards
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

function Landing() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className="landing">
                <Header />

                <div className="container_sections">
                    <div className="section_1">
                        <div className="container_titles">
                            <motion.h1 className="title_mobile" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                                Actuele diergeneesmiddelen direct op uw website
                            </motion.h1>

                            <motion.h1 className="title_desktop" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                                Met actuele diergeneesmiddeleninformatie
                                <br />
                                direct op de website van uw praktijk..
                            </motion.h1>

                            <motion.h2 className="subtitle" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}>
                                zorgt u voor overzichtelijke informatie zonder onnodig papier
                            </motion.h2>
                        </div>

                        <motion.img src={VideoPlaceholder} className="VideoPlaceholder" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }} />

                        {/* this must scroll down to all the veterinarians that use this widget */}
                        <motion.a href="#" target="_blank" rel="noopener noreferrer" className="button_login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeIn', delay: 0.5 }}>
                            Widget bekijken
                        </motion.a>
                    </div>

                    <div className="section_2">
                        <motion.p className="paragraph" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: 0.1 }}>
                            Met Vetly vinden clienten snel de juiste <br /> medicatie-informatie, terwijl dierenartsen en <br />
                            personeel beschikken over Vetly's krachtige <br /> zoekfunctie
                        </motion.p>

                        <div className="container_flex">
                            <h2 className="title">Alle voordelen op een rij</h2>

                            {/* op deze hoeft geen animatie */}
                            <motion.a href="#" target="_blank" rel="noopener noreferrer" className="button_registration" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeIn', delay: 0.5 }}>
                                Registreer
                            </motion.a>
                        </div>

                        <div className="container_cards">
                            <div className="cards_top">
                                <motion.div
                                    className="card"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.3, ease: 'easeIn', delay: 0.25 }} // card 1
                                >
                                    <img alt="showcase" src={SearchBarImage} className="image_Showcase" />
                                    <h4 className="title">Ook als je het anders schrijft</h4>
                                    <p className="paragraph">foute spelling, ontbrekende letters of merknaam-varianten: Vetly herkent het diergeneesmiddel</p>
                                </motion.div>

                                <motion.div
                                    className="card"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.3, ease: 'easeIn', delay: 0.1 }} // card 2
                                >
                                    <img alt="showcase" src={UpToDateImage} className="image_Showcase" />
                                    <h4 className="title">Altijd up-to-date</h4>
                                    <p className="paragraph">Vetly haalt continu de nieuwste gegevens op, zodat de info altijd aansluit op de meest recente CBG-informatie</p>
                                </motion.div>
                            </div>

                            <div className="cards_bottom">
                                <motion.div
                                    className="card"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.3, ease: 'easeIn', delay: 0.45 }} // card 3
                                >
                                    <img alt="showcase" src={SustainableImage} className="image_Showcase" />
                                    <h4 className="title">Duurzamer werken</h4>
                                    <p className="paragraph">met de widget maakt u bijsluiters digitaal beschikbaar, via een link, QR-code of direct als widget op uw eigen site</p>
                                </motion.div>

                                <motion.div
                                    className="card"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.3, ease: 'easeIn', delay: 0.2 }} // card 4
                                >
                                    <img alt="showcase" src={SustainableImage} className="image_Showcase" />
                                    <h4 className="title">Makkelijk te implementeren</h4>
                                    <p className="paragraph">De widget is gebouwd met moderne technologie en is hierdoor eenvoudig te implementeren op iedere website</p>
                                </motion.div>

                                <motion.div className="card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.3, ease: 'easeIn', delay: 0.35 }}>
                                    <img alt="showcase" src={StarsImage} className="image_Showcase" />
                                    <h4 className="title">Professionele uitstraling</h4>
                                    <p className="paragraph">Een eigen medicijnzoeker op de website laat zien dat de praktijk moderne, betrouwbare informatie serieus neemt</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Landing
