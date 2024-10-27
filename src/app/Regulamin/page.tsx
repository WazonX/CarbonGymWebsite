'use client'
import { delay, motion } from "framer-motion"

const AnimationSettings = {
    transition: { duration: 0.5 },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };
  

function Home() {
    return (
        <motion.div {...AnimationSettings} className='text-white pt-5 row'>
            <h1 className='text-center w-100 col-12 text-uppercase headingSize'>
                Regulamin Siłowni
            </h1>
            <div className="col-2"></div>
            <motion.ol
                className="mt-3 text-center col-8 text-mid px-1 ">

                <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3}}
                    variants={{
                        visible: { opacity: 1, y:0 },
                        hidden: { opacity: 0, y:100 }
                    }}
                    className="mt-4">
                    Korzystanie z siłowni jest możliwe po zapoznaniu się z regulaminem.
                </motion.li>

                <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3}}
                    variants={{
                        visible: { opacity: 1, y:0 },
                        hidden: { opacity: 0, y:100 }
                    }}

                    className="mt-4">
                    Podstawą korzystania z siłowni jest zakup biletu jednorazowego, karnetu lub skorzystanie z karty Benefit, po wcześniejszym okazaniu dokumentu ze zdjęciem.
                </motion.li>

                <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3}}
                    variants={{
                        visible: { opacity: 1, y:0 },
                        hidden: { opacity: 0, y:100 }
                    }}
                    className="mt-4">
                    Osoby korzystające z siłowni oświadczają, że nie mają przeciwwskazań zdrowotnych do wykonywania ćwiczeń fizycznych i wykonują je na własną odpowiedzialność. Osoby z problemami zdrowotnymi powinny skonsultować się z lekarzem przed rozpoczęciem treningu.
                </motion.li>

                <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3}}
                    variants={{
                        visible: { opacity: 1, y:0 },
                        hidden: { opacity: 0, y:100 }
                    }}
                    className="mt-4">
                    Wejście na siłownię możliwe jest tylko w odpowiednim, kompletnym stroju sportowym oraz czystym, zmienionym obuwiu sportowym.
                </motion.li>

                <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3}}
                    variants={{
                        visible: { opacity: 1, y:0 },
                        hidden: { opacity: 0, y:100 }
                    }}
                    className="mt-4">
                    Podczas ćwiczeń obowiązkowe jest korzystanie z własnego ręcznika.
                </motion.li>

                <motion.li 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3}}
                    variants={{
                        visible: { opacity: 1, y:0 },
                        hidden: { opacity: 0, y:100 }
                    }}
                    className="mt-4">
                    Klub nie ponosi odpowiedzialności za rzeczy pozostawione poza zamkniętą szafką. Należy upewnić się, że szafka została prawidłowo zamknięta kłódką. Kłódki pozostawione na szafkach po zamknięciu siłowni będą rozcinane.
                </motion.li>

                <motion.li 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3}}
                    variants={{
                        visible: { opacity: 1, y:0 },
                        hidden: { opacity: 0, y:100 }
                    }}
                    className="mt-4">
                    Ćwiczenia na przyrządach można wykonywać po zapoznaniu się z instrukcją urządzenia, z zachowaniem zasad bezpieczeństwa oraz poszanowania sprzętu i innych osób.
                </motion.li>

                <motion.li 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3}}
                    variants={{
                        visible: { opacity: 1, y:0 },
                        hidden: { opacity: 0, y:100 }
                    }}
                    className="mt-4">
                    Ćwiczący powinni dobierać obciążenia, nad którymi są w stanie zapanować. Trening z większym obciążeniem wymaga asekuracji innej osoby lub instruktora.
                </motion.li>

                <motion.li 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3}}
                    variants={{
                        visible: { opacity: 1, y:0 },
                        hidden: { opacity: 0, y:100 }
                    }}
                    className="mt-4">
                    Przed ćwiczeniami należy sprawdzić stan urządzenia. Wszelkie usterki lub uszkodzenia sprzętu należy zgłaszać instruktorowi.
                </motion.li>

                <motion.li 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3}}
                    variants={{
                        visible: { opacity: 1, y:0 },
                        hidden: { opacity: 0, y:100 }
                    }}
                    className="mt-4">
                    Osoby, które źle się poczują w trakcie ćwiczeń lub pobytu na siłowni, zobowiązane są natychmiast przerwać ćwiczenia i powiadomić obsługę siłowni.
                </motion.li>

                <motion.li 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3}}
                    variants={{
                        visible: { opacity: 1, y:0 },
                        hidden: { opacity: 0, y:100 }
                    }}
                    className="mt-4">
                    Przed rozpoczęciem treningu należy wykonać rozgrzewkę, aby uniknąć kontuzji.
                </motion.li>

                <motion.li 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3}}
                    variants={{
                        visible: { opacity: 1, y:0 },
                        hidden: { opacity: 0, y:100 }
                    }}
                    className="mt-4">
                    Po zakończeniu ćwiczeń należy uporządkować sprzęt i stanowisko, pozostawiając je w takim stanie, w jakim się je zastało.
                </motion.li>

                <motion.li 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3}}
                    variants={{
                        visible: { opacity: 1, y:0 },
                        hidden: { opacity: 0, y:100 }
                    }}
                    className="mt-4">
                    Obsługa ma prawo wyprosić osoby łamiące postanowienia regulaminu lub te, wobec których istnieje uzasadnione podejrzenie, że będą naruszać regulamin lub przepisy prawa, nawet jeśli wstęp został opłacony.
                </motion.li>

                <motion.li 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3}}
                    variants={{
                        visible: { opacity: 1, y:0 },
                        hidden: { opacity: 0, y:100 }
                    }}
                    className="mt-4">
                    Osoby korzystające z siłowni ponoszą odpowiedzialność finansową za wszelkie szkody lub zniszczenia wyrządzone na jej terenie.
                </motion.li>

                <motion.li 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3}}
                    variants={{
                        visible: { opacity: 1, y:0 },
                        hidden: { opacity: 0, y:100 }
                    }}
                    className="mt-4">
                    Siłownia nie ponosi odpowiedzialności za kontuzje i urazy powstałe wskutek niewłaściwego korzystania z urządzeń lub nieprzestrzegania regulaminu oraz zasad bezpieczeństwa.
                </motion.li>

            </motion.ol>
        </motion.div>
    )
}

export default Home;