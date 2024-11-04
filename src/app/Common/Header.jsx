'use client';
import Link from "next/link";
import {React, useState } from "react";
import burger from "../Images/burger-menu-svgrepo-com.svg"
import { AnimatePresence, motion } from 'framer-motion'
import Modal from "./Modal/index";

 function Header(){
    
    const [modalOpen, setModalOpen] = useState(false);
    const open = () => setModalOpen(true);
    const close = () => setModalOpen(false);


    return(
        <>
            <div className="contentBg container rounded-bottom text-center">
                <div className="row headerPC h-100 ">
                        <Link href={{pathname: '/',}} className="text-white border-0 centerText btn-header text-uppercase btn h-100 col">
                                Home
                        </Link>
                        <Link href={{pathname: '/ONas',}} className="text-white border-0 centerText btn-header btn text-uppercase h-100 col">
                            O nas
                        </Link>
                        <Link href={{pathname: '/Regulamin',}} className="text-white border-0 centerText btn-header btn text-uppercase h-100 col">
                            Regulamin
                        </Link>
                        <Link href={{pathname: '/Kontakt',}} className="text-white border-0 centerText btn-header btn text-uppercase h-100 col">
                            Kontakt
                        </Link>
                        <Link href={{pathname: '/Cennik',}} className="text-white border-0 centerText btn-header btn text-uppercase h-100 col">
                            Cennik
                        </Link>
                        <Link href={{pathname: '/Grafik',}} className="text-white border-0 centerText btn-header btn text-uppercase h-100 col">
                            Grafik
                        </Link>
                        <Link href={{pathname: '/Galeria',}} className="text-white border-0 centerText btn-header btn text-uppercase h-100 col">
                            Galeria
                        </Link>
                </div>
                <div className="headerMob h-100 ">
                    <motion.button className="burgerBtn my-auto" onClick={() => (modalOpen ? close() : open())}>
                        <img className="burger " alt="" src={burger.src}/>
                    </motion.button>
                </div>
                <AnimatePresence className="modal" >
                    {
                        modalOpen && <Modal onClick={Modal.handleClose} modalOpen={modalOpen} handleClose={close} text={close}/>
                    }
                </AnimatePresence>
            </div>
        </>
    )
}

export default Header