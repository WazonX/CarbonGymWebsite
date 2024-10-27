'use client'
import { motion } from 'framer-motion'
export default function Home() {
    const silownia = [{
        rodzaj: "Pojedyńcze wejście",
        cena: "40zł"
    }, {
        rodzaj: "Open",
        cena: "200zł"
    }, {
        rodzaj: "Open Roczny",
        cena: "2160zł"
    }, {
        rodzaj: "Open Półroczny",
        cena: "1140zł"
    }, {
        rodzaj: "Lady Open",
        cena: "170zł"
    }, {
        rodzaj: "Morning Open",
        cena: "170zł"
    }, {
        rodzaj: "Student Open",
        cena: "160zł"
    }, {
        rodzaj: "Junior Open",
        cena: "140zł"
    }, {
        rodzaj: "Senior Open",
        cena: "150zł"
    }, {
        rodzaj: "Dla Pary",
        cena: "350zł"
    }, {
        rodzaj: "Junior z Tatą",
        cena: "320zł"
    }, {
        rodzaj: "Junior z Mamą",
        cena: "290zł"
    }, {
        rodzaj: "12 Wejść",
        cena: "180zł"
    }, {
        rodzaj: "8 Wejść",
        cena: "140zł"
    }, {
        rodzaj: "4 Wejścia",
        cena: "100zł"
    }

    ]

    const treningi = [{
        rodzaj: "12 Treningów",
        cena: "1020zł"
    }, {
        rodzaj: "8 Treningów",
        cena: "720zł"
    }, {
        rodzaj: "4 Treningi",
        cena: "400zł"
    }, {
        rodzaj: "Pojedyńczy Trening",
        cena: "120zł"
    }, {
        rodzaj: "Podwójny - Koleżeński",
        cena: "160zł"
    }, {
        rodzaj: "2 Osoby 4 Treningi",
        cena: "260zł"
    }, {
        rodzaj: "2 Osoby 8 Treningów",
        cena: "480zł"
    }, {
        rodzaj: "3 Osoby 4 Treningi",
        cena: "220zł"
    }, {
        rodzaj: "3 Osoby 8 Treningów",
        cena: "400zł"
    }
    ]

    const fit = [{
        rodzaj: "Open miesięczny",
        cena: "170zł"
    }, {
        rodzaj: "4 Wejścia",
        cena: "90zł"
    }, {
        rodzaj: "Fit & Gym Open",
        cena: "200zł"
    }
    ]

    const mobility = [{
        rodzaj: "8 Wejść",
        cena: "170zł"
    }, {
        rodzaj: "4 Wejścia",
        cena: "90zł"
    }
    ]

    const boks = [{
        rodzaj: "Pojedynczy trening (Trener Senior)",
        cena: "120zł"
    }, {
        rodzaj: "Pojedynczy trening (Trener Junior)",
        cena: "100zł"
    }, {
        rodzaj: "Pakiet 8 Treningów (Trener Junior)",
        cena: "720zł"
    }, {
        rodzaj: "Trening 2 osobowy (Trener Junior)",
        cena: "150zł"
    }, {
        rodzaj: "Trening 2 osobowy (Trener Senior)",
        cena: "180zł"
    }
    ]

    const spin = [{
        rodzaj: "Karnet 3x w Tygodniu",
        cena: "280zł"
    }, {
        rodzaj: "Karnet 2x w Tygodniu",
        cena: "200zł"
    }, {
        rodzaj: "Karnet 1x w Tygodniu",
        cena: "110zł"
    }, {
        rodzaj: "Karnet Open",
        cena: "350zł"
    }
    ]

    const AnimationSettings = {
        transition: { duration: 0.5 },
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
      };
      

    return (
        <motion.div {...AnimationSettings}>
            <h1 className="text-center col-12 pt-5 heading-center-column text-uppercase headingSize">
                Cennik
            </h1>
            <h2 className="headingSize text-center pt- pb-">
                Siłownia
            </h2>
            <div className="container text-center h-fit spanSmall">
                {
                    silownia.map((i) => {
                        return (<><motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 100 }
                            }}
                            className="row h-fit row-underline"><motion.div className="col-6 h-fit">{i.rodzaj}</motion.div><motion.div className="col-6 h-fit pb-3">{i.cena}</motion.div></motion.div></>)
                    })
                }
            </div>
            <h2 className="headingSize text-center pt-5 pb-5">
                Trening Personalny
            </h2>
            <div className="container text-center spanSmall">
                {
                    treningi.map((i) => {
                        return (<><motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 100 }
                            }}
                            className="row row-underline"><motion.div className="col-6">{i.rodzaj}</motion.div><motion.div className="col-6 pb-3">{i.cena}</motion.div></motion.div></>)
                    })
                }
            </div>
            <h2 className="headingSize text-center pt-5 pb-5">
                Fitness
            </h2>
            <div className="container text-center spanSmall">
                {
                    fit.map((i) => {
                        return (<><motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 100 }
                            }}
                            className="row row-underline"><div className="col-6">{i.rodzaj}</div><div className="col-6 pb-3">{i.cena}</div></motion.div></>)
                    })
                }
            </div>
            <h2 className="headingSize text-center pt-5 pb-5">
                Mobility
            </h2>
            <div className="container text-center spanSmall">
                {
                    mobility.map((i) => {
                        return (<><motion.div initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.3 }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 100 }
                            }}
                            className="row row-underline"><div className="col-6">{i.rodzaj}</div><div className="col-6 pb-3">{i.cena}</div></motion.div></>)
                    })
                }
            </div>
            <h2 className="headingSize text-center pt-5 pb-5">
                Boks
            </h2>
            <div className="container text-center spanSmall">
                {
                    boks.map((i) => {
                        return (<><motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 100 }
                            }}
                            className="row row-underline"><div className="col-6">{i.rodzaj}</div><div className="col-6 pb-3">{i.cena}</div></motion.div></>)
                    })
                }
            </div>
        </motion.div>
    )
}