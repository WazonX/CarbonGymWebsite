'use client'
import {motion} from 'framer-motion';
import mapa from '../Images/mapa-988.jpg'

const AnimationSettings = {
    transition: { duration: 0.5 },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };
  

export default function Home(){
    return(
        
        <motion.div
        {...AnimationSettings}
        className="pt-5 ">
            <h1 className="text-center text-uppercase headingSize">
                Zapraszamy!
            </h1>
            <h2 className="text-mid mt-5 text-center">
                <div className="row mt-3">
                    <div className="col-12">
                        Od poniedziałku do piątku w godzinach:
                    </div>
                    <div className="col-12">
                        7:00 - 13:00 i 16:00 - 21:00
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        W sobotę: 
                    </div>
                    <div className="col-12">
                        8:00 - 14:00
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        W niedzielę:  
                    </div>
                    <div className="col-12">
                        8:00 - 12:00
                    </div>
                </div>
            </h2>
            <div className="row">
                <div className="col-6">
                    <div className="text-center illuminate">
                        <a href='tel:503125060' className='social-btn text-decor-none'>
                        <span className='bi bi-telephone-fill'>
                            503 125 060
                        </span>
                        </a>
                    </div>
                    <div className="container-fluid w-100 social-btn">
                        <div className="row my-4 ">
                                <a href='https://www.facebook.com/CarbonGymAdach/?locale=pl_PL' target='_blank' className='col bi bi-facebook illuminate w-100 text-white '>
                                    Facebook
                                </a>
                        </div>
                        <div className="row my-4">
                                <a href='https://www.instagram.com/carbongym/' target='_blank' className="col bi bi-instagram illuminate text-white">
                                    Instagram
                                </a>
                        </div>
                        <div className="row my-4">
                                <a href='mailto:kontakt@carbongym.pl' target='_blank' className='col bi bi-envelope-fill illuminate text-white'>
                                    E-Mail
                                </a>
                        </div>
                        <div className="row my-4">
                                <a href='https://maps.app.goo.gl/YqWHXYVReUETseoa9' target='_blank' className='col bi bi-geo-alt illuminate text-white'>
                                    Mapa
                                </a>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img alt="" src={mapa.src} className='w-100'/>
                </div>
            </div>
        </motion.div>
    )
}