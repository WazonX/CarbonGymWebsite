"use client";
import { motion } from "framer-motion";

const AnimationSettings = {
    transition: { duration: 0.5 },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };
  

export default function Home() {
    return (
        <motion.div {...AnimationSettings} className="pt-4 pb-4 ">
            <h1 className="text-center col-12 pt-5 heading-center-column text-uppercase headingSize">
                Grafik
            </h1>
            <h2 className="headingSize text-center pt-3 pb-3">Fitness</h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 },
                }}
                className="container text-center pt-3 pb-3 spanSmall"
            >
                <div className="row row-underline">
                    <div className="col">Poniedziałek</div>
                    <div className="col">19:00 - 20:00</div>
                </div>
                <div className="row row-underline">
                    <div className="col">Środa</div>
                    <div className="col">19:00 - 20:00</div>
                </div>
            </motion.div>
            <h2 className="headingSize text-center pt-3 pb-3">Streching</h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 },
                }}
                className="container text-center pt-3 pb-3 spanSmall"
            >
                <div className="row row-underline">
                    <div className="col">Piątek</div>
                    <div className="col">19:00 - 20:00</div>
                </div>
                <div className="row row-underline">
                    <div className="col">Sobota</div>
                    <div className="col">13:00 - 14:00</div>
                </div>
            </motion.div>
        </motion.div>
    );
}
