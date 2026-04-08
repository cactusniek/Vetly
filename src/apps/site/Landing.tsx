import React from 'react'

import { useRef, useEffect, useState } from 'react'

import { Helmet } from 'react-helmet-async'

import { Api } from '../../global/api/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { VideoPlaceholder, SearchBar } from '../../assets'

import '../../styles/global/global.scss'
import '../../styles/site/landing.scss'

import { motion } from 'motion/react'

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
                            <motion.h1 className="hero_title" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                                Met actuele diergeneesmiddeleninformatie
                                <br />
                                direct op de website van uw praktijk..
                            </motion.h1>

                            <motion.h2 className="hero_subtitle" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}>
                                zorgt u voor overzichtelijke informatie zonder onnodig papier
                            </motion.h2>
                        </div>

                        <motion.img src={VideoPlaceholder} className="VideoPlaceholder" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }} />

                        <motion.a href="#" target="_blank" rel="noopener noreferrer" className="button_login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeIn', delay: 0.5 }}>
                            Widget bekijken
                        </motion.a>
                    </div>

                    <div className="section_2">
                        <div className="container_paragraph">
                            <motion.p className="text_paragraph">
                                Met Vetly vinden clienten snel de juiste <br /> medicatie-informatie, terwijl dierenartsen en <br />
                                personeel beschikken over Vetly's krachtige <br /> zoekfunctie
                            </motion.p>
                        </div>

                        <div className="container_titles">
                            <h2 className="title">Alle voordelen op een rij</h2>

                            <motion.a href="#" target="_blank" rel="noopener noreferrer" className="button_registration" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeIn', delay: 0.5 }}>
                                Registreer
                            </motion.a>
                        </div>

                        <div className="container_cards">
                            <div className="cards_top">
                                <div className="card">
                                    <img alt="" src={SearchBar} />

                                    <h4 className="title">Ook als je het anders schrijft</h4>

                                    <p className="paragraph">foute spelling, ontbrekende letters of merknaam-varianten: Vetly herkent het diergeneesmiddel</p>
                                </div>

                                <div className="card">
                                    <img alt="" src={SearchBar} />

                                    <h4 className="title">Ook als je het anders schrijft</h4>

                                    <p className="paragraph">foute spelling, ontbrekende letters of merknaam-varianten: Vetly herkent het diergeneesmiddel</p>
                                </div>
                            </div>

                            <div className="cards_bottom">
                                <div className="card"></div>
                                <div className="card"></div>
                                <div className="card"></div>
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
