'use client'
import Michal from '../Images/ma-300-1.jpg'
import Zoska from '../Images/Zoska.jpg';
import { motion } from "framer-motion";

const AnimationSettings = {
    transition: { duration: 0.5 },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };
  

function ONas(){
    return(
        <motion.div {...AnimationSettings} className="pt-5 pb-5 row ">
            <h1 className="text-center col-12 heading-center-column text-uppercase headingSize">
            CarbonGym <span className="spanSmall">by</span> Michał Adach
            </h1>
            <p className="mt-3 text-center col o-nas text-mid px-4 ">
                <span className='spanSmall text-center'>
                    Węgiel (carbon)
                </span> to pierwiastek chemiczny z grupy niemetali, jest podstawą życia na Ziemi, opiera się na nim cała chemia organiczna. Ponadto jego odmiana – DIAMENT jest jednym z najtwardszych materiałów na Ziemi, z kolei inna odmiana – GRAFIT jest miękka i można nią rysować po delikatnym papierze…
                Carbon
                CARBON GYM ma być miejscem, gdzie każdy znajdzie i osiągnie to, czego akurat potrzebuje: muskulaturę twardą jak diament lub delikatne, smukłe i giętkie ciało. A na pewno ma to być miejsce, które da Ci zdrowie, sprawność i dobre samopoczucie!
            </p>
            <h1 className="text-center col-12 heading-center-column mt-3 mb-3 text-uppercase headingSize">
            Nasi Trenerzy
            </h1>
            <h1 className="text-center mt-2 col-12 w-100 heading-center-column text-uppercase headingSize">
                Michał Adach
            </h1>
            <div className="col px-4">
                <motion.img 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, y:0 },
                  hidden: { opacity: 0, y:100 }
                }}
                alt="" src={Michal.src} className='mx-2 w-25 rounded float-start minWidthImg'/>
                <div className="separator"></div>
                <p className="text-mid o-nas text-under-sm">
                    ‍Sport towarzyszył mi od zawsze. Najpierw fascynacja piłką nożną, treningi i mecze z „Mazowsze Grójec”. Do czasu kontuzji stawów skokowych, których ciągłe nadwyrężanie zmieniło się w zwyrodnienie. Koniec kariery piłkarza… ale to nie mógł być koniec sportowych wyzwań, emocji, endorfin i przekraczania własnych granic. Na siłownię zacząłem chodzić, żeby wzmacniać swoją kondycję fizyczną, szybko się zapaliłem do tego sportu i podporządkowałem mu całe życie.
                    ‍Zdobyłem uprawnienia trenera kulturystyki, potem trenera personalnego, certyfikat z dietetyki sportowej. Początkowo chciałem wykorzystać wiedzę dla własnych potrzeb, być coraz lepszym. Potem zacząłem pomagać znajomym, znajomym znajomych… Zauważyłem, że lubię przekazywać swoje doświadczenie innym a ich wyniki przynosiły mi ogromną satysfakcję. Doba zaczęła być zbyt krótka… a teraz czas na kolejny krok i wreszcie spełnienie wieloletniego marzenia! Własny klub – miejsce, w którym każdy będzie mógł zdobyć zdrowie, dobrą kondycję, piękną sylwetkę według własnych potrzeb i pragnień. Przestrzeń, gdzie będzie się dużo działo, będą wyznaczane i osiągane cele, gdzie będzie można się zrelaksować i zapomnieć o codziennych stresach. 
                </p>
            </div>
            <h1 className="text-center mt-3 col-12 heading-center-column text-uppercase headingSize">
                Zosia Gembarzewska-Adach
            </h1>
            <div className="col px-4">
                <motion.img 
                initial="hidden"
                 whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 }
                  }}
                
                className='mx-2 w-25 float-start rounded minWidthImg ' 
                alt="" 
                src={Zoska.src}/>
               <div className="separator"></div>
                <p className="mx-12 o-nas text-mid">
                Z wykształcenia biolog z zacięciem dydatktycznym, również akademickim. Cierpliwie wytłumaczy, wysłucha i powtórzy nawet po raz setny tak, że nawet największy sportowy antytalent osiągnągnie wymarzony cel! Instruktor sportów siłowych i kulturystyki, stretchingu oraz treningu z ketlami. Zawodowo i prywatnie lubi wyzwania i dążenie do ciągłego doskonalenia. Treningi stara się prowadzić z podejściem holistycznym bardzo indywidualnie, wykorzystując maksymalnie różnorodny sprzęt i metody, a największą radość sprawia jej gdy przez ruch pomaga podopiecznym nie tylko schudnąć czy świetnie wyglądać ale również być zdrowym i … zdrowszym. Prywatnie pasjonatka biegów ekstremalnych, jogi, mma, tatuaży i kotów. Specjalność: trening siłowy, wzmacniający, mobilizacyjny ,stretching, zdrowy kręgosłup, trening funkcjonalny, wzmacniający, core. Trenuje z kobietami i mężczyznami                </p>
            </div>
        </motion.div>
    )
}

export default ONas