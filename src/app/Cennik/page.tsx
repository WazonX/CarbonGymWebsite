'use client'
import { motion } from 'framer-motion'
import data from "./cennikData"


const silownia = data().getSilownia()
const treningi = data().getTrening()
const fit = data().getFitness()
const mobility = data().getMobility()
const boks = data().getBoks()

const AnimationSettings = {
    transition: { duration: 0.5 },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };


export default function Home() {
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