"use client";
import "./globals.css";
import Multi from "../app/Images/MultiSport.png";
import Medi from "../app/Images/Medicover.jpeg";
import Fit from "../app/Images/Fitprofit.png";
import pzu from "./Images/PZU.png"
import { motion } from "framer-motion";

const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};


function Home() {
  return (
    <motion.div {...AnimationSettings} className="text-white pt-5">
      <h1 className="text-center w-100 text-uppercase headingSize">
        Siłownia & Fitness
      </h1>
      <ul className="text-center text-mid px-0" style={{ listStyle: "none" }}>
        <li>
          Bardzo dobrze wyposażona siłownia (strefa cardio, strefa siłowa,
          strefa trx i trening crossowy)
        </li>
        <li>Dogodne godziny otwarcia 7 dni w tygodniu</li>
        <li>Fitness, sporty walki, spinning i wiele innych</li>
        <li>Klimatyzowane pomieszczenia</li>
        <li>Wykwalifikowani instruktorzy</li>
        <li>Opieka trenera personalnego</li>
        <li>Świetna atmosfera</li>
      </ul>
      <div className="row mt-4 mb-2">
        <div className="col">
          <h1 className="headingSize text-center">Honorujemy:</h1>
        </div>
      </div>
      <motion.div
        transition={{ staggerChildren: 0.3 }}
        className=" cards-container w-50 mx-auto"
      >
        <motion.div
         className="cards-item w-25"
          whileHover={{ y: -10 }}
          transition={{
            type: "spring",
            bounce: 0.7,
          }}
        >
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            alt=""
            className=""
            src={Medi.src}
          />
        </motion.div>

        <motion.div
        className="cards-item"
          whileHover={{ y: -10 }}
          transition={{
            type: "spring",
            bounce: 0.7,
          }}
        >
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3}}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            alt=""
            className=""
            src={Fit.src}
          />
        </motion.div>

        <motion.div
        className="cards-item"
          whileHover={{ y: -10 }}
          transition={{
            type: "spring",
            bounce: 0.7,
          }}
        >
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.3 },
              },
              hidden: { opacity: 0, scale: 0 },
            }}
            alt=""
            className=""
            src={Multi.src}
          />
        </motion.div>
        <motion.div
        className="cards-item"
          whileHover={{ y: -10 }}
          transition={{
            type: "spring",
            bounce: 0.7,
          }}
        >
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.3 },
              },
              hidden: { opacity: 0, scale: 0 },
            }}
            alt=""
            className=""
            src={pzu.src}
          />
        </motion.div>

      </motion.div>
    </motion.div>
  );
}

export default Home;
