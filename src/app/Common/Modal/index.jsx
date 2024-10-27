'use client'
import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import Link from "next/link";

const dropIn = {
  hide: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hide: {
    y: "50vh",
    opacity: 0,
    transition: {
      stiffness: 1000, damping: 150, velocity: 100,
    }
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      stiffness: 1000,
    }
  }
};


const Modal = ({ handleClose, text }) => {

  return (
    <Backdrop onClick={handleClose}>
      <div
        // onClick={(e) => e.stopPropagation()}
        onClick={handleClose}
        className="modal burgerMenu"
      >
        <motion.ul
          variants={dropIn}
          animate={text ? "visible" : "hide"}
          initial="hide"
          exit="exit"
        >
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}      
          >
            <Link href="/" className="text-white border-0 btnMob centerText btn-header btn text-uppercase col-xs">
              Home
            </Link>
          </motion.li>
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/ONas" className="text-white border-0 btnMob centerText btn-header btn text-uppercase col-xs">
              O nas
            </Link>
          </motion.li>
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/Regulamin" className="text-white border-0 btnMob centerText btn-header btn text-uppercase col-xs">
              Regulamin
            </Link>
          </motion.li>
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/Kontakt" className="text-white border-0 btnMob centerText btn-header btn text-uppercase col-xs">
              Kontakt
            </Link>
          </motion.li>
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/Cennik" className="text-white border-0 btnMob centerText btn-header btn text-uppercase col-xs">
              Cennik
            </Link>
          </motion.li>
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/Grafik" className="text-white border-0 btnMob centerText btn-header btn text-uppercase col-xs">
              Grafik
            </Link>
          </motion.li>
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/Galeria" className="text-white border-0 btnMob centerText btn-header btn text-uppercase col-xs">
              Galeria
            </Link>
          </motion.li>
        </motion.ul>
      </div>
      <motion.div 
      className="burger-bottom text-white footLink"
      >
            © CarbonGym by Michał Adach 2024
      </motion.div>
    </Backdrop>
  );
};


export default Modal;